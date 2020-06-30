/** @format */
/**
 * @fileOverview menuItem组件
 * @author: 炳健
 * @time: 2020-6-1
 */

import React, {FC, useContext} from 'react';
import classNames from 'classnames';
import {MenuContext} from './menu';

export interface MenuItemProps {
    /**MenuItem的索引 */
    index?: string;
    /**禁用MenuItem */
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export const MenuItem: FC<MenuItemProps> = props => {
    const {index, disabled, className, style, children} = props;
    const context = useContext(MenuContext);
    const classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-active': context.index === index,
    });
    const handleClick = () => {
        if (context.onSelect && !disabled && typeof index === 'string') {
            context.onSelect(index);
        }
    };

    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children}
        </li>
    );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
