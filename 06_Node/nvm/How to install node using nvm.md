Install Node with NVM (Windows)
===============================

0) Uninstall conflicting Node
-----------------------------

-   If you installed **Node from Microsoft Store**, remove it first (Settings → Apps → uninstall "Node.js").

1) Install NVM for Windows
--------------------------

1.  Download the latest **nvm-windows** installer (Corey Butler).

2.  Run the installer. If you can, use the defaults:

    -   NVM path: `C:\Program Files\nvm`

    -   Node symlink path: `C:\Program Files\nodejs`

3.  Open **a new terminal** (CMD or PowerShell) and check:

    ```
    nvm version
    ```

    You should see a version (e.g., `1.2.2`).

> If `nvm` is **not recognized**, see "Quick Fix A" below.

2) (If NVM installed under LocalAppData) Ensure PATH is set
-----------------------------------------------------------

If you installed to **LocalAppData** (common when not admin), NVM lives at:

```makefile
C:\Users\<you>\AppData\Local\nvmC:\Users\<you>\AppData\Local\nodejs`
```

Add both to your **User** PATH, or do it in PowerShell for the current session:

```powershell
$env:Path += ";$env:LOCALAPPDATA\nvm;$env:LOCALAPPDATA\nodejs"
```

3) Fix the missing `settings.txt` (if you see "open \\settings.txt")
--------------------------------------------------------------------

Create the file and set the paths (PowerShell):

```powershell
$NvmHome = "$env:LOCALAPPDATA\nvm"
$NodeSym = "$env:LOCALAPPDATA\nodejs"

New-Item -ItemType Directory -Force -Path $NvmHome | Out-Null
New-Item -ItemType Directory -Force -Path $NodeSym | Out-Null

@"
root: $NvmHome
path: $NodeSym
arch: 64
proxy: none
"@ | Set-Content -Path "$NvmHome\settings.txt" -Encoding ASCII

[Environment]::SetEnvironmentVariable("NVM_HOME",$NvmHome,"User")
[Environment]::SetEnvironmentVariable("NVM_SYMLINK",$NodeSym,"User")

# make sure PATH includes both
$paths = @($NvmHome,$NodeSym)
$current = [Environment]::GetEnvironmentVariable("Path","User")
$new = ($current.Split(";") + $paths | Select-Object -Unique) -join ";"
[Environment]::SetEnvironmentVariable("Path",$new,"User")

# load into this session
$env:NVM_HOME = $NvmHome
$env:NVM_SYMLINK = $NodeSym
$env:Path += ";$NvmHome;$NodeSym"
```

Verify:

```powershell
nvm version
nvm root
```

4) Install Node and switch to it
--------------------------------

```powershell
nvm install 20
```

If you see the **NVM\_SYMLINK is set to a physical file/directory** error when you run `nvm use`, delete the existing folder so NVM can create a **symlink**:

```powershell
Remove-Item "$env:LOCALAPPDATA\nodejs" -Recurse -Force
# Then (run PowerShell as Admin or enable Developer Mode)
nvm use 20.19.4   # use the exact version NVM printed after install
```

5) Verify Node & npm
--------------------

```powershell
where node
node -v
npm -v
```

You should see something like:

```
v20.19.4
10.x.x
```

* * * *

Quick fixes you might need
--------------------------

### Quick Fix A: "nvm is not recognized"

-   Close all terminals and reopen.

-   If still failing:

    -   Ensure PATH has **either** `C:\Program Files\nvm;C:\Program Files\nodejs`
        **or** `C:\Users\<you>\AppData\Local\nvm;C:\Users\<you>\AppData\Local\nodejs`.

    -   Test:

        ```powershell
        where nvm
        ```

### Quick Fix B: VS Code terminal can't see `nvm`

-   VS Code reads PATH on launch. **Close & reopen VS Code** (or run "Developer: Reload Window").

-   Or temporarily add for the session:

    ```powershell
    $env:Path += ";$env:LOCALAPPDATA\nvm;$env:LOCALAPPDATA\nodejs"
    ```

### Quick Fix C: Symlink permission

-   `nvm use` creates a symlink. If it errors, either:

    -   **Run the terminal as Administrator**, or

    -   Turn on **Developer Mode** (Settings → For developers → Developer Mode), then retry `nvm use`.

* * * *

Daily usage cheat-sheet
-----------------------

```powershell
nvm list                 # show installed Node versions
nvm install 18           # install another version
nvm use 18.20.4          # switch versions
node -v && npm -v        # confirm active version
```

* * * *

This is exactly the path we followed in your session:

-   Added `LOCALAPPDATA\nvm` and `LOCALAPPDATA\nodejs` to PATH,

-   Created **settings.txt** when it was missing,

-   Deleted the physical `...\Local\nodejs` folder so NVM could create a **symlink**,

-   Ran `nvm use 20.19.4`,

-   Verified: `node -v` → **v20.19.4**, `npm -v` → **10.8.2** ✅
