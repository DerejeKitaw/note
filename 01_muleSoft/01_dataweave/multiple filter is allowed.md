```
%dw 2.0
output application/json
var number=[0, 5, -32, 4, 66, 776, 3, 10, 1]
fun isOaddNum(n)=(n mod 2)==1
fun isGreaterThanThree(n)= 3 < n 
var isGreaterThanThree1=(n)-> 3 < n // Lamda function
---
// isGreaterThanThree(2) // false
// isGreaterThanThree(4) // true
//  filter(number,(n,a)->isGreaterThanThree(n))
 filter(number,(n,a)->isGreaterThanThree1(n))
 filter((n,a)->isOaddNum(n))
 ```
 > return
 ```
 [5]
 ```
