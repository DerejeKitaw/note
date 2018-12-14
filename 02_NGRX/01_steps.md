## setup ngrx
```
ng config cli.defaultCollection @ngrx/schematics
ng generate store AppState --root --module app.module.ts 
or
ng generate @ngrx/schematics:store State --root --module app.module.ts
```
app.module.ts
```ts
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class AppModule { }
```
/app/reducers/index.ts
```ts
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

```
## Define action
```
ng generate action auth/Auth
```
## Define reducer
```
ng generate reducer Auth --flat=false --module auth/auth.module.ts
```
