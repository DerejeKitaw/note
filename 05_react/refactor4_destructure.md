```js
const images = props.images.map(image => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.regular} />
    );
  });
```
to 
```js
const images = props.images.map(({description,id,urls}) => {
    return (
      <img alt={description} key={id} src={urls.regular} />
    );
  });
```
