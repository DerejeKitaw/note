```dw
%dw 2.0
output application/json
var number=(1 to 10)
fun isOaddNum(n)=(n mod 2)==1 // function as a value
---
// isOaddNum(2) // false
// isOaddNum(3) // true
 filter(number,(n,a)->isOaddNum(n))
```
> result
 ```json
 [
  1,
  3,
  5,
  7,
  9
]
 ```
 
 #### Filter this given array so it contains only numbers that are greater than 3 using a lambda.
 ```dw
%dw 2.0
output application/json
var number=[0, 5, -32, 4, 66, 776, 3, 10, 1]
fun isGreaterThanThree(n)= 3 < n 
var isGreaterThanThree1=(n)-> 3 < n // Lamda function
---
// isGreaterThanThree(2) // false
// isGreaterThanThree(4) // true
//  filter(number,(n,a)->isGreaterThanThree(n))
 filter(number,(n,a)->isGreaterThanThree1(n))

 ```
 > result
 ```
 [
  5,
  4,
  66,
  776,
  10
]
```
