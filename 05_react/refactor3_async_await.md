```js
 onSearchSubmit(term) {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: term },
        headers: {
          Authorization:
            'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fd'
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
          'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fd'
      }
    });
    console.log(response.data.results);
  }
```

or with arrow function
```
onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fd'
      }
    });
    console.log(this);
    this.setState({ images: response.data.results });
  };
  ```
  
  OR
  
  unsplash.js
  ```js
  import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 6f42c4095ea4bb56975b2b566bfb96fd0fdfa07ee5ca7152e02678742581b185'
  }
});
```
and
```js
  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      
    });
    console.log(this);
    this.setState({ images: response.data.results });
  };
```
