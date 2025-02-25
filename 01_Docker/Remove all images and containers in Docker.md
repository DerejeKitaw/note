To remove all images and containers in Docker, follow these steps:

### **1\. Stop all running containers**

First, stop all running containers to ensure they can be removed:

```
docker stop $(docker ps -q)
```

### **2\. Remove all containers**

After stopping them, remove all containers:

```
docker rm $(docker ps -aq)
```

### **3\. Remove all images**

To remove all images, use:

```
docker rmi $(docker images -q)
```

### **4\. Remove all unused volumes (optional)**

If you also want to remove volumes that are not in use by any container:

```
docker volume prune -f
```

### **5\. Remove all networks (optional)**

To remove all unused networks:

```
docker network prune -f
```

### **6\. Remove everything (containers, images, volumes, and networks)**

If you want to remove everything at once, run:

```
docker system prune -a --volumes
```

-   `-a` removes all images, including unused ones.
-   `--volumes` removes all volumes.
