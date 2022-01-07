## [SOQL - Generator source](https://workbench.developerforce.com/login.php)
## [Escaped Character Examples](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_quotedstringescapes.htm)
```
SELECT Id FROM Account WHERE Name LIKE 'Ter%'
Select all accounts whose name begins with the three character sequence 'Ter'.
SELECT Id FROM Account WHERE Name LIKE 'Ter\%'
Select all accounts whose name exactly matches the four character sequence 'Ter%'.
SELECT Id FROM Account WHERE Name LIKE 'Ter\%%'
Select all accounts whose name begins with the four character sequence 'Ter%'

```
## [Reserved Characters](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_reservedcharacters.htm)
```
' (single quote)
\ (backslash)
For example, to query the Account Name field for “Bob's BBQ,” use the following SELECT statement:
SELECT Id
FROM Account
WHERE Name LIKE 'Bob\'s BBQ'
```
## [Logical Operators](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_logicaloperators.htm)
```
SELECT Id FROM Contact WHERE LastName = 'foo' or Account.Name = 'bar'
```

## [Alias Notation](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_alias.htm)
> You can use alias notation in SELECT queries.
```
SELECT count()
FROM Contact c, c.Account a
WHERE a.name = 'MyriadPubs'
```
> To establish the alias, first identify the object, in this example a contact, and then specify the alias, in this case “c.” For the rest of the SELECT statement, you can use the alias in place of the object or field name.

> The following are SOQL keywords that can’t be used as alias names: AND, ASC, DESC, EXCLUDES, FIRST, FROM, GROUP, HAVING, IN, INCLUDES, LAST, LIKE, LIMIT, NOT, NULL, NULLS, OR, SELECT, WHERE, WITH

```
SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts)
FROM Account
```
```json
[
    {
        "Contacts": null,
        "Id": null,
        "type": "Account",
        "Name": "John Doe3"
    },
    {
        "Contacts": [
            {
                "Id": null,
                "LastName": "Gonzalez",
                "type": "Contact"
            },
            {
                "Id": null,
                "LastName": "Forbes",
                "type": "Contact"
            }
        ],
        "Id": null,
        "type": "Account",
        "Name": "Edge Communications"
    },
    {
        "Contacts": [
            {
                "Id": null,
                "LastName": "Rogers",
                "type": "Contact"
            }
        ],
        "Id": null,
        "type": "Account",
        "Name": "Burlington Textiles Corp of America"
    },
    {
        "Contacts": [
            {
                "Id": null,
                "LastName": "Stumuller",
                "type": "Contact"
            }
        ],
        "Id": null,
        "type": "Account",
        "Name": "Pyramid Construction Inc."
    },
    {
        "Contacts": [
            {
                "Id": null,
                "LastName": "Young",
                "type": "Contact"
            }
        ],
        "Id": null,
        "type": "Account",
        "Name": "Dickenson plc"
    },
    {
        "Contacts": [
            {
                "Id": null,
                "LastName": "Llorrac",
                "type": "Contact"
            },
            {
                "Id": null,
                "LastName": "Nedaerk",
                "type": "Contact"
            }
        ],
        "Id": null,
        "type": "Account",
        "Name": "sForce"
    }
]
```
> To get all fields
```
SELECT FIELDS(ALL) FROM Contact
```
```
SELECT FIELDS(STANDARD) FROM Contact
```
```json
[
    {
        "LastModifiedDate": "2021-01-27T03:42:17.000Z",
        "AccountId": "0014x00000CtPSYAA3",
        "Email": "b.levy@expressl&t.net",
        "type": "Contact",
        "MobilePhone": "(503) 421-5451",
        "Name": "Babara Levy",
        "Department": "Operations",
        "OtherLongitude": null,
        "CreatedById": "0054x000003lZsJAAU",
        "OtherCity": null,
        "MailingLatitude": null,
        "PhotoUrl": "/services/images/photo/0034x0000097xWpAAI",
        "MasterRecordId": null,
        "IndividualId": null,
        "IsDeleted": "false",
        "OtherGeocodeAccuracy": null,
        "IsEmailBounced": "false",
        "LastViewedDate": null,
        "MailingCity": null,
        "Birthdate": "1937-12-16",
        "OtherStreet": null,
        "OtherLatitude": null,
        "CleanStatus": "Pending",
        "LeadSource": "Word of mouth",
        "CreatedDate": "2021-01-27T03:42:17.000Z",
        "OtherAddress": null,
        "Id": "0034x0000097xWpAAI",
        "LastName": "Levy",
        "MailingStreet": "620 SW 5th Avenue Suite 400\nPortland, Oregon 97204\nUnited States",
        "Jigsaw": null,
        "AssistantPhone": "(503) 421-6782",
        "EmailBouncedDate": null,
        "OtherPhone": null,
        "Description": null,
        "AssistantName": "Ron Sage",
        "MailingCountry": null,
        "LastReferencedDate": null,
        "Salutation": "Ms.",
        "OtherState": null,
        "MailingState": null,
        "OwnerId": "0054x000003lZsJAAU",
        "MailingLongitude": null,
        "Phone": "(503) 421-7800",
        "MailingPostalCode": null,
        "OtherCountry": null,
        "LastCUUpdateDate": null,
        "MailingGeocodeAccuracy": null,
        "EmailBouncedReason": null,
        "FirstName": "Babara",
        "OtherPostalCode": null,
        "Title": "SVP, Operations",
        "MailingAddress": {
            "country": null,
            "city": null,
            "countryCode": null,
            "street": "620 SW 5th Avenue Suite 400\nPortland, Oregon 97204\nUnited States",
            "latitude": null,
            "postalCode": null,
            "geocodeAccuracy": null,
            "stateCode": null,
            "state": null,
            "longitude": null
        },
        "LastCURequestDate": null,
        "SystemModstamp": "2021-01-27T03:42:17.000Z",
        "HomePhone": null,
        "ReportsToId": null,
        "LastActivityDate": null,
        "Fax": "(503) 421-7801",
        "LastModifiedById": "0054x000003lZsJAAU",
        "JigsawContactId": null
    },
    {
        "LastModifiedDate": "2021-01-27T03:42:17.000Z",
        "AccountId": "0014x00000CtPSXAA3",
        "Email": "asong@uog.com",
        "type": "Contact",
        "MobilePhone": "(212) 842-4535",
        "Name": "Arthur Song",
        "Department": "Executive Team",
        "OtherLongitude": null,
        "CreatedById": "0054x000003lZsJAAU",
        "OtherCity": null,
        "MailingLatitude": null,
        "PhotoUrl": "/services/images/photo/0034x0000097xWsAAI",
        "MasterRecordId": null,
        "IndividualId": null,
        "IsDeleted": "false",
        "OtherGeocodeAccuracy": null,
        "IsEmailBounced": "false",
        "LastViewedDate": null,
        "MailingCity": null,
        "Birthdate": "1952-08-27",
        "OtherStreet": null,
        "OtherLatitude": null,
        "CleanStatus": "Pending",
        "LeadSource": "Public Relations",
        "CreatedDate": "2021-01-27T03:42:17.000Z",
        "OtherAddress": null,
        "Id": "0034x0000097xWsAAI",
        "LastName": "Song",
        "MailingStreet": "1301 Avenue of the Americas \nNew York, NY 10019\nUSA",
        "Jigsaw": null,
        "AssistantPhone": "(212) 842-5464",
        "EmailBouncedDate": null,
        "OtherPhone": null,
        "Description": null,
        "AssistantName": "Pat Feinstein",
        "MailingCountry": null,
        "LastReferencedDate": null,
        "Salutation": "Mr.",
        "OtherState": null,
        "MailingState": null,
        "OwnerId": "0054x000003lZsJAAU",
        "MailingLongitude": null,
        "Phone": "(212) 842-5500",
        "MailingPostalCode": null,
        "OtherCountry": null,
        "LastCUUpdateDate": null,
        "MailingGeocodeAccuracy": null,
        "EmailBouncedReason": null,
        "FirstName": "Arthur",
        "OtherPostalCode": null,
        "Title": "CEO",
        "MailingAddress": {
            "country": null,
            "city": null,
            "countryCode": null,
            "street": "1301 Avenue of the Americas \nNew York, NY 10019\nUSA",
            "latitude": null,
            "postalCode": null,
            "geocodeAccuracy": null,
            "stateCode": null,
            "state": null,
            "longitude": null
        },
        "LastCURequestDate": null,
        "SystemModstamp": "2021-01-27T03:42:17.000Z",
        "HomePhone": null,
        "ReportsToId": null,
        "LastActivityDate": null,
        "Fax": "(212) 842-5501",
        "LastModifiedById": "0054x000003lZsJAAU",
        "JigsawContactId": null
    }
  ]
  ```
