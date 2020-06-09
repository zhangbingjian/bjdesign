/** @format */

import React from 'react';
import classNames from 'classnames';

export interface TabPaneProps {
    tab: string;
    index?: number;
}

const TabPane: React.FC<TabPaneProps> = props => {
    const {tab, children} = props;
    console.log(children);
    return <>{children}</>;
};
TabPane.displayName = 'TabPane';
export default TabPane;
