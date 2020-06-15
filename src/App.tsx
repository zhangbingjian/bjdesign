/** @format */
import React from 'react';
import Tabs from './components/Tabs/tabs';
import TabPane from './components/Tabs/tabPane';
import {ButtonType} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import Button from './components/Button/button';

function App() {
    return (
        <>
            <div style={{width: '100%', height: '500px', marginTop: '10px'}}>
                <Tabs mode="horizontal" defaultIndex={2}>
                    <TabPane tab="tab1">
                        <div style={{width: '100%', height: '100%'}}>
                            <Tabs defaultIndex={1} mode="vertical">
                                <TabPane tab="tab5">222</TabPane>
                                <TabPane tab="tab7">333</TabPane>
                                <TabPane tab="tab9">444</TabPane>
                            </Tabs>
                        </div>
                    </TabPane>
                    <TabPane tab="tab2">222</TabPane>
                    <TabPane tab="tab3">333</TabPane>
                    <TabPane tab="tab4">444</TabPane>
                </Tabs>
            </div>
        </>
    );
}

export default App;
