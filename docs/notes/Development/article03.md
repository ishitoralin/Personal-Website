---
sidebar_position: 3
---

# Install Flarum (v1.8.1)

## Basic info

1. os: Ubuntu 22.04
2. flarum: v.1.8.1
3. php: v8.3

### 1. Update apt

```
sudo apt update && sudo apt upgrade -y
sudo apt install wget unzip curl nano git vim -y
```

### 2. Install Apache webserver

```
sudo apt install apache2 -y
sudo systemctl enable --now apache2
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### 3. Install php and mariadb

```
sudo apt install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php -y
sudo apt update
sudo apt install php8.3 php8.3-mbstring php8.3-curl php8.3-xml php8.3-zip php8.3-mysql libapache2-mod-php8.3 php8.3-gd -y
sudo apt install mariadb-server -y
sudo systemctl enable --now mariadb
sudo mysql_secure_installation
```

### 4. Create a Database for Flarum

```
sudo mysql -u root -p
CREATE DATABASE flarum;
CREATE USER 'shihu'@'localhost' IDENTIFIED BY 'shihu';
GRANT ALL PRIVILEGES ON flarum. * TO 'shihu'@'localhost';
FLUSH PRIVILEGES;
QUIT;
```

### 5. Install composer to get Flarum on Ubuntu 22.04

```
curl -sS https://getcomposer.org/installer -o composer-setup.php
sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer
composer -V
```

### 6. Setup Flarum for Apache on Ubuntu 24.04 | 22.04

```
sudo mkdir -p /var/www/html/forum/
cd /var/www/html/forum/
sudo composer create-project flarum/flarum:"v1.8.1" . --stability=beta
sudo chown -R www-data:www-data /var/www/html/forum/
sudo chmod -R 755 /var/www/html/forum/
```

### 7. Create a Virtual host configuration file

```
sudo vi /etc/apache2/sites-available/flarum.conf
```

```
<VirtualHost *:80>
    ServerAdmin admin@example.com
    DocumentRoot /var/www/html/forum/public
    ServerName forum.example.com

    DirectoryIndex index.php

    <Directory /var/www/html/forum/public/>
        Options +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    ErrorLog /var/log/apache2/flarum-error_log
    CustomLog /var/log/apache2/flarum-access_log common
</VirtualHost>
```

```
# diable default conf, enable custom conf.
sudo a2dissite 000-default.conf
sudo a2ensite flarum.conf
sudo systemctl reload apache2
```

### 8. Install plugin

```
sudo composer require fof/formatting
sudo composer require flarum-lang/chinese-traditional
sudo composer require afrux/asirem
sudo composer require sycho/flarum-advanced-extension-categories
sudo composer update flarum-lang/chinese-traditional
sudo composer update afrux/asirem --with-dependencies
# php flarum cache:clear (clear cache if needed)
```

### 9. Check browser

- Forum Title: Personal Forum
- MySQL driver: MySQL
- MySQL host: localhost
- MySQL Database: flarum
- MySQL Username: shihu
- MySQL Password: shihu
- Table Prefix: hf

---
