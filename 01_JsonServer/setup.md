### Install json server
```
npm i json-server -D
```
 
### set server
```js
// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// server.use('/api', router)
server.use(middlewares)
server.use(router)
server.listen(8081, () => {
  console.log('JSON Server is running 8081')
})
```
### Set database format fro todos
```json
{
  "todos": [
    {
      "id": "b391ebb3-f709-45d4-993c-860d155bd93d",
      "description": "Why am I reading"
    },
    {
      "id": "73a9c154-3a00-4f2a-b0fa-601b92908f0c",
      "description": "Love prog"
    }
  ]
}
```
### Set script
```json
"db": "json-server -w db.json --port 8081"
```
### run json server
```
npm run db
```
### fetch data
```
http://localhost:8081/todos
```
