/** @format */

import React, {useRef, useState} from 'react';
import classNames from 'classnames';

interface BaseAlertProps {
    className?: string;
    message?: string; //提示的信息
    type?: AlertType; //提示的类型
    children?: React.ReactNode; //按钮内部元素
    closable: boolean; //是否可关闭(默认不可)
    icon?: boolean;
    onClose?: Function; //关闭的回调函数
}

export enum AlertType { //alert类型
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
}

const Alert: React.FC<BaseAlertProps> = props => {
    const [show, setShow] = useState(true);
    const {className, message, type, children, closable, onClose, icon} = props;
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
        [`alert-${type}-icon`]: icon,
    });
    const close = useRef(null);
    return (
        <>
            {show && (
                <div className={classes} ref={close}>
                    {closable && (
                        <div
                            className="closed"
                            onClick={() => {
                                setShow(false);
                                onClose && onClose();
                            }}></div>
                    )}
                    <div className="message-line">{message}</div>
                    <div className="alert-children">{children}</div>
                </div>
            )}
        </>
    );
};

Alert.defaultProps = {
    message: 'this is a Alert',
    type: AlertType.Info,
    closable: false,
    onClose: () => {
        console.log('关闭alert');
    },
};

export default Alert;
