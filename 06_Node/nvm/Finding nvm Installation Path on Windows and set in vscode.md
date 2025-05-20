### **Finding `nvm` Installation Path on Windows**

**1️⃣ Open Command Prompt**

Press `Win + R`, type `cmd`, and hit `Enter` to launch the terminal.

**2️⃣ Run `where nvm` Command**

In the Command Prompt, execute:
```
where nvm
```
**3️⃣ Interpret the Output**

The command will return the full installation path of `nvm.exe`. For example:

C:\\Users\\YourUsername\\AppData\\Local\\nvm\\nvm.exe

This is the directory where `nvm` is installed.

**4️⃣ Using This Path in Git Bash or VS Code**

If you need to use `nvm` inside Git Bash or VS Code, set the path manually:

```
export PATH="/c/Users/dkita/AppData/Local/nvm:$PATH"
```

Then verify:
```
nvm list
```
### Git Bash inside **VS Code** isn't picking up the Windows environment variable `NVM_HOME`. This happens because **Git Bash doesn't automatically inherit Windows system variables** like Command Prompt does.

**Fix: Manually Set `NVM_HOME` in Git Bash**

Try running:
```
export NVM\_HOME="/c/Users/dkita/AppData/Local/nvm" export PATH="$NVM\_HOME:$PATH"
```
Then check:
```
echo $NVM\_HOME
```
**Permanent Fix: Add to `~/.bashrc`**

1.  Open your `~/.bashrc` file in VS Code:
```
nano ~/.bashrc
```
5.  Add these lines at the bottom:

export NVM\_HOME="/c/Users/dkita/AppData/Local/nvm" export PATH="$NVM\_HOME:$PATH"

9.  Save the file and reload:
```
source ~/.bashrc
```
**Restart VS Code & Test**

-   Close **VS Code**, reopen Git Bash, and run:
```
echo $NVM\_HOME nvm list
```
### If `NVM_SYMLINK` works in **Command Prompt** but not in **VS Code's Git Bash**, it means Git Bash isn't inheriting your Windows environment variables correctly. Here's how you can fix it:

**1️⃣ Manually Set the Variable in Git Bash**

Try running:
```
export NVM\_SYMLINK="/c/nvm4w/nodejs" export PATH="$NVM\_SYMLINK:$PATH"
```
Then verify:
```
echo $NVM\_SYMLINK nvm list
```
**2️⃣ Make It Permanent in `~/.bashrc`**

To avoid setting it manually every time:

1.  Open `~/.bashrc` in VS Code:
```
nano ~/.bashrc
```
5.  Add these lines at the bottom:

export NVM\_SYMLINK="/c/nvm4w/nodejs" export PATH="$NVM\_SYMLINK:$PATH"

9.  Save and reload:
```
source ~/.bashrc
```
**3️⃣ Restart VS Code & Test Again**

Close **VS Code**, reopen Git Bash, and check:
```
echo $NVM\_SYMLINK node -v
```
