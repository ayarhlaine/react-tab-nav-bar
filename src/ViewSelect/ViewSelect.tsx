import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppState } from '../store';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { updateActiveViewAction } from '../NavBar/NavBar.dux';
import './ViewSelect.scss';
export interface ViewSelectProp {
    activeView: string;
    actions: {
        updateActiveViewAction: typeof updateActiveViewAction;
    }
}
export const ViewSelect: FC<ViewSelectProp> = ({ activeView, actions }) => {
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        actions.updateActiveViewAction(event.target.value as string);
    };
    return (
        <div className={'ViewSelect'}>
             <Select
             className={'ViewSelect__select'}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={activeView}
            disableUnderline
            MenuProps={{MenuListProps: {disablePadding: true}, classes: {paper: 'ViewSelect__dialog'}}}
            onChange={handleChange}
            >
            <MenuItem value={'normal'} classes={{root: 'ViewSelect__MenuItem'}}>Normal</MenuItem>
            <MenuItem value={'advanced'} classes={{root: 'ViewSelect__MenuItem'}}>Advanced</MenuItem>
            </Select>
        </div>
    )
}
const mapStateToProps = (appState: AppState) => {
    return {
        activeView: appState.navBar.activeView
    }
  }
  
  const mapDispatchToProps = (dispatch: Dispatch) => ({
    actions: {
      ...bindActionCreators({ updateActiveViewAction }, dispatch),
    }
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewSelect);