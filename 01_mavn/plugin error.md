### mavn plugin error
```
[ERROR] The build could not read 1 project -> [Help 1]
[ERROR]
[ERROR]   The project com.mulesoft.services:mule-module-graphql:1.0.0-SNAPSHOT (C:\Doc\Git Projects\01_mulesoft\graphQl\graphql-router\pom.xml) has 2 errors
[ERROR]     Unresolveable build extension: Plugin org.mule.runtime.plugins:mule-extensions-maven-plugin:1.1.6 or one of its dependencies could not be resolved: Failed to read artifact descriptor for org.mule.runtime.plugins:mule-extensions-maven-plugin:jar:1.1.6: Could not transfer artifact org.mule.runtime.plugins:mule-extensions-maven-plugin:pom:1.1.6 from/to maven-default-http-blocker (http://0.0.0.0/): Blocked mirror for repositories: [mulesoft-plugin-releases (http://repository.mulesoft.org/releases/, default, releases+snapshots), mulesoft-plugin-snapshots (http://repository.mulesoft.org/snapshots/, default, releases+snapshots)] -> [Help 2]
```
> Solution add in pom.xml
```xml
<pluginRepositories>
		<pluginRepository>
			<id>mulesoft-releases</id>
			<name>MuleSoft Releases Repository</name>
			<layout>default</layout>
			<url>https://repository.mulesoft.org/releases/</url>
			<snapshots>
				<enabled>false</enabled>
			</snapshots>
		</pluginRepository>
	</pluginRepositories>
```
