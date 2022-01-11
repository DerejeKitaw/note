### [To install third pary JAR or custome dependency manualy](https://maven.apache.org/guides/mini/guide-3rd-party-jars-local.html)
> Step 1 Install dependency
```
mvn install:install-file 
-Dfile=<path-to-file> 
-DgroupId=<group-id> 
-DartifactId=<artifact-id> 
-Dversion=<version> 
-Dpackaging=<packaging>
```
> Step 2 Add dependency
```
<dependency>
  <groupId>org.mule.connectors</groupId>
  <artifactId>mule-sockets-connector</artifactId>
  <version>1.1.5</version>
</dependency>
 ```
