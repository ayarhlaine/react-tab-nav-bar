import { applyMiddleware,createStore,combineReducers } from 'redux'
import { NavBarState ,navBarReducer } from '../NavBar/NavBar.dux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
export interface AppState {
    navBar: NavBarState;
  }
const rootReducer = combineReducers<AppState> ({
    navBar: navBarReducer
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