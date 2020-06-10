/** @format */
import React from 'react';
import Tabs from './components/Tabs/tabs';
import TabPane from './components/Tabs/tabPane';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

function App() {
    return (
        <>
            <div style={{width: '100%', height: '500px'}}>
                <Tabs>
                    <TabPane tab="tab1tab1">
                        <div>999</div>
                    </TabPane>
                    <TabPane tab="tab2">3333</TabPane>
                    <TabPane tab="tab2" disabled>
                        444
                    </TabPane>
                </Tabs>
            </div>
            <Menu>
                <MenuItem>123</MenuItem>
                <MenuItem>1233</MenuItem>
                <MenuItem>1234</MenuItem>
            </Menu>
        </>
    );
}

export default App;
