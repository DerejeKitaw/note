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
---

payload update {
       case .assignee ->  "updated value"
}
```
> return
```json
{
  "package": "org.dtk",
  "class": "SomeTestCase",
  "name": "validateStatus",
  "age": 5,
  "assignee": "updated value"
}
```
