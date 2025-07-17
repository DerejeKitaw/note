### 1\. Verify you're editing the right profile

In your VS Code PowerShell terminal, run:

```powershell
$PROFILE
```

That will print the path to the exact file you need to edit (e.g. `C:\Users\dkita\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1`).

* * * *

### 2\. Open it for editing

```powershell
notepad $PROFILE
```

(or use whatever editor you like)

* * * *

### 3\. Add a custom prompt function

Below your existing line, append:

```powershell
function global:Prompt {
    # Only show a simple arrow.  Change this however you like.
    return "> "
}
```

Save and close the file.

* * * *

### 4\. Reload (or restart) the terminal

Either close/re‑open the integrated terminal, or run:

```powershell
. $PROFILE
```

* * * *

From now on your prompt will look like:

```markdown
>
```

instead of

```vbnet
PS C:\Users\dkita\Documents\GitHub\voice-to-text-py>`
```
