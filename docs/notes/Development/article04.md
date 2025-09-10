---
sidebar_position: 4
---

# How to Use Docker Remote API

### 1. Make sure you have already installed docker in your device

### 2. Edit docker.service

- find the file named **docker.service** in your system (eg. ubuntu 22.04)

```
cd /lib/systemd/system/
```

- open file by vim editor

```
sudo vi docker.service
```

- add **-H=tcp://0.0.0.0:2375** to **ExecStart**, showed below

```
ExecStart=/usr/bin/dockerd -H fd:// -H=tcp://0.0.0.0:2375 --containerd=/run/containerd/containerd.sock
```

- save then leave vim editor
- reload systemctl daemon

```
sudo systemctl daemon-reload
```

- restart docker engine

```
sudo service docker restart
```

### 3. Check if remote API works

- check by command

```
curl http://localhost:2375/images/json
```

- check by browser in docker host

```
http://localhost:2375/images/json
```

- check by browser in any device. (eg. docker host ip = "10.15.1.82")

```
http://10.15.1.82:2375/images/json
```

- response should be a json file
- now, try more API from docker doc
  https://docs.docker.com/engine/api/v1.45/#tag/Container/operation/ContainerInspect
