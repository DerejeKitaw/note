## [Install](https://hub.docker.com/r/jenkins/jenkins/)

```
docker pull jenkins/jenkins
```

## To see the image

```
docker images
```

```
$ docker images
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
jenkins/jenkins     latest              f32bd59f98fe        11 hours ago        678MB
```

## To know where docker is saving the file

```
$ docker info | grep -i root
 Docker Root Dir: /var/lib/docker
```

## To know how much space docker is taking

## Create docker-compose file

> docker-compose.yml

```yaml
version: '3'
services:
  jenkins:
    container_name: jenkins
    image: jenkins/jenkins
    ports:
      - '8080:8080'
    volumes:
      - $PWD/jenkins_home:/var/jenkins_home
    networks:
      - net
networks:
  net:
```

## Create a folder `jenkins_home` on the same folder with the compose file for the volume

## Give proper permission for `jenkins_home` so jenkins can write to it

```
$ id
uid=501(derejekitaw) gid=20(staff) groups=20(staff),12(everyone),61(localaccounts) )
```

## start the server

```
$ docker-compose up -d
Creating network "junkins-data_net" with the default driver
Creating jenkins ... done
```
## To stope the server 
```
$ docker-compose stop
Stopping jenkins ... done
```

## To restart server
```
$ docker-compose restart 
Restarting jenkins ... done
```

## To view up running image

```
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED              STATUS              PORTS                               NAMES
20c40480858e        jenkins/jenkins     "/sbin/tini -- /usr/…"   About a minute ago   Up About a minute   0.0.0.0:8080->8080/tcp, 50000/tcp   jenkins
```

## To log information's about the image `jenkins`


## To run bash commands within the virtual machine
```
$ docker exec -ti jenkins bash
jenkins@b215a0899e1c:/$ 
```

## To check what version of java installed in virtual machine
```
jenkins@b215a0899e1c:/$ java -version
openjdk version "1.8.0_242"
OpenJDK Runtime Environment (build 1.8.0_242-b08)
OpenJDK 64-Bit Server VM (build 25.242-b08, mixed mode)
```

## To exit virtual machine
```
jenkins@b215a0899e1c:/$ exit
exit
derejekitaw@Derejes-MBP ~/Desktop/junkins/junkins-data
$ java -version
openjdk version "12.0.2" 2019-07-16
OpenJDK Runtime Environment AdoptOpenJDK (build 12.0.2+10)
OpenJDK 64-Bit Server VM AdoptOpenJDK (build 12.0.2+10, mixed mode)
```





