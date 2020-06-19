/** @format */
import React, {useState} from 'react';
import Menu from './components/Menu/menu';
import Transition from './components/Transition/transition';
import Icon from './components/Icon/icon';

import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

function App() {
    const [a, setA] = useState(false);
    return (
        <>
            <Menu mode="vertical">
                <MenuItem>1</MenuItem>
                <SubMenu title="2">
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                </SubMenu>
            </Menu>

            {/* <Transition in={a} timeout={300} animation="zoom-in-top"></Transition> */}

            <Icon icon={faCoffee} theme="danger" />
        </>
    );
}

export default App;
