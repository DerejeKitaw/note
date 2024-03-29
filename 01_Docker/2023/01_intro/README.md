## How to `run docker container` with existing image
```
docker run node 
```
>  will create a container and exit
```bash
dkitaw@DESKTOP (master)
$ docker run node 
dkitaw@DESKTOP (master)
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED          STATUS                     PORTS     NAMES
3c59bad04ffa   node      "docker-entrypoint.s…"   11 seconds ago   Exited (0) 8 seconds ago             dreamy_vaughan
dkitaw@DESKTOP (master)
$ docker rm dreamy_vaughan
dreamy_vaughan
```

## How to `run docker container` with existing image in an `interactive mode`
```
docker run -it node 
```
```bash
dkitaw@DESKTOP (master)
$ docker run -it node
Welcome to Node.js v20.0.0.
Type ".help" for more information.
> 2+2
4
>
(To exit, press Ctrl+C again or Ctrl+D or type .exit)
>
```
## How to `see running containers`
```
docker ps 
```
```bash
dkitaw@DESKTOP (master)
$ docker ps 
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

dkitaw@DESKTOP (master)
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND                  CREATED         STATUS                          PORTS     NAMES
eb4e9ee02a80   node      "docker-entrypoint.s…"   2 minutes ago   Exited (0) About a minute ago             great_hermann
dkitaw@DESKTOP (master)
$ docker rm great_hermann
great_hermann

dkitaw@DESKTOP (master)
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
## How to `see all containers` (running and stoped containers)
```
docker ps -a
```
## How to `stop` container
```
docker stop NAME_OF_CONTAINER
```
## How to `delete` container
```
docker rm NAME_OF_CONTAINER
```
## How to `delete` images
```
docker rm IMAGE_ID
```
> To remove all unused images
```
docker prune
```
## How to create an image using Dockerfile
```Dockerfile
FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]
```
> If you dont specify CRM the base image CMD will be excuted
```
dkitaw@DESKTOP (master)
$ docker build .
[+] Building 27.6s (11/11) FINISHED
 => [internal] load build definition from Dockerfile                                                                                                                       0.1s
 => => transferring dockerfile: 151B                                                                                                                                       0.0s
 => [internal] load .dockerignore                                                                                                                                          0.1s
 => => transferring context: 2B                                                                                                                                            0.0s
 => [internal] load metadata for docker.io/library/node:14                                                                                                                 3.6s
 => [auth] library/node:pull token for registry-1.docker.io                                                                                                                0.0s
 => [internal] load build context                                                                                                                                          0.1s
 => => transferring context: 1.40kB                                                                                                                                        0.0s
 => [1/5] FROM docker.io/library/node:14@sha256:a158d3b9b4e3fa813fa6c8c590b8f0a860e015ad4e59bbce5744d2f6fd8461aa                                                          18.3s
 => => resolve docker.io/library/node:14@sha256:a158d3b9b4e3fa813fa6c8c590b8f0a860e015ad4e59bbce5744d2f6fd8461aa                                                           0.1s
 => => sha256:b253aeafeaa7e0671bb60008df01de101a38a045ff7bc656e3b0fbfc7c05cca5 7.86MB / 7.86MB                                                                             0.2s
 => => sha256:3d2201bd995cccf12851a50820de03d34a17011dcbb9ac9fdf3a50c952cbb131 10.00MB / 10.00MB                                                                           0.4s
 => => sha256:1d12470fa662a2a5cb50378dcdc8ea228c1735747db410bbefb8e2d9144b5452 7.51kB / 7.51kB                                                                             0.0s
 => => sha256:2ff1d7c41c74a25258bfa6f0b8adb0a727f84518f55f65ca845ebc747976c408 50.45MB / 50.45MB                                                                           1.7s 
 => => sha256:a158d3b9b4e3fa813fa6c8c590b8f0a860e015ad4e59bbce5744d2f6fd8461aa 776B / 776B                                                                                 0.0s 
 => => sha256:2cafa3fbb0b6529ee4726b4f599ec27ee557ea3dea7019182323b3779959927f 2.21kB / 2.21kB                                                                             0.0s
 => => sha256:1de76e268b103d05fa8960e0f77951ff54b912b63429c34f5d6adfd09f5f9ee2 51.88MB / 51.88MB                                                                           1.6s 
 => => sha256:d9a8df5894511ce28a05e2925a75e8a4acbd0634c39ad734fdfba8e23d1b1569 191.85MB / 191.85MB                                                                         4.0s 
 => => sha256:6f51ee005deac0d99898e41b8ce60ebf250ebe1a31a0b03f613aec6bbc9b83d8 4.19kB / 4.19kB                                                                             1.8s 
 => => sha256:5f32ed3c3f278edda4fc571c880b5277355a29ae8f52b52cdf865f058378a590 35.24MB / 35.24MB                                                                           3.0s 
 => => sha256:0c8cc2f24a4dcb64e602e086fc9446b0a541e8acd9ad72d2e90df3ba22f158b3 2.29MB / 2.29MB                                                                             2.0s 
 => => extracting sha256:2ff1d7c41c74a25258bfa6f0b8adb0a727f84518f55f65ca845ebc747976c408                                                                                  3.5s 
 => => sha256:0d27a8e861329007574c6766fba946d48e20d2c8e964e873de352603f22c4ceb 450B / 450B                                                                                 2.1s 
 => => extracting sha256:b253aeafeaa7e0671bb60008df01de101a38a045ff7bc656e3b0fbfc7c05cca5                                                                                  0.4s 
 => => extracting sha256:3d2201bd995cccf12851a50820de03d34a17011dcbb9ac9fdf3a50c952cbb131                                                                                  0.2s 
 => => extracting sha256:1de76e268b103d05fa8960e0f77951ff54b912b63429c34f5d6adfd09f5f9ee2                                                                                  2.2s 
 => => extracting sha256:d9a8df5894511ce28a05e2925a75e8a4acbd0634c39ad734fdfba8e23d1b1569                                                                                  5.8s 
 => => extracting sha256:6f51ee005deac0d99898e41b8ce60ebf250ebe1a31a0b03f613aec6bbc9b83d8                                                                                  0.0s 
 => => extracting sha256:5f32ed3c3f278edda4fc571c880b5277355a29ae8f52b52cdf865f058378a590                                                                                  1.6s 
 => => extracting sha256:0c8cc2f24a4dcb64e602e086fc9446b0a541e8acd9ad72d2e90df3ba22f158b3                                                                                  0.1s 
 => => extracting sha256:0d27a8e861329007574c6766fba946d48e20d2c8e964e873de352603f22c4ceb                                                                                  0.0s 
 => [2/5] WORKDIR /app                                                                                                                                                     1.3s 
 => [3/5] COPY package.json .                                                                                                                                              0.0s 
 => [4/5] RUN npm install                                                                                                                                                  3.6s 
 => [5/5] COPY . .                                                                                                                                                         0.2s 
 => exporting to image                                                                                                                                                     0.3s
 => => exporting layers                                                                                                                                                    0.3s 
 => => writing image sha256:2a5f4510de1b3155b94796e5bcc3bf31e071744e62fb32ec1aabcc2b9788f4cb                                                                               0.0s 

