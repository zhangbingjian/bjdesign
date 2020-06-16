/** @format */
import React from 'react';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import Icon from './components/Icon/icon';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);
function App() {
    return (
        <>
            <Icon icon="alipay" theme="danger" size="10x" />
            <Menu>
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
                <MenuItem>3</MenuItem>
                <MenuItem>4</MenuItem>
            </Menu>
        </>
    );
}

export default App;
