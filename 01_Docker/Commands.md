> docker version

> docker info
    most config values of engin
    
> docker <command>(option)  old(still works)

> docker <command> <sub-command> (options) new

C:\Program Files\Docker Toolbox

> λ docker container --help
```      
Usage:  docker container COMMAND

Manage containers

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  inspect     Display detailed information on one or more containers
  kill        Kill one or more running containers
  logs        Fetch the logs of a container
  ls          List containers
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  prune       Remove all stopped containers
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  run         Run a command in a new container
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker container COMMAND --help' for more information on a command.
```
> docker container run --publish 80:80 nginx

> docker container run --publish 80:80 --detach nginx

> docker-machine help

> docker-machine env default

C:\Program Files\Docker Toolbox

> λ docker container ls --help
```
Usage:  docker container ls [OPTIONS]

List containers

Aliases:
  ls, ps, list

Options:
  -a, --all             Show all containers (default shows just running)
  -f, --filter filter   Filter output based on conditions provided
      --format string   Pretty-print containers using a Go template
  -n, --last int        Show n last created containers (includes all
                        states) (default -1)
  -l, --latest          Show the latest created container (includes all
                        states)
      --no-trunc        Don't truncate output
  -q, --quiet           Only display numeric IDs
  -s, --size            Display total file sizes
  ```
  > docker container ls       => Show running containers only
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                NAMES
615a282b0044        nginx               "nginx -g 'daemon of"   34 minutes ago      Up 34 minutes       0.0.0.0:80->80/tcp   crazy_yonath

C:\Program Files\Docker Toolbox
```
λ docker container stop 615
```
615
```

> λ docker container ls -a
```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS                      PORTS               NAMES
ef340736764a        nginx               "nginx -g 'daemon of"   17 minutes ago      Created                                         stupefied_led
erberg
30d638c3cf3a        nginx               "nginx -g 'daemon of"   36 minutes ago      Created                                         interesting_e
lion
615a282b0044        nginx               "nginx -g 'daemon of"   51 minutes ago      Exited (0) 15 minutes ago                       crazy_yonath
```
> λ docker container rm ef3 30d 615
```
ef3
30d
615
```
> λ docker container ls -a
```
CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS               NAMES
```
> λ docker container rm -f ef3 => To remove running container
