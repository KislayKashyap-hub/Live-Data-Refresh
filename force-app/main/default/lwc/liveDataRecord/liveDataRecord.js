import { LightningElement, track, api } from 'lwc';
import fetchLatestRecords from '@salesforce/apex/LiveRecordFetch.fetchLatestRecords';
import fetchAllQueryableObjects from '@salesforce/apex/LiveRecordFetch.fetchAllQueryableObjects';

export default class LiveDataRecord extends LightningElement {
    @api selectedObject;  // The selected object name
    @track latestRecords = [];  // Holds the latest records
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Created Date', fieldName: 'CreatedDate', type: 'date' }
    ];
    @track objectOptions = [];  // This will hold all available objects

    pollingInterval;

    connectedCallback() {
        // Fetch the list of all queryable objects
        this.loadObjectOptions();
        this.startPolling();
    }

    disconnectedCallback() {
        // Clear polling when the component is removed
        clearInterval(this.pollingInterval);
    }

    // Fetch the list of all queryable objects
    async loadObjectOptions() {
        try {
            const data = await fetchAllQueryableObjects();
            this.objectOptions = data.map((objectName) => ({
                label: objectName,
                value: objectName
            }));
        } catch (error) {
            console.error('Error fetching object options:', error);
        }
    }

    // Start polling to fetch the latest data
    startPolling() {
        this.pollingInterval = setInterval(() => {
            this.fetchData();
        }, 5000); // Polling every 5 seconds
    }

    // Fetch the latest records from Apex
    async fetchData() {
        try {
            // Call the Apex method to get the latest records
            const data = await fetchLatestRecords({ objectName: this.selectedObject });
            this.latestRecords = data;
        } catch (error) {
            console.error('Error fetching latest records:', error);
        }
    }

    // Handle object selection from the combobox
    handleObjectChange(event) {
        this.selectedObject = event.detail.value;  // Update the selected object
        this.fetchData();  // Fetch the latest data for the selected object
    }
}
