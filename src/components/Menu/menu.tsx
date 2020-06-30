/** @format */

/**
 * @fileOverview menu组件
 * @author: 炳健
 * @time: 2020-6-1
 */

import React, {FC, createContext, useState} from 'react';
import classNames from 'classnames';
import {MenuItemProps} from './menuItem';

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
    /**默认选中的Index */
    defaultIndex?: string;
    className?: string;
    /**Menu的模式 ('horizontal' | 'vertical') */
    mode?: MenuMode;
    style?: React.CSSProperties;
    /**切换时执行的回调函数 */
    onSelect?: SelectCallback;
    /**默认展开的Menu(mode为vertical时有效) */
    defaultOpenSubMenu?: string[];
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenu?: string[];
}
export const MenuContext = createContext<IMenuContext>({index: '0'});
export const Menu: FC<MenuProps> = props => {
    const {defaultIndex, className, mode, style, onSelect, children, defaultOpenSubMenu} = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames('bj-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    });
    const handleClick = (index: string) => {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenu,
    };
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>;
            const {displayName} = childElement.type;
            if (displayName === 'MenuItem' || displayName === 'SubMenu') {
                let cloneElemen = React.cloneElement(childElement, {index: index.toString()});
                return cloneElemen;
            } else {
                console.error('警告: Menu组件里有一个子元素，它并不是MenuItem组件');
            }
        });
    };

    return (
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>{renderChildren()}</MenuContext.Provider>
        </ul>
    );
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenu: [],
};

export default Menu;
