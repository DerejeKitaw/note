`detach` tells Docker to run it in the background.
```
docker container run --publish 80:80  --detach nginx
```
![docker_composer](/data/07_docker.png)
![docker_composer](/data/08_docker.png)

And we get back the unique container ID of our container.

And every time you run a `new container you get a new unique ID`.

So let's do a command to list our containers. docker container