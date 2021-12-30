> Input
```json
[
    {
        "name":"Joe",
        "age":12
    },
    {
        "name":"Dave",
        "age":13
    }
]
```
>Dataweave
```dw
%dw 2.0
output application/json
---
payload map ((item, index) -> {(item.name):item.age}) reduce((item,accumulator={})->accumulator ++ item)
```

>Output
```json
{
  "Joe": 12,
  "Dave": 13
}
```
