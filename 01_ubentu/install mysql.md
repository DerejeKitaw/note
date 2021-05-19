```
sudo apt update
sudo apt install mysql-server
mysql --version
sudo mysql_secure_installation
sudo mysql -u root -p 
service mysql restart
```


> To dissable AppArmor from preventing mysql workbench
```
sudo snap connect mysql-workbench-community:password-manager-service :password-manager-service
```
