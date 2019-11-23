### [encoded password into connection string](https://stackoverflow.com/questions/7486623/mongodb-password-with-in-it). 

> Encode your password from [https://www.url-encode-decode.com](https://www.url-encode-decode.com)

> For example:
> Actual Password: ABCDEX$KrrpvDzRTy`@drf.';3X
> Encoded Password: ABCDEX%24KrrpvDzRTy%60%40drf.%27%3B3X

> mongodb://user1:ABCDEX%24KprpvDzRTy%60%40drf.%27%3B3X@dstest.com:1234,ds1234-test.com:19889/mongo-dev?replicaSet=rs-ds123546978&ssl=true',
