[Source](https://www.linkedin.com/pulse/resolving-docker-permission-denied-error-guide-om-prakash-singh)

```
sudo chown -R your_username:docker /var/run/docker.sock 
sudo chmod 660 /var/run/docker.sock
```