```
SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingState='California'
SELECT Name FROM Account WHERE CreatedDate > 2011-04-26T10:00:00-08:00
SELECT Amount FROM Opportunity WHERE CALENDAR_YEAR(CreatedDate) = 2011

SELECT AccountId
FROM Event
WHERE ActivityDate != null

SELECT Id
FROM Case
WHERE Contact.LastName = null

SELECT Company, toLabel(Status)
FROM Lead
WHERE toLabel(Status) = 'le Draft'

WHERE BooleanField = TRUE 

WHERE BooleanField = FALSE

SELECT Id, MSP1__c from CustObj__c WHERE MSP1__c includes ('AAA;BBB','CCC')

SELECT Id, MSP1__c FROM CustObj__c WHERE MSP1__c = 'AAA;BBB'

SELECT Id
FROM Event
WHERE What.Type IN ('Account', 'Opportunity')

The % and _ wildcards are supported for the LIKE operator.
The % wildcard matches zero or more characters.
The _ wildcard matches exactly one character.
The text string in the specified value must be enclosed in single quotes.
The LIKE operator is supported for string fields only.
The LIKE operator performs a case-sensitive match for case-sensitive fields, and a case-insensitive match for case-insensitive fields.
The LIKE operator in SOQL and SOSL supports escaping of special characters % or _.
Don’t use the backslash character in a search except to escape a special character.

The following query matches Appleton, Apple, and Appl, but not Bappl:
SELECT AccountId, FirstName, lastname
FROM Contact
WHERE lastname LIKE 'appl%'

SELECT Name FROM Account
WHERE BillingState IN ('California', 'New York')

SELECT Name FROM Account
WHERE BillingState NOT IN ('California', 'New York')

SELECT Id FROM Contact WHERE LastName = 'foo' or Account.Name = 'bar'

```
## [Date Formats](https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm)
```
SELECT Id
FROM Account
WHERE CreatedDate > 2005-10-08T01:02:03Z

SELECT Id FROM Opportunity WHERE CloseDate > NEXT_N_DAYS:15

```
