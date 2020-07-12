import React,{ FC } from 'react';
import {Tabs as MaterialTabs} from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import './Tabs.scss';
export const Tabs:FC<{}> = () => {
  const [value, setValue] = React.useState('home');
  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
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
            <Tab label="Home" value={'home'}/>
            <Tab label="Projects" value={'projects'} />
            <Tab label="About" value={'about'}/>
        </MaterialTabs>
  );
}

export default Tabs;
