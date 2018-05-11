## 01_Install [nvm](https://github.com/creationix/nvm#install-script)
```
Install script
To install or update nvm, you can use the install script using cURL:

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
or Wget:

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
## 02_To check which version used
```bash
Derejes-MBP:HTML exercise derejekitaw$ which node
/Users/derejekitaw/.nvm/versions/node/v8.9.1/bin/node
```
## 03_Install 7.9v node
```
Derejes-MBP:HTML exercise derejekitaw$ nvm install 7.9
Downloading and installing node v7.9.0...
Downloading https://nodejs.org/dist/v7.9.0/node-v7.9.0-darwin-x64.tar.xz...
######################################################################## 100.0%
Computing checksum with shasum -a 256
Checksums matched!
Now using node v7.9.0 (npm v4.2.0)
Derejes-MBP:HTML exercise derejekitaw$ 
```
## 04_Check which version of node curently in use
```
Derejes-MBP:HTML exercise derejekitaw$ which node
/Users/derejekitaw/.nvm/versions/node/v7.9.0/bin/node
```
## 05_use the letest node version
```
