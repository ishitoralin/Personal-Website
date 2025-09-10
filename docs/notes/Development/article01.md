---
sidebar_position: 2
---

# Install OpenWebUI with ollama by docker

### 0. Environment

- Prepare an environment w/ Nvidia GPU (ofc you can run OpenWebUI on CPU w/o GPU support).
- In my case, I built OpenWebUI w/ ollama 3 on a Nvidia 4070 GPU support in VMware (Ubuntu 22.04).
- I also built w/o GPU. It works, but slow.

### 1. Install Docker

- Update apt tool

```
sudo apt update
sudo apt upgrade

sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

echo \
 "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
 $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
 sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- Add docker to group (To run docker w/o using sudo)

```
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
docker run hello-world
```

### 2. Install OpenWebUI

- Run on CPU only (Not recommand, very slow...)

```
docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- Run w/ Nvdia GPU support (Recommandation)

```
docker run -d -p 3000:8080 --gpus all --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui --restart always ghcr.io/open-webui/open-webui:cuda
```

- Check if OpenWebUI is running on 0.0.0.0:3000->8080/tcp

```
 docker ps -a
```

### 3. Install ollama library

- Create and run container by ollama image
- https://hub.docker.com/r/ollama/ollama

```
docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama
```

- Check if ollama is running on 0.0.0.0:11434->11434/tcp

### 4. Start Using OpenWebUI

- http:// your IP :3000 (e.g. http://10.15.1.155:3000)
