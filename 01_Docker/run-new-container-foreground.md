```
docker container run --publish 80:80 nginx
```
![docker_composer](/data/05_docker.png)
![docker_composer](/data/06_docker.png)

the Docker engine looked for an image called nginx, and it pulled down the latest image for nginx from Docker Hub. Then it started it as a new process in a `new container` for use.

The `published` part of the command exposes local port 80 on local machine and sends all traffic from it to the executable running inside that container on port 80.

And since Nginx is a web server it's going to default to port 80 and the traffic just forwards automatically through browser to local host and into that container.

But we don't always want this thing running in the `foreground` inside of our command line.

Now `detach` tells Docker to run it in the background.
```
docker container run --publish 80:80  --detach nginx
```
![docker_composer](/data/07_docker.png)
![docker_composer](/data/08_docker.png)

And we get back the unique container ID of our container.

And every time you run a `new container you get a new unique ID`.

So let's do a command to list our containers. docker container