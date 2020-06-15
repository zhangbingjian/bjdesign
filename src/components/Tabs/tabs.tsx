/** @format */

import React, {useContext, createContext, useState} from 'react';
import classNames from 'classnames';
import {TabPaneProps} from './tabPane';

type TabsMode = 'horizontal' | 'vertical';
type TabsType = 'label' | 'card';
type SelectCallback = (selectIndex: number) => void;

interface TabsProps {
    defaultIndex?: number;
    mode?: TabsMode;
    type?: TabsType;
    className?: string;
    onChange?: SelectCallback;
}

interface ITabsContext {
    index: number;
    onChange?: SelectCallback;
    type?: TabsType;
}

export const TabsContext = createContext<ITabsContext>({index: 0});

const Tabs: React.FC<TabsProps> = props => {
    const {className, mode, children, defaultIndex, onChange, type} = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames(className, {
        'tabs-vertical': mode === 'vertical',
        'tabs-horizontal': mode !== 'vertical',
    });

    const handleClick = (index: number) => {
        setActive(index);
        if (onChange) {
            onChange(index);
        }
    };

    const passedContext: ITabsContext = {
        index: currentActive ? currentActive : 0,
        onChange: handleClick,
        type,
    };

    const renderLabelChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<TabPaneProps>;
            const {displayName} = childElement.type;
            if (displayName === 'TabPane') {
                let cloneElemen = React.cloneElement(childElement, {index});
                return cloneElemen;
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
                const labelListClass = classNames('contentList', {
                    'contentList-active': index === passedContext.index,
                });
                return (
                    <>
                        <div className={labelListClass} key={`${childElement.props.tab}-content-${index}`}>
                            {cloneElemen.props.children}
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
                    <TabsContext.Provider value={passedContext}>{renderLabelChildren()}</TabsContext.Provider>
                    <div className="placeholder"></div>
                </div>
                <div className="tabs-content">{renderContextChildren()}</div>
            </div>
        </>
    );
};

Tabs.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
    type: 'label',
};

export default Tabs;
