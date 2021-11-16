```dw
%dw 2.0
output json
var result = {"status" : "faild"}
---
result.status match{
    case "ok" ->{"message": "Request successfully processed."}
    case "faild" ->{"message": "Please try again later."}
}
```
> result
```json
{"message": "Please try again later."}
```

### can be used to et default value
```
var remoteEntityName = attributes.entitySetName match {
	case remoteEntityName is String -> remoteEntityName
	else -> ""	
}
```

> Return empty string if `remoteEntityName` is not string
