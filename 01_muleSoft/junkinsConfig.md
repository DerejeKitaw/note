### install git plugin
> junkins -> Manage Junkins -> plugin Manager -> Installed(Tab)
### install powerShell
> junkins -> plugin Manager -> Available(Tab)
## Create new jobs - **World clock checkout**
> new item -> free style project (enter name of the project) 
### Specify where to download the code from github
> General -> Advanced -> Use custome workspace
> > Eg. "C:\Users\merke\AnypointStudio\junkinsPractice\worldClockZone" 
### Specify source code management (git/none)
> Select Git
> Specify repository url -"https://merkeb-g@bitbucket.org/merkeb-g/mulesoft.git"
> Insert credential for git
### Check the build ----This step will clone the git repository 

### Build Trigger
> Junkins -> project -> config -> Build Trigger -> Poll SCM -> Schedule (* * * * *) five star with space between stars
### Update the repository

## Create new jobs - **World clock build**
> new item -> free style project (enter name of the project) 

### Specify location of maven project
> General -> Advanced -> Use custome workspace
> > Eg. "C:\Users\merke\AnypointStudio\junkinsPractice\worldClockZone" 
### Automate maven command - mvn clean install
** Source code managemnt none
jenkins - >  World clock build ->  Build -> Command "mvn clean install"

## Create new jobs - **World clock Pipeline**
> Check for "build pipe line plugin"
> junkins -> plugin Manager -> Available(Tab)
### create pipeline
> Pipeline Flow - > Layout -> Select initial Job **World clock checkout**
> Configure post-build Action for the initial job
> Add post-build action 
> Build post build action -> Build other project -> select project to build **World clock build**
### At this step when the repository changes jenkins will pull the repository and clean and install.

## Deploy application to cloudhub
> Update configuration in pom file for deployment
```xml
<plugin>
    <groupId>org.mule.tools.maven</groupId>
    <artifactId>mule-maven-plugin</artifactId>
    <version>${mule.maven.plugin.version}</version>
    <extensions>true</extensions>
    <configuration>
      <cloudHubDeployment>
      <objectStoreV2>true</objectStoreV2>
        <muleVersion>4.3.0</muleVersion>
        <!-- Deploy User Parameter -->
        <username>${anypoint.username}</username>
        <password>${anypoint.password}</password>
        <!-- Environment Parameter -->
        <environment>Sandbox</environment>
        <applicationName>world-clock-api</applicationName>
        <workerType>Micro</workerType>
        <workers>1</workers>
    </cloudHubDeployment>
    </configuration>
</plugin>
```
