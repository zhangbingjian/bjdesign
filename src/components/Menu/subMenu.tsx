/** @format */

import React, {createContext, useState, useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';
import {MenuItemProps} from './menuItem';

export interface SubMenuProps {
    index?: number;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps> = props => {
    const {index, title, className, children} = props;
    const context = useContext(MenuContext);
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
    });

    const renderChildren = () => {
        const childrenComponent = React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            if (childElement.type.displayName === 'MenuItem') {
                return childElement;
            } else {
                console.error('警告: SubMenu组件里有一个子元素，它并不是MenuItem组件');
            }
        });
        return <ul className="bj-submenu">{childrenComponent}</ul>;
    };

    return (
        <li key={index} className={classes}>
            <div className="submenu-title">{title}</div>
            {renderChildren()}
        </li>
    );
};

SubMenu.displayName = 'SubMenu';
export default SubMenu;
