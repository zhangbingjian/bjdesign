/** @format */

/**
 * @fileOverview alert组件
 * @author: 炳健
 * @time: 2020-5-28
 */
import React, {FC, useRef, useState} from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';

interface BaseAlertProps {
    className?: string;
    /**Alert的标题 */
    message?: string;
    /**Alert的类型 ('success' | 'info' | 'warning' | 'error') */
    type?: AlertType;
    /**Alert内的信息 */
    children?: React.ReactNode;
    /**是否可关闭(默认不可关闭) */
    closable?: boolean;
    /**是否显示icon图标(默认不显示) */
    icon?: boolean;
    /**关闭的回调函数 */
    onClose?: Function;
    /**是否用作顶部公告 */
    banner?: boolean;
}
//alert类型
export type AlertType = 'success' | 'info' | 'warning' | 'error';

export const Alert: FC<BaseAlertProps> = props => {
    const [show, setShow] = useState(true);
    const {className, message, type, children, closable, onClose, icon, banner} = props;
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-${type}-icon`]: icon,
        [`alert-banner`]: banner,
    });
    const close = useRef(null);

    if (banner) {
        return (
            <>
                <Transition timeout={500} animation="zoom-in-top" in={show}>
                    <div className={classes} ref={close}>
                        {closable && (
                            <div
                                className="closed"
                                onClick={() => {
                                    onClose && onClose();
                                    setShow(false);
                                }}></div>
                        )}
                        <div className="message-line">{message}</div>
                        <div className="alert-children">{children}</div>
                    </div>
                </Transition>
            </>
        );
    }

    return (
        <>
            <Transition timeout={500} animation="zoom-in-top" in={show}>
                <div className={classes} ref={close}>
                    {closable && (
                        <div
                            className="closed"
                            onClick={e => {
                                setShow(false);
                                onClose && onClose(e);
                            }}></div>
                    )}
                    <div className="message-line">{message}</div>
                    <div className="alert-children">{children}</div>
                </div>
            </Transition>
        </>
    );
};

Alert.defaultProps = {
    message: 'this is a Alert',
    type: 'info',
    closable: false,
    banner: false,
};

export default Alert;
