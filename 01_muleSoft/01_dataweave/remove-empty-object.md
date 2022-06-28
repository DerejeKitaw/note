> input
```json
[
    {
    "message": "Hello world!"
},
{
    "message": "Hello world!"
},
{
    
},
{
    
}
]
```
>Dataweave
```dwl
%dw 2.0
output application/json
---
payload - {}
```
> Output
```json
[
  {
    "message": "Hello world!"
  },
  {
    "message": "Hello world!"
  }
]
```
