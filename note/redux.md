# Redux Note
# Creating Store
```
import { applyMiddleware,createStore,combineReducers } from 'redux'
import { StateProp,reducerName } from '../GitUser/GitUser.dux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export interface AppState {
    reducerName: StateProp;
  }
const rootReducer = combineReducers<AppState> ({
    stateName: reducerName
});

export const configureStore = () =>{
    const middleWareEnhancer = applyMiddleware(thunk);
    const store = createStore(
        rootReducer,
        composeWithDevTools(middleWareEnhancer)
    );
    return store;
};

export default configureStore;
```
# Creating Action
```createAction('rootAction/SubAction',(action) => (param: paramType) => action(param));```

# Creating Reducer
```createReducer(initialState)
  .handleAction(actionName, (state, action) =>
    ({...state, updatedState: action.payload}))```