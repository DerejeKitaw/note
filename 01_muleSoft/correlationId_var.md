%dw 2.0
output application/java

var header_correlationId = attributes.properties.correlationId default ""
var http_correlationId = attributes.headers."X-CORRELATION-ID" default ""
---
if (header_correlationId != "") header_correlationId 
   else if (http_correlationId != "") http_correlationId
   else uuid()
