### [Install materialize](https://materializecss.com/getting-started.html)
```
yarn add materialize-css@next
```

### import materialize
```
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
```

### Initialize materialize
```js
import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div>
        App works
    </div>
  )
}

export default App

```

### add material icon (optional)
```html
<link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
```