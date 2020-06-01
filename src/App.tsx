/** @format */
import React from 'react';
// import Button, {ButtonType, ButtonSize, ButtonShape} from './components/Button/button';
// import Alert, {AlertType} from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import {Verify} from 'crypto';

function App() {
    return (
        <div style={{width: '300px', margin: '100px'}}>
            <Menu defaultIndex={3} mode="vertical">
                <MenuItem index={0}>1</MenuItem>
                <MenuItem index={1}>2</MenuItem>
                <MenuItem index={2}>3</MenuItem>
                <MenuItem index={3}>4</MenuItem>
            </Menu>
        </div>
    );
}

export default App;
