/** @format */

import React, {FC, useContext} from 'react';
import classNames from 'classnames';
import {TabsContext} from './tabs';

export interface TabPaneProps {
    /**TabPane的标题 */
    tab: string;
    /**TanPane的索引 */
    index?: number;
    className?: string;
    /**禁用TabPane */
    disabled?: Boolean;
    children?: any;
}

export const TabPane: FC<TabPaneProps> = props => {
    const {tab, children, className, index, disabled} = props;
    const context = useContext(TabsContext);
    const classes = classNames('labelList', className, {
        'is-disabled': disabled,
        'is-active': index === context.index,
        'type-label': context.type === 'label',
        'type-card': context.type !== 'label',
    });

    const changeActiveIndex = (e: React.MouseEvent) => {
        e.preventDefault();
        if (context.onChange && !disabled && typeof index === 'number') {
            context.onChange(index);
        }
    };

    return (
        <div className={classes} onClick={changeActiveIndex} style={{userSelect: 'none'}}>
            {tab}
        </div>
    );
};
TabPane.displayName = 'TabPane';
export default TabPane;
