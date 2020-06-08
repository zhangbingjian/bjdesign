/** @format */

import React from 'react';
import classNames from 'classnames';

interface TabPaneProps {
    tab: string;
}

const TabPane: React.FC<TabPaneProps> = props => {
    const {tab} = props;
    return (
        <>
            <div className="TabPane">{tab}</div>
        </>
    );
};

export default TabPane;
