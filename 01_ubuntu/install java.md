> Download jdk jdk-16.0.1_linux-x64_bin.deb"
> 
```
cd /home/dave/Downloads/
sudo dpkg -i jdk-16_linux-x64_bin.deb
sudo apt update
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/jdk-16.0.1/bin/java 1
java --version
javac --version
sudo gedit /etc/enviroment

JAVA_HOME="/usr/lib/jvm/jdk-16.0.1"



sudo add-apt-repository ppa:linuxuprising/java

sudo apt update -->again

sudo apt install oracle-java14-installer

```
