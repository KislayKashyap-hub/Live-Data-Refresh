import { LightningElement, track } from 'lwc';
import fetchRecords from '@salesforce/apex/RecordFetch.fetchRecords';
import fetchObjectNames from '@salesforce/apex/RecordFetch.fetchObjectNames';

export default class ObjectRecordTable extends LightningElement {
    @track objectOptions = [];
    @track records = [];
    @track showDateFields = false;
    @track isSearchDisabled = true;
    @track columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Created Date', fieldName: 'CreatedDate', type: 'date' },
    ];

    selectedObject;
    startDate;
    endDate;

    connectedCallback() {
        this.loadObjectOptions();
    }

    async loadObjectOptions() {
        try {
            const data = await fetchObjectNames();
            this.objectOptions = data.map(objectName => ({ label: objectName, value: objectName }));
        } catch (error) {
            console.error('Error fetching object names:', error);
        }
    }

    handleObjectChange(event) {
        this.selectedObject = event.detail.value;
        this.showDateFields = !!this.selectedObject;
        this.checkSearchAvailability();
    }

    handleStartDateChange(event) {
        this.startDate = event.target.value;
        this.checkSearchAvailability();
    }

    handleEndDateChange(event) {
        this.endDate = event.target.value;
        this.checkSearchAvailability();
    }

    checkSearchAvailability() {
        this.isSearchDisabled = !(this.selectedObject && this.startDate && this.endDate);
    }

    async handleSearch() {
        try {
            const data = await fetchRecords({
                objectName: this.selectedObject,
                startDate: this.startDate,
                endDate: this.endDate,
            });
            this.records = data;
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    }
}
