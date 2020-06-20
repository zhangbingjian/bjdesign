/** @format */
import React, {useState} from 'react';
import Menu from './components/Menu/menu';
import Transition from './components/Transition/transition';
import Icon from './components/Icon/icon';

import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import Button from './components/Button/button';
import Alert from './components/Alert/alert';

function App() {
    const [a, setA] = useState(false);
    return (
        <>
            <Button btnType="default" size="lg" width="100%">
                123
            </Button>
            <Alert message={'message'} type="success" closable>
                333
            </Alert>
            <div>
                <Button btnType="default" size="lg" width="100%">
                    1234
                </Button>
            </div>
        </>
    );
}

export default App;
