/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Tab from './tabs';
import TabPan from './tabPane';

const defaultTabs = () => (
    <div style={{width: '100%', height: '500px'}}>
        <Tab
            defaultIndex={1}
            onChange={() => {
                console.log('change Tabs');
                action('change Tabs');
            }}>
            <TabPan tab="tab1">
                <div style={{height: '100%', backgroundColor: '#cdf'}}>tab1</div>
            </TabPan>
            <TabPan tab="tab2">
                <div style={{height: '100%', backgroundColor: '#ccc'}}>tab2</div>
            </TabPan>
            <TabPan tab="tab3">
                <div style={{height: '100%', backgroundColor: '#cfd'}}>tab3</div>
            </TabPan>
        </Tab>
    </div>
);
const TabsMode = () => (
    <>
        <div style={{width: '100%', height: '200px'}}>
            <Tab mode="horizontal">
                <TabPan tab="tab1">
                    <div style={{height: '100%', backgroundColor: '#cdf'}}>tab1</div>
                </TabPan>
                <TabPan tab="tab2">
                    <div style={{height: '100%', backgroundColor: '#ccc'}}>tab2</div>
                </TabPan>
                <TabPan tab="tab3">
                    <div style={{height: '100%', backgroundColor: '#cfd'}}>tab3</div>
                </TabPan>
            </Tab>
        </div>
        <hr />
        <div style={{width: '100%', height: '200px'}}>
            <Tab mode="vertical">
                <TabPan tab="tab1">
                    <div style={{height: '100%', backgroundColor: '#cdf'}}>tab1</div>
                </TabPan>
                <TabPan tab="tab2">
                    <div style={{height: '100%', backgroundColor: '#ccc'}}>tab2</div>
                </TabPan>
                <TabPan tab="tab3">
                    <div style={{height: '100%', backgroundColor: '#cfd'}}>tab3</div>
                </TabPan>
            </Tab>
        </div>
    </>
);
const TabPanType = () => {
    return (
        <>
            <div style={{width: '100%', height: '200px'}}>
                <Tab mode="horizontal" type="card">
                    <TabPan tab="tab1">
                        <div style={{height: '100%', backgroundColor: '#cdf'}}>tab1</div>
                    </TabPan>
                    <TabPan tab="tab2">
                        <div style={{height: '100%', backgroundColor: '#ccc'}}>tab2</div>
                    </TabPan>
                    <TabPan tab="tab3">
                        <div style={{height: '100%', backgroundColor: '#cfd'}}>tab3</div>
                    </TabPan>
                </Tab>
            </div>
            <hr />
            <div style={{width: '100%', height: '200px'}}>
                <Tab mode="horizontal" type="label">
                    <TabPan tab="tab1">
                        <div style={{height: '100%', backgroundColor: '#cdf'}}>tab1</div>
                    </TabPan>
                    <TabPan tab="tab2">
                        <div style={{height: '100%', backgroundColor: '#ccc'}}>tab2</div>
                    </TabPan>
                    <TabPan tab="tab3">
                        <div style={{height: '100%', backgroundColor: '#cfd'}}>tab3</div>
                    </TabPan>
                </Tab>
            </div>
        </>
    );
};

storiesOf('Tabs', module).add('默认Tabs', defaultTabs).add('Tabs模式', TabsMode).add('TabPan的样式', TabPanType);
