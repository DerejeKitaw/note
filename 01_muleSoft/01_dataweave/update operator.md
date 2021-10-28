> payload
```json
{
            "package": "org.dtk",
            "class": "SomeTestCase",
            "name": "validateStatus",
            "age": 5,
            "assignee": "Dereje"
}
```

```
%dw 2.0
output application/json
var assigne = "assignee"
---
payload update {
       case .assignee ->  "a"
}
```
> return
```json
{
  "package": "org.acme.runtime",
  "class": "SomeTestCase",
  "name": "validateStatus",
  "age": 5,
  "assignee": "a"
}
```
