/** @format */

import React, {useContext, createContext, useState} from 'react';
import classNames from 'classnames';
import {TabPaneProps} from './tabPane';

type TabsMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: number) => void;

interface TabsProps {
    defaultIndex?: number;
    mode?: TabsMode;
    className?: string;
    onSelect?: SelectCallback;
}

interface ITabsContext {
    index: number;
    onSelect?: SelectCallback;
}

export const TabsContext = createContext<ITabsContext>({index: 0});

const Tabs: React.FC<TabsProps> = props => {
    const {className, mode, children, defaultIndex, onSelect} = props;
    const [currentActive, setActive] = useState(defaultIndex);
    const classes = classNames(className, {
        'tabs-vertical': mode === 'vertical',
        'tabs-horizontal': mode !== 'vertical',
    });

    const handleClick = (index: number) => {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };

    const passedContext: ITabsContext = {
        index: currentActive ? currentActive : 0,
        onSelect: handleClick,
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
                console.log(cloneElemen);

                const labelListClass = classNames('labelList', {
                    'labelList-active': index === passedContext.index,
                });
                return (
                    <>
                        <div className={labelListClass} key={`${childElement.props.tab}-content-${index}`}>
                            {`${childElement.props.tab}-content-${index}`}
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
                    {mode !== 'vertical' && <div className="placeholder"></div>}
                </div>
                <div className="tabs-content">{renderContextChildren()}</div>
            </div>
        </>
    );
};

Tabs.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
};

export default Tabs;
