/** @format */
import React from 'react';
// import Button, {ButtonType, ButtonSize, ButtonShape} from './components/Button/button';
// import Alert, {AlertType} from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';

function App() {
    return (
        <div style={{width: '600px', margin: '100px'}}>
            <Menu defaultIndex={0} mode="vertical">
                <MenuItem>MenuItem1</MenuItem>
                <MenuItem>MenuItem2</MenuItem>
                <SubMenu title="MenuItem3">
                    <MenuItem>dropdown1</MenuItem>
                    <MenuItem>dropdown2</MenuItem>
                    <MenuItem>dropdown3</MenuItem>
                </SubMenu>
                <MenuItem>MenuItem4</MenuItem>
            </Menu>
        </div>
    );
}

export default App;
