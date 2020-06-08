/** @format */
import React from 'react';
import Tabs from './components/Tabs/tabs';
import TabPane from './components/Tabs/tabPane';

function App() {
    return (
        <>
            <div style={{width: '300px', margin: '100px'}}>
                <Tabs>
                    <TabPane tab="tab1tab1" />
                    <TabPane tab="tab2" />
                    <TabPane tab="tab3" />
                </Tabs>
            </div>
        </>
    );
}

export default App;
