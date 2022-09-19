### Input
```String
"Summery:success:3fail:4total:7"
```
### Output
```json
{
  "Summery": [
    "success:3",
    "fail:4",
    "total:7"
  ]
}
```

### Solution
```dwl
%dw 2.0
import * from dw::core::Strings
output application/json
var summery = substring(payload, 8, sizeOf(payload))
--- 
Summery:(summery substringBefore("total:")substringBefore("fail:")++",") ++
 (summery substringBefore("total:")substringAfter(summery substringBefore("total:")substringBefore("fail:")) ++",")++"total:" ++ (summery substringAfter  ("total:"))
splitBy  (",")
```
