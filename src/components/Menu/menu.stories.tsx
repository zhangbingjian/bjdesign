/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Menu from './menu';
import MenuItem from './menuItem';
import subMenu from './subMenu';
import SubMenu from './subMenu';

const defaultMenu = () => (
    <Menu>
        <MenuItem>MenuItem1</MenuItem>
        <MenuItem>MenuItem2</MenuItem>
        <MenuItem>MenuItem3</MenuItem>
        <MenuItem disabled>MenuItem4</MenuItem>
    </Menu>
);

const MenuMode = () => (
    <>
        <Menu mode="horizontal" defaultIndex="1">
            <MenuItem>MenuItem1</MenuItem>
            <MenuItem>MenuItem2</MenuItem>
            <MenuItem>MenuItem3</MenuItem>
            <MenuItem disabled>MenuItem4</MenuItem>
        </Menu>
        <div style={{width: '300px', marginTop: '50px'}}>
            <Menu mode="vertical" defaultIndex="1">
                <MenuItem>MenuItem1</MenuItem>
                <MenuItem>MenuItem2</MenuItem>
                <MenuItem>MenuItem3</MenuItem>
                <MenuItem disabled>MenuItem4</MenuItem>
            </Menu>
        </div>
    </>
);

const foldMenu = () => (
    <>
        <Menu mode="horizontal">
            <MenuItem>MenuItem1</MenuItem>
            <SubMenu title="MenuItem2">
                <MenuItem>SubMenu-MenuItem1</MenuItem>
                <MenuItem>SubMenu-MenuItem2</MenuItem>
                <MenuItem>SubMenu-MenuItem3</MenuItem>
            </SubMenu>
            <MenuItem>MenuItem3</MenuItem>
            <MenuItem disabled>MenuItem4</MenuItem>
        </Menu>
        <div style={{width: '300px', marginTop: '50px'}}>
            <Menu mode="vertical">
                <MenuItem>MenuItem1</MenuItem>
                <SubMenu title="MenuItem2">
                    <MenuItem>SubMenu-MenuItem1</MenuItem>
                    <MenuItem>SubMenu-MenuItem2</MenuItem>
                    <MenuItem>SubMenu-MenuItem3</MenuItem>
                </SubMenu>
                <MenuItem>MenuItem3</MenuItem>
                <MenuItem disabled>MenuItem4</MenuItem>
            </Menu>
        </div>
    </>
);

const defaultUnfoldSubMenu = () => (
    <>
        <div style={{width: '300px', marginTop: '50px'}}>
            <Menu mode="vertical" defaultOpenSubMenu={['1']}>
                <MenuItem>MenuItem1</MenuItem>
                <SubMenu title="MenuItem2">
                    <MenuItem>SubMenu-MenuItem1</MenuItem>
                    <MenuItem>SubMenu-MenuItem2</MenuItem>
                    <MenuItem>SubMenu-MenuItem3</MenuItem>
                </SubMenu>
                <MenuItem>MenuItem3</MenuItem>
                <MenuItem disabled>MenuItem4</MenuItem>
            </Menu>
        </div>
    </>
);

storiesOf('Menu', module)
    .add('默认Menu', defaultMenu)
    .add('Menu模式', MenuMode)
    .add('可折叠的Menu', foldMenu)
    .add('默认展开的Menu', defaultUnfoldSubMenu);
