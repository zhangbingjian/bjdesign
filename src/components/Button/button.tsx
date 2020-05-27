/** @format */

/**
 * @fileOverview button按钮组件
 * @author: 炳健
 * @time: 2020-5-27
 */

import React from 'react';
import classNames from 'classnames';

export enum ButtonSize { //按钮的大小
    Large = 'lg',
    Small = 'sm',
    Custom = 'custom',
}
export enum ButtonType { //按钮类型
    Promary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link',
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
    width?: string;
    height?: string;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
    const {btnType, disabled, size, children, href, width, height, className, ...restProps} = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === ButtonType.Link && disabled,
    });

    if (size === ButtonSize.Custom) {
        if (btnType === ButtonType.Link && href) {
            return (
                <a
                    href={href}
                    className={classes}
                    {...restProps}
                    style={{
                        width,
                        height,
                        display: 'flex',
                        textAlign: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {children}
                </a>
            );
        } else {
            return (
                <button className={classes} {...restProps} style={{width, height}} disabled={disabled}>
                    {children}
                </button>
            );
        }
    }

    if (btnType === ButtonType.Link && href) {
        return (
            <a href={href} className={classes} {...restProps}>
                {children}
            </a>
        );
    } else {
        return (
            <button className={classes} disabled={disabled} {...restProps}>
                {children}
            </button>
        );
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
    children: '确认',
};

export default Button;
