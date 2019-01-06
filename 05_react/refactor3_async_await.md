```js
 onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fdfa07ee5ca7152e02678742581b185'
        }
      })
      .then(response => {
        console.log(response.data.results);
      });
  }
```

to

```js
async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fdfa07ee5ca7152e02678742581b185'
      }
    });
    console.log(response.data.results);
  }
```
