> Gatekeeper can be disabled by starting mule with the following start-up parameter:
> For Mule Runtime 3.x
```
anypoint.platform.gatekeeper=false
```
> For Mule Runtime 4.x
```
anypoint.platform.gatekeeper=disabled
```
> For details on how to set the start-up parameter in different MuleSoft products see the KB Article How can I set Mule and Java system properties at startup?
Examples:
```
For Mule Runtime command line:
For Mule 3.x: "mule -M-Danypoint.platform.gatekeeper=false"
For Mule 4.x:  "mule -M-Danypoint.platform.gatekeeper=disabled"
OR set the following in wrapper.conf (add a line): 
For Mule 3.x: "wrapper.java.additional.<n>=-Danypoint.platform.gatekeeper=false
For Mule 4.x: "wrapper.java.additional.<n>=-Danypoint.platform.gatekeeper=disabled
In Anypoint Studio go to menu Run / Run As / Mule Application (Configure) / Arguments tab / VM Arguments and add:
For Mule 3.x: -Danypoint.platform.gatekeeper=false
For Mule 4.x: -Danypoint.platform.gatekeeper=disabled
OR If the API is deployed into Mulesoft Cloudhub, following property can be set in applications CloudHub Properties 
For Mule 3.x: anypoint.platform.gatekeeper=false
For Mule 4.x: anypoint.platform.gatekeeper=disabled
```
- References
> https://docs.mulesoft.com/api-manager/gatekeeper
