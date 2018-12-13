## setup ngrx
```
ng config cli.defaultCollection @ngrx/schematics
ng generate store AppState --root --module.ts
```
## Define action
```
ng generate action auth/Auth
```
## Define reducer
```
ng generate reducer Auth --flat=false --module auth/auth.module.ts
```
