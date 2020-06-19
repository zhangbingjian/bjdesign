/** @format */

import React from 'react';
import classNames from 'classnames';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export type ThemeProps = 'success' | 'danger' | 'warning' | 'info' | 'primary' | 'secondary' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = props => {
    //Icon-primary
    const {className, theme, ...restProps} = props;
    const classes = classNames('bj-icon', className, {
        [`icon-${theme}`]: theme,
    });

    return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
