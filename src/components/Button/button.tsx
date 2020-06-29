/** @format */

/**
 * @fileOverview button按钮组件
 * @author: 炳健
 * @time: 2020-5-27
 */

import React, {FC, ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames';
//按钮的大小
export type ButtonSize = 'lg' | 'sm' | 'custom';

export type ButtonShape = 'circle'; //按钮类型

//按钮类型
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
    className?: string;
    /**设置禁用状态 */
    disabled?: boolean;
    /**设置按钮大小 */
    size?: ButtonSize;
    /**设置按钮的类型 */
    btnType?: ButtonType;
    /**添加按钮内部元素 */
    children?: React.ReactNode;
    /**设置按钮链接 (btnType为Link时必传) */
    href?: string;
    /**设置按钮宽度(size为custom时有效) */
    width?: string;
    /**设置按钮高度(size为custom时有效) */
    height?: string;
    /**按钮形状 不传为小圆角 */
    shape?: ButtonShape;
    /**将按钮宽度调整为其父宽度 */
    block?: Boolean;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
//Partial 使每一个数据都变为可选
export const Button: FC<ButtonProps> = props => {
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
