/** @format */

import React from 'react';
import classNames from 'classnames';
import TabPane from './tabPane';

type TabsMode = 'horizontal' | 'vertical';
interface TabsProps {
    defaultIndex?: number;
    mode?: TabsMode;
    className?: string;
}

const Tabs: React.FC<TabsProps> = props => {
    const {className, mode, children} = props;
    const classes = classNames(className, {
        'tabs-vertical': mode === 'vertical',
        'tabs-horizontal': mode !== 'vertical',
    });
    return (
        <>
            <div className={classes}>
                {children}
                {mode !== 'vertical' && <div className="placeholder"></div>}
            </div>
        </>
    );
};

Tabs.defaultProps = {
    defaultIndex: 1,
    mode: 'horizontal',
};

export default Tabs;
