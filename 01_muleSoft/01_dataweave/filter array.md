> Input
```json
[10,20,30,40,50,60]
```

```dw
%dw 2.0
output application/json
---
// payload map ((item, index) -> {
//     (index +1):item
// })
// reduce(values, accumulator={})->if((values.'10') mod 2 == 1)accumulator ++ values else accumulator
//  values  map ((item, index) -> {(item.name):item.age}) reduce((item,accumulator={})->accumulator ++ item)

 payload map ((item, index) -> {
    (index +1):item
})  reduce(values, accumulator={})->if((values mapObject ((value, key, index) -> {((key):value) if ((key mod 2)!=1)}))=={})accumulator ++ values else accumulator
//  values  reduce(values, accumulator={})->if(true)accumulator ++ values else {}
// 5 mod 2
// (d mapObject ((value, key, index) -> {((key):value) if ((key mod 2)==1)}))=={}
```

> output
```json
{
  "1": 10,
  "3": 30,
  "5": 50
}
```
