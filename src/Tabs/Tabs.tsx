import React,{ FC } from 'react';

import Paper from '@material-ui/core/Paper';
import {Tabs as MaterialTabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import './Tabs.scss';
export const Tabs:FC<{}> = () => {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
        <MaterialTabs
            className={'Tabs'}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Home" />
            <Tab label="Projects" />
            <Tab label="About" />
        </MaterialTabs>
  );
}

export default Tabs;
