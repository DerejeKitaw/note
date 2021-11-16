### Construct select statement
> Data to insert
```json
{
   "CompanyName": "Mulesoft",
   "ContactName": "Dereje Kitaw",
   "CustomerID": "DTK123"
}
```

> Dataweave

```dw
%dw 2.0
output application/json
var table = "Customers" // attributes.entitySetName
var remoteEntityName = table match {
	case remoteEntityName is String -> remoteEntityName
	else -> ""	
}
var valuesFromPayload = {
	keys: payload pluck $$,
	values: payload pluck "'$'"
}
var columns = ( (valuesFromPayload.keys map "`$`" ) joinBy ", ") // "`CompanyName`, `ContactName`, `CustomerID`"
var values = (valuesFromPayload.values joinBy ", ") // "'Mulesoft', 'Dereje Kitaw', 'DTK123'"
---
"INSERT INTO $remoteEntityName ($columns) VALUES ($values)"
```
> Output
```
"INSERT INTO Customers (`CompanyName`, `ContactName`, `CustomerID`) VALUES ('Mulesoft', 'Dereje Kitaw', 'DTK123')"
```
