/** @format */

/**
 * @fileOverview button按钮组件
 * @author: 炳健
 * @time: 2020-5-27
 */

import React from 'react';
import classNames from 'classnames';
//按钮的大小
export type ButtonSize = 'lg' | 'sm' | 'custom';

export enum ButtonShape { //按钮类型
    Circle = 'circle',
}
//按钮类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className?: string;
    disabled?: boolean; //禁用状态
    size?: ButtonSize; //按钮大小
    btnType?: ButtonType; //按钮的类型
    children?: React.ReactNode; //按钮内部元素
    href?: string; //按钮链接使用 (btnType为Link时必传)
    width?: string; // 按钮宽度(size为custom时有效)
    height?: string; // 按钮高度(size为custom时有效)
    shape?: ButtonShape; //按钮形状 不传为小圆角
    block?: Boolean; // 将按钮宽度调整为其父宽度
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = props => {
    const {btnType, disabled, size, children, href, width, height, className, shape, block, ...restProps} = props;

    const classes = classNames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'btn-block': block,
        [`btn-shape-${shape}`]: shape,
        disabled: btnType === 'link' && disabled,
    });

    if (size === 'custom') {
        if (btnType === 'link' && href) {
            return (
                <div style={{width, height, display: 'inline-block'}}>
                    <a
                        href={href}
                        className={classes}
                        {...restProps}
                        style={{
                            padding: 0,
                            display: 'block',
                            height: '100%',
                            lineHeight: height,
                        }}>
                        {children}
                    </a>
                </div>
            );
        } else {
            return (
                <button
                    className={classes}
                    {...restProps}
                    style={{width: block ? '100%' : width, height}}
                    disabled={disabled}>
                    {children}
                </button>
            );
        }
    }

    if (btnType === 'link' && href) {
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
    btnType: 'default',
    children: '确认',
};

export default Button;
