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
