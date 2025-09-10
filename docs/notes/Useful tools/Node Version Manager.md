---
sidebar_position: 1
---

# Node Version Manager (nvm)

nvm allows you to quickly install and use different versions of node via the command line.

```
$ nvm use 16
Now using node v16.9.1 (npm v7.21.1)
$ node -v
v16.9.1
$ nvm use 14
Now using node v14.18.0 (npm v6.14.15)
$ node -v
v14.18.0
$ nvm install 12
Now using node v12.22.6 (npm v6.14.5)
$ node -v
v12.22.6
```

### 1. Instsall curl package on linux system.

```
sudo apt install curl -y
```

### 2. Install nvm via curl.

```
# The version might change, please check nvm github for more details.
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

### 3. Restart terminal

After installed nvm. you have to restart the terminal to acitavte nvm.

```
# To check if nvm works please use the command below.
nvm -v
```

### 4. Install node.js

```
nvm install 22
```

### 5. verifies the right Node.js version is in the environment

```
node -v # should print `v22.xx.xx`
npm -v # should print `10.x.x`
```

[Resource](https://github.com/nvm-sh/nvm)
