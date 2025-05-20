 **Finding `nvm` Installation Path on Windows**

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
