# AngularExpressMean
##_01_Create client folder 
```bash
ng new AngularMean --style scss --routing -dir=AngularMean --source-dir=client  --dry
```
##_02_Craete Server folder

##_03_create tsconfig.json
```json
{
  "extends": "../tsconfig.json", 
  // Add the following configuration to Angular typescript configuration
  "compilerOptions": {
    "outDir": "../dist/server",
    "baseUrl": "",
    "module": "commonjs"
  }
}
```
##_04_Create app.ts for simple express server
```ts

```

##_05_Install dependency
npm i express body-parser dotenv morgan mongoose path jsonwebtoken bcryptjs concurrently bootstrap

##_Define_proxy.conf.json
```json
