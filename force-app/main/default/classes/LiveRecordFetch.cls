public with sharing class LiveRecordFetch {

    // Method to fetch the latest 20 records for any given object
    @AuraEnabled(cacheable=true)
    public static List<SObject> fetchLatestRecords(String objectName) {
        try {
            String query = 'SELECT Id, Name, CreatedDate FROM ' + String.escapeSingleQuotes(objectName) +
                           ' ORDER BY CreatedDate DESC LIMIT 20';
            return Database.query(query);
        } catch (Exception e) {
            throw new AuraHandledException('Error fetching latest records: ' + e.getMessage());
        }
    }

    // Method to fetch all queryable objects in the Salesforce org
    @AuraEnabled(cacheable=true)
    public static List<String> fetchAllQueryableObjects() {
        List<String> objectNames = new List<String>();

        // Query all objects that are queryable
        List<EntityDefinition> entityDefinitions = [SELECT QualifiedApiName FROM EntityDefinition WHERE IsQueryable = true];

        for (EntityDefinition obj : entityDefinitions) {
            objectNames.add(obj.QualifiedApiName);  // Add the object name to the list
        }

        return objectNames;
    }
}
