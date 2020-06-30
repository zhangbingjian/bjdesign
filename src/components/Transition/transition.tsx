/** @format */
/**
 * @fileOverview 动画组件
 * @author: 炳健
 * @time: 2020-6-16
 */

import React from 'react';
import {CSSTransition} from 'react-transition-group';
import {CSSTransitionProps} from 'react-transition-group/CSSTransition';

type AnimationName = 'zoom-in-top' | 'zoom-in-bottom' | 'zoom-in-left' | 'zoom-in-right';

interface TransitionProps {
    animation?: AnimationName;
    wrapper?: boolean;
}

const Transition: React.FC<CSSTransitionProps & TransitionProps> = props => {
    const {children, classNames, animation, wrapper, ...restProps} = props;
    return (
        <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
            {wrapper ? <div>{children}</div> : children}
        </CSSTransition>
    );
};
Transition.defaultProps = {
    unmountOnExit: true,
    appear: true,
};

export default Transition;
