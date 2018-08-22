# How to use enviroment variable in postman
![postman](./DOC/postman_1.png)
![postman](./DOC/postman_2.png)
![postman](./DOC/postman_3.png)
![postman](./DOC/postman_4.png)

# How to save bearer token in environmental variable for future use.

pm.environment.set("bearer", test);

pm.environment.set("bearer", pm.response.json().token.split(" ").pop(-1));
![postman](./DOC/postman_5.png)

# Using saved bearer in a collection

![postman](./DOC/postman_6.png)