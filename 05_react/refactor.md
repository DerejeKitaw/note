```js
return (
    <div>
    {season === 'winter'? 'It is chilly': 'Summer time'}
    </div>
```
to

```
const text = season === 'winter' ? 'It is chilly' : 'Summer time';
  return (
    <div>
      {text}
    </div>
  );
  ```
  
  
```js
import React from 'react';

// Get season
const getSeason = (lat, month) => {
  console.log('month', month);
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  console.log(season);
  const text = season === 'winter' ? 'It is chilly' : 'Summer time';
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div>
    <i className={`${icon} icon`} />
    <h1>{text}</h1>
    <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
```

to
```js
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'Summer time',
    iconName: 'sun'
  },
  winter: {
    text: 'It is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  console.log('month', month);
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  // seasonConfig[season] // will return {text, iconName}
  const { text, iconName } = seasonConfig[season];
  return (
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
```
