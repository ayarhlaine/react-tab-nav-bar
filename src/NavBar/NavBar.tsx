import React,{ FC } from 'react';
import Tabs from '../Tabs/Tabs';
import ViewSelect from '../ViewSelect/ViewSelect';
import './Nav.scss';
export const NavBar:FC<{}> = () => {
  return (
    <div className="Nav">
        <div className={'Nav__contents'}>
            <Tabs />
            <ViewSelect />
        </div>
    </div>
  );
}
export default NavBar;
