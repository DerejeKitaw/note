To see all dependencies installed
```
npm list 
```
To see all dependencies in current application
```
npm list --depth=0
```
To see each modue depen on what. Eg to see mongoose dependency
```
npm view mongoose
```
```
npm view mongoose dependencies
```
To see all the version relised for mongoose
```
npm view mongoose versions
```

Install specific version
```
npm i mongoose@2.4.3
```
To compare or see outdated dependencies
```
npm outdated
```

```
npm update . -> this do not update to the major version
```

```
npm i -g npm-check-updates -> if all dependencies are uptodate will return nothing

npm-check-updates -u . ->will update package.json. Will not install
```
