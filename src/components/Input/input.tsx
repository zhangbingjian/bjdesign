/** @format */

/**
 * @fileOverview input按钮组件
 * @author: 炳健
 * @time: 2020-6-29
 */

import React, {FC, useState, InputHTMLAttributes} from 'react';
import classNames from 'classnames';

export interface InputProps {
    children?: any;
    className?: string;
    /**最大长度 */
    maxLength?: number;
    /**控件大小 (large | middle | small) */
    size?: InputSize;
    /**占位符 */
    placeholder?: string;
    /**input的默认值 */
    value?: string;
    /**是否禁用 */
    disabled?: boolean;
    /**输入框内容变化时的回调 */
    onChange?: Function;
    /**按下回车键后的回调 */
    onPressEnter?: Function;
}
type InputSize = 'large' | 'middle' | 'small';
type NativeButtonProps = InputProps & InputHTMLAttributes<HTMLElement>;

export const Input: FC<NativeButtonProps> = props => {
    const {maxLength, onChange, className, size, placeholder, value, disabled, onPressEnter} = props;
    let inputValue = value ? value : '';
    const [inputBoxValue, setInputBoxValue] = useState(inputValue);
    const classes = classNames('bj-input', className, {
        [`input-${size}`]: size,
    });
    return (
        <input
            type="text"
            max={maxLength}
            className={classes}
            value={inputBoxValue}
            {...{placeholder: placeholder, disabled}}
            onKeyDown={e => {
                if (e.keyCode === 13) {
                    onPressEnter && onPressEnter();
                }
            }}
            onChange={e => {
                if (maxLength) {
                    if (inputBoxValue.length < maxLength) {
                        onChange && onChange();
                        setInputBoxValue(e.target.value);
                    } else {
                        if (inputBoxValue.length > e.target.value.length) {
                            onChange && onChange();
                            setInputBoxValue(e.target.value);
                        }
                    }
                } else {
                    onChange && onChange();
                    setInputBoxValue(e.target.value);
                }
            }}
        />
    );
};
Input.defaultProps = {
    size: 'middle',
};

export default Input;
