> https://github.com/api/book/1998/1?sortBy=name
```
app.get('/api/book/:year/:month, (req,res)=>{
res.send(req.params)
});
{
  year:1998,
  month:1
 }
```
```
app.get('/api/book/:year/:month, (req,res)=>{
res.send(req.query)
});
{
  sortBy:name
 }
```
