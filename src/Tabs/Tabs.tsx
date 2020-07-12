import React,{ FC } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { AppState } from '../store';
import {Tabs as MaterialTabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import { updateActiveTabAction } from '../NavBar/NavBar.dux';
import './Tabs.scss';
export interface TabsProp {
  activeTab: string;
  activeView: string;
  actions: {
    updateActiveTabAction: typeof updateActiveTabAction;
  }
}
export const Tabs:FC<TabsProp> = (
  {
    activeTab, activeView, actions,
  }
) => {
  return (
        <MaterialTabs
            className={'Tabs'}
            value={activeTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(_, activeTab: string) => actions.updateActiveTabAction(activeTab)}
            aria-label="disabled tabs example"
        >
            <Tab label="Home" value={'home'}/>
            <Tab label="Projects" value={'projects'} />
            <Tab label="About" value={'about'}/>
            {
              activeView === 'advanced' && 
              <Tab label="System Setting" value={'system setting'}/>
            }
        </MaterialTabs>
  );
}
const mapStateToProps = (appState: AppState) => {
  return {
    activeTab: appState.navBar.activeTab,
    activeView: appState.navBar.activeView
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators({ updateActiveTabAction }, dispatch),
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);