dkitaw@DESKTOP (master)
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

dkitaw@DESKTOP (master)
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

dkitaw@DESKTOP (master)
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
<none>       <none>    2a5f4510de1b   2 minutes ago   917MB
node         latest    07f4e626c252   3 days ago      1GB

dkitaw@DESKTOP (master)
$ docker run 2a5f4510de1b
```
> Open another terminal to stop the server
```
dkitaw@DESKTOP(master)
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
1408f9079807   2a5f4510de1b   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes   80/tcp    modest_mendel

dkitaw@DESKTOP(master)
$ docker stop 2a5f4510de1b
Error response from daemon: No such container: 2a5f4510de1b

dkitaw@DESKTOP(master)
$ docker stop modest_mendel
modest_mendel

dkitaw@DESKTOP(master)
$ docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS                       PORTS     NAMES
1408f9079807   2a5f4510de1b   "docker-entrypoint.s…"   8 minutes ago   Exited (137) 4 minutes ago             modest_mendel

dkitaw@DESKTOP(master)
$ docker run -p 3000:80 2a5f4510de1b
yes -->logs
yes -->logs
```
> Check http://localhost:3000/
```bash
dkitaw@DESKTOP(master)
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES
a5bebc1bb303   2a5f4510de1b   "docker-entrypoint.s…"   8 minutes ago   Up 8 minutes   0.0.0.0:3000->80/tcp   dreamy_hoover

dkitaw@DESKTOP(master)
$ docker stop dreamy_hoover
dreamy_hoover
dkitaw@DESKTOP(master)
$ docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

dkitaw@DESKTOP(master)
$ docker ps -a
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                        PORTS     NAMES
1408f9079807   2a5f4510de1b   "docker-entrypoint.s…"   20 minutes ago   Exited (137) 16 minutes ago             modest_mendel      

dkitaw@DESKTOP(master)
$ docker rm modest_mendel
modest_mendel

dkitaw@DESKTOP(master)
$ docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

dkitaw@DESKTOP(master)
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
<none>       <none>    2a5f4510de1b   26 minutes ago   917MB
node         latest    07f4e626c252   3 days ago       1GB
```
## Underestanding Attached vs detached container
> For docker start - detached mode is the default use -a to attache
> For docker run - atached mode is the default use -d to detach
```bash
dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker images
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
<none>       <none>    2a5f4510de1b   26 minutes ago   917MB
node         latest    07f4e626c252   3 days ago       1GB

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker run -p 8000:80 -d 2a5f4510de1b
72c4eb254c2c0ce322065d73fbdc4dc44b6fd1904dd1b7461413f971bbca56e0

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ sdocker ps
bash: sdocker: command not found

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                  NAMES
72c4eb254c2c   2a5f4510de1b   "docker-entrypoint.s…"   43 seconds ago   Up 42 seconds   0.0.0.0:8000->80/tcp   epic_galois

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker stop 72c4eb254c2c
72c4eb254c2c

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker start 72c4eb254c2c
72c4eb254c2c

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker ps
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS          PORTS                  NAMES
72c4eb254c2c   2a5f4510de1b   "docker-entrypoint.s…"   2 minutes ago   Up 12 seconds   0.0.0.0:8000->80/tcp   epic_galois

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker stop 72c4eb254c2c
72c4eb254c2c

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker start -a 72c4eb254c2c
3 week

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker start 72c4eb254c2c
72c4eb254c2c

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker logs 72c4eb254c2c

3 week
2 week

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker logs 72c4eb254c2c

3 week
2 week
1 week

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker logs -a 72c4eb254c2c
unknown shorthand flag: 'a' in -a
See 'docker logs --help'.

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker logs --help

Usage:  docker logs [OPTIONS] CONTAINER

Fetch the logs of a container

Options:
      --details        Show extra details provided to logs
  -f, --follow         Follow log output
      --since string   Show logs since timestamp (e.g.
                       2013-01-02T13:23:37Z) or relative (e.g. 42m for 42
                       minutes)
  -n, --tail string    Number of lines to show from the end of the logs
                       (default "all")
  -t, --timestamps     Show timestamps
      --until string   Show logs before a timestamp (e.g.
                       2013-01-02T13:23:37Z) or relative (e.g. 42m for 42
                       minutes)

dkitaw@DESKTOP-LL95T6B MINGW64 /c/Doc/Git Projects/note/01_Docker/2023/01_intro (master)
$ docker logs -f 72c4eb254c2c

3 week
2 week
1 week
6 month
```
## Entering interactive mode
```
docker run -it
docker start -ai
```