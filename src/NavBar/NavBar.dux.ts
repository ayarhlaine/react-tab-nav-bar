import { action, createReducer} from 'typesafe-actions';
export const updateActiveTabAction = (activeTab: string) => action('navBar/UPDATE_ACTIVE_TAB', activeTab);
export interface NavBarState {
    activeTab: string;
    isAdvanceView: boolean;
}
const initialState: NavBarState = {
    activeTab: 'home',
    isAdvanceView: false,
};
export const navBarReducer = createReducer(initialState)
.handleAction('navBar/UPDATE_ACTIVE_TAB', (state: NavBarState, action: any) => ({...state, activeTab: action.payload}))
;