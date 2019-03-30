[Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

The following is the list of supported scopes:

* **animations**
* **common**
* **compiler**
* **compiler-cli**
* **core**
* **elements**
* **forms**
* **http**
* **language-service**
* **platform-browser**
* **platform-browser-dynamic**
* **platform-server**
* **platform-webworker**
* **platform-webworker-dynamic**
* **router**
* **service-worker**
* **upgrade**

### Subject
The subject contains a succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize the first letter
* no dot (.) at the end
fix(ivy): handle class declarations consistently in ES5 code
```
ci: add codefresh badge
test(ivy): remove passing test from blocklist
docs(core): close tags in example

```
### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.
```
test(): 
fixrouter(): 
docs(core): 
refactor():
```
