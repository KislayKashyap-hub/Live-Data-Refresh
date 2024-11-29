public with sharing class RecordFetch {
    
    @AuraEnabled(cacheable=true)
    public static List<String> fetchObjectNames() {
        // Declare a list to hold the object names
        List<String> objectNames = new List<String>();
        
        // Check if the current user has access to the EntityDefinition object
        if (Schema.sObjectType.EntityDefinition.isAccessible()) {
            // Query all objects that are queryable
            List<EntityDefinition> entityDefinitions = [SELECT QualifiedApiName FROM EntityDefinition WHERE IsQueryable = true LIMIT 100];
            
            // Loop through the entity definitions and add each object name to the list
            for (EntityDefinition obj : entityDefinitions) {
                objectNames.add(obj.QualifiedApiName);
            }
        } else {
            throw new AuraHandledException('User does not have access to the EntityDefinition object.');
        }
        
        // Return the list of object names
        return objectNames;
    }

    @AuraEnabled(cacheable=true)
    public static List<SObject> fetchRecords(String objectName, Date startDate, Date endDate) {
        // Get a map of all objects in the org
        Map<String, Schema.SObjectType> globalDescribe = Schema.getGlobalDescribe();
        
        // Check if the object exists in the global describe map and if it is queryable
        if (globalDescribe.containsKey(objectName)) {
            Schema.SObjectType sObjectType = globalDescribe.get(objectName);
            Schema.DescribeSObjectResult describeResult = sObjectType.getDescribe();
            
            // Check if the current user has read access to the object
            if (describeResult.isAccessible()) {
                try {
                    String query = 'SELECT Id, Name, CreatedDate FROM ' + String.escapeSingleQuotes(objectName) +
                                   ' WHERE CreatedDate >= :startDate AND CreatedDate <= :endDate';
                    return Database.query(query);
                } catch (Exception e) {
                    throw new AuraHandledException('Error fetching records: ' + e.getMessage());
                }
            } else {
                throw new AuraHandledException('User does not have read access to the ' + objectName + ' object.');
            }
        } else {
            throw new AuraHandledException('The object ' + objectName + ' does not exist.');
        }
    }
}
