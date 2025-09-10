---
sidebar_position: 2
---

# Install OpenWebUI and ollama in Host (Anaconda)

### 0. Environment

- This method works in OpenWebUI version 0.3.31
- Prepare an environment w/ Nvidia GPU (ofc you can run OpenWebUI on CPU w/o GPU support).
- In my case, I built OpenWebUI w/ ollama 3 on a Nvidia 4070 GPU support in VMware (Ubuntu 22.04).
- I also built w/o GPU. It works, but slow.

### 1. Install Node.js (Version >= 20.10)

- installs nvm (Node Version Manager)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

- download and install Node.js (you may need to restart the terminal)

```
nvm install 22.17
```

- verifies the right Node.js version is in the environment

```
node -v # should print `v20.16.0`
```

- verifies the right npm version is in the environment

```
npm -v # should print `10.8.1`
```

- more info
  https://nodejs.org/en/download/package-manager

### 2.Install Anaconda

- To run OpenWebUI, Python 3.11 is needed to avoid unpredictable issues. (Python 3.10 is too old, and 3.12 is too new), The default settings in Anaconda(2023.09) is Python 3.11 w/ pip 23.2.1 (Python 3.11)
- Get and install Anaconda by debian

```
sudo apt-get install -y libgl1-mesa-glx libegl1-mesa libxrandr2 libxrandr2 libxss1 libxcursor1 libxcomposite1 libasound2 libxi6 libxtst6
```

- Download installer
  _ Check version: https://repo.anaconda.com/archive/
  _ Ctrl + F Search: Linux-x86_64.sh
  ![image](https://hackmd.io/_uploads/H1fTYRn0R.png)

```
# If you decide to use Anaconda3-2023.09-0-Linux-x86_64.sh
# Replace <INSTALLER_VERSION> by 2023.09-0
# e.g. curl -O https://repo.anaconda.com/archive/Anaconda3-2023.09-0-Linux-x86_64.sh
curl -O https://repo.anaconda.com/archive/Anaconda3-<INSTALLER_VERSION>-Linux-x86_64.sh
```

- Execute installer

```
bash Anaconda3-<INSTALLER_VERSION>-Linux-x86_64.sh

# Please, press ENTER to continue
# >>>

# Do you accept the license terms? [yes|no]
# [no] >>> yes

# Anaconda3 will now be installed into this location:
# /home/.../anaconda3

# You can undo this by running `conda init --reverse $SHELL`? [yes|no]
# [no] >>> yes

# Anaconda recommends you enter “yes” to initialize Anaconda Distribution by running conda init.
```

- The installer finishes and displays, “Thank you for installing Anaconda3!”

- Refresh terminal

```
source ~/.bashrc
```

![image](https://hackmd.io/_uploads/rk7CByTAR.png)

- Update conda pack

```
conda update backports
```

- basic command

```
# Switch back to ubuntu env (leave Anaconda env)
conda deactivate

# Use default Anaconda env
conda activate

# Auto-activate Anaconda env
conda config --set auto_activate_base true

# Disable auto-activate Anaconda env
conda config --set auto_activate_base false
```

- more info
  https://docs.anaconda.com/anaconda/install/linux/

### 3.Install OpenWebUI (Front-end)

- Download OenpWebUI pack

```
git clone https://github.com/open-webui/open-webui.git
```

- Enter open-webui folder

```
cd open-webui/
```

- Install OpenWebUI front-end

```
npm install
npm run build
# A new folder "build" will be created if success
```

- p.s. if you meet the issue "JavaScript heap out of memory", edit package.json file and replace "build" line as below:

```
"build": "npm run pyodide:fetch && NODE_OPTIONS='--max-old-space-size=4096' vite build"
```

### 4.Install OpenWebUI (Back-end)

- If you are in open-webui/

```
cd ./backend
```

- Install dependencies

```
pip install -r requirements.txt -U
```

- Start the application

```
bash start.sh
# if OpenWebUI successfully ran in host, check http://localhost:8080
# e.g. http://10.15.1.82:8080
```

### 5. Install ollama

```
curl -fsSL https://ollama.com/install.sh | sh
```
