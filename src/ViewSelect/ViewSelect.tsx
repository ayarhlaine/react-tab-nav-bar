import React, { FC } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import './ViewSelect.scss';
export const ViewSelect: FC<{}> = () => {
    const [view, setView] = React.useState('normal');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setView(event.target.value as string);
    };
    return (
        <div className={'ViewSelect'}>
             <Select
             className={'ViewSelect__select'}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={view}
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
export default ViewSelect;