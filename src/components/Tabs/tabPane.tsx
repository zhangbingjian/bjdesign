/** @format */

import React, {useContext} from 'react';
import classNames from 'classnames';
import {TabsContext} from './tabs';

export interface TabPaneProps {
    tab: string;
    index?: number;
    className?: string;
    disabled?: Boolean;
    children?: any;
}

const TabPane: React.FC<TabPaneProps> = props => {
    const {tab, children, className, index, disabled} = props;
    const context = useContext(TabsContext);
    const classes = classNames('labelList', className, {
        'is-disabled': disabled,
        'is-active': index === context.index,
    });

    const changeActiveIndex = () => {
        if (context.onChange && !disabled && typeof index === 'number') {
            context.onChange(index);
        }
    };

    return (
        <div className={classes} onClick={changeActiveIndex}>
            {tab}
        </div>
    );
};
TabPane.displayName = 'TabPane';
export default TabPane;
