import { Dispatch } from 'redux';
import {
    updateActiveTabAction,
    updateActiveViewAction,
} from '../NavBar/NavBar.dux';
export const changeAdvancedView = (activeView: string) => (dispatch: Dispatch) => {
    dispatch(updateActiveTabAction('home'));
    dispatch(updateActiveViewAction(activeView));
}