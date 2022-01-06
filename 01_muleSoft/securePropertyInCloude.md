### To hide properties in the cloude hub

> Example: To Hide "key.inc" from the cloud hub, add the key in mule-artifact.json and deploy it. 
> Once deployed the property key.inc will be hidden in runtime manager setting

mule-artifact.json
```json
{
  "minMuleVersion": "4.4.0",
  "secureProperties": ["key.inc"]
}
