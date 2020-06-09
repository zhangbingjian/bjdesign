/** @format */

import React from 'react';
import classNames from 'classnames';
import {TabPaneProps} from './tabPane';

type TabsMode = 'horizontal' | 'vertical';
interface TabsProps {
    defaultIndex?: number;
    mode?: TabsMode;
    className?: string;
}

const Tabs: React.FC<TabsProps> = props => {
    const {className, mode, children} = props;
    const childrne = children as Array<any>;
    console.log(React.Children);
    const classes = classNames(className, {
        'tabs-vertical': mode === 'vertical',
        'tabs-horizontal': mode !== 'vertical',
    });

    const renderLabelChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabPaneProps>;
            const {displayName} = childElement.type;
            if (displayName === 'TabPane') {
                let cloneElemen = React.cloneElement(childElement, {index});
                return (
                    <>
                        <div className="labelList" key={`${childElement.props.tab}-label-${index}`}>
                            {cloneElemen}
                        </div>
                    </>
                );
            } else {
                console.error('警告: Tabs组件里有一个子元素，它并不是TabPane组件');
            }
        });
    };

    const renderContextChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabPaneProps>;
            const {displayName} = childElement.type;
            if (displayName === 'TabPane') {
                let cloneElemen = React.cloneElement(childElement, {index});
                return (
                    <>
                        <div className="labelList" key={`${childElement.props.tab}-content-${index}`}>
                            {cloneElemen}
                        </div>
                    </>
                );
            } else {
                console.error('警告: Tabs组件里有一个子元素，它并不是TabPane组件');
            }
        });
    };

    return (
        <>
            <div className={classes}>
                <div className="label">
                    {childrne.map((item, i) => {
                        console.log(item.props.tab);
                        return (
                            <div className="labelList" key={`${item.props.tab}-label-${i}`}>
                                {item.props.tab}
                            </div>
                        );
                    })}
                    {mode !== 'vertical' && <div className="placeholder"></div>}
                </div>
                <div className="tabs-content">{renderContextChildren()}</div>
            </div>
        </>
    );
};

Tabs.defaultProps = {
    defaultIndex: 1,
    mode: 'horizontal',
};

export default Tabs;
