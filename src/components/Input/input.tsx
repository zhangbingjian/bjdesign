/** @format */

import React, {FC} from 'react';
import classNames from 'classnames';

export interface InputProps {
    children?: any;
    className?: string;
    maxLength?: number;
    onChange?: Function;
    size?: InputSize;
}
type InputSize = 'large' | 'middle' | 'small';

export const Input: FC<InputProps> = props => {
    const {maxLength, onChange, className, size} = props;
    const classes = classNames('bj-input', className, {
        [`input-${size}`]: size,
    });
    return (
        <input
            type="text"
            max={maxLength}
            className={classes}
            onChange={e => {
                if (maxLength) {
                    if (e.target.value.length >= maxLength) {
                        let substr = e.target.value.slice(0, maxLength);
                        e.target.value = substr;
                    } else {
                        onChange && onChange();
                    }
                }
            }}
        />
    );
};
Input.defaultProps = {
    size: 'middle',
};

export default Input;
