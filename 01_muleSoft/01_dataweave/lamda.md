#### Example 1
>lambdas are values just like Strings, we can assign them to variables. 
> This effectively gives a name to an unnamed function and allows us to use a lambda just like a normal function
```dw
%dw 2.0
output json

var add = (n, m) -> n + m
---
add(2, 3)
```
> result
```
5
```

#### Example 2
```
%dw 2.0
output json
var isOddNum =(value)->value mod 2
var number =20
---
isOddNum(number)
```
> result
```
0
```
