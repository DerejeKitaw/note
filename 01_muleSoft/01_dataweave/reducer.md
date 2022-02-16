input
```json
[
  {
    "message": "Hello world!"
  },
  {
    "message": "Hello world!!"
  }
]
```
```
%dw 2.0
output application/json
---
payload reduce ((item, accumulator) -> {
     (accumulator ++ item)
})
```

> Output
```json
{
  "message": "Hello world!",
  "message": "Hello world!!"
}
```

> Input
```json
[
  {
    "name": "Dereje",
    "message": "Hello world!"
  },
  {
    "name": "Kitaw",
    "message": "Hello world!!"
  }
]
```
```
%dw 2.0
output application/json
---
payload map ((item, index) -> {(item.name):item.message}) reduce((item,accumulator={})->accumulator ++ item)
```
> Output
```
{
  "Dereje": "Hello world!",
  "Kitaw": "Hello world!!"
}
```



