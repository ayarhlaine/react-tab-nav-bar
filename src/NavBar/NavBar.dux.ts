import { action, createReducer} from 'typesafe-actions';
export const updateActiveTabAction = (activeTab: string) => action('navBar/UPDATE_ACTIVE_TAB', activeTab);
export const updateActiveViewAction = (activeView: string) => action('navBar/UPDATE_ACTIVE_VIEW', activeView);
export interface NavBarState {
    activeTab: string;
    activeView: string;
}
const initialState: NavBarState = {
    activeTab: 'home',
    activeView: 'normal',
};
export const navBarReducer = createReducer(initialState)
.handleAction('navBar/UPDATE_ACTIVE_TAB', (state: NavBarState, action: any) => ({...state, activeTab: action.payload}))
.handleAction('navBar/UPDATE_ACTIVE_VIEW', (state: NavBarState, action: any) => ({...state, activeView: action.payload}))
;