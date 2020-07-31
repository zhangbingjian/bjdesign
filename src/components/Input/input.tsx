/** @format */

/**
 * @fileOverview input按钮组件
 * @author: 炳健
 * @time: 2020-6-29
 */

import React, {FC, useState, InputHTMLAttributes, ReactNode} from 'react';
import classNames from 'classnames';

export interface InputProps {
    text: {text: string; setText: Function};
    children?: any;
    className?: string;
    /**最大长度 */
    maxLength?: number;
    /**控件大小 ('large' | 'middle' | 'small') */
    size?: InputSize;
    /**占位符 */
    placeholder?: string;
    /**input的默认值 */
    value?: string;
    /**带标签的 input，设置前置标签 */
    addonBefore?: string | ReactNode;
    /**带标签的 input，设置后置标签 */
    addonAfter?: string | ReactNode;
    /**是否禁用 */
    disabled?: boolean;
    /**输入框内容变化时的回调 function(e) */
    onChange?: Function;
    /**按下回车键后的回调 function(e)*/
    onPressEnter?: Function;
}
export type InputSize = 'large' | 'middle' | 'small';
type NativeButtonProps = InputProps & InputHTMLAttributes<HTMLElement>;

export const Input: FC<InputProps> = props => {
    const {
        maxLength,
        onChange,
        className,
        size,
        placeholder,
        value,
        disabled,
        onPressEnter,
        addonBefore,
        addonAfter,
        text,
    } = props;
    let inputValue = value ? value : '';
    const [inputBoxValue, setInputBoxValue] = useState(inputValue);
    const classes = classNames('bj-input', className, {
        [`input-${size}`]: size,
    });
    const addonBeforeClass = classNames('bj-input-addonBefore', {
        [`addonBefore-${size}`]: size,
    });
    const addonAfterClass = classNames('bj-input-addonAfter', {
        [`addonAfter-${size}`]: size,
    });
    return (
        <span className="bj-input-box">
            {addonBefore && <div className={addonBeforeClass}>{addonBefore}</div>}
            <input
                type="text"
                max={maxLength}
                className={classes}
                value={inputBoxValue}
                {...{placeholder: placeholder, disabled}}
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        onPressEnter && onPressEnter(e);
                    }
                }}
                onChange={e => {
                    if (maxLength) {
                        if (inputBoxValue.length < maxLength) {
                            onChange && onChange(e);
                            setInputBoxValue(e.target.value);
                            text.setText(e.target.value);
                        } else {
                            if (inputBoxValue.length > e.target.value.length) {
                                onChange && onChange(e);
                                setInputBoxValue(e.target.value);
                                text.setText(e.target.value);
                            }
                        }
                    } else {
                        onChange && onChange(e);
                        setInputBoxValue(e.target.value);
                        text.setText(e.target.value);
                    }
                }}
            />
            {addonAfter && <div className={addonAfterClass}>{addonAfter}</div>}
        </span>
    );
};
Input.defaultProps = {
    size: 'middle',
};

export default Input;
