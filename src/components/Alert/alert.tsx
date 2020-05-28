/** @format */

import React, {useRef} from 'react';
import classNames from 'classnames';

interface BaseAlertProps {
    className?: string;
    message?: string;
    title?: string;
    type?: AlertType;
    children?: React.ReactNode; //按钮内部元素
    closable: boolean; //是否可关闭(默认不可)
    onClose?: Function;
}

export enum AlertType { //alert类型
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
    Error = 'error',
}

const Alert: React.FC<BaseAlertProps> = props => {
    const {className, title, message, type, children, closable, onClose} = props;
    const classes = classNames('alert', className, {
        [`alert-${type}`]: type,
    });
    const close = useRef(null);
    return (
        <>
            <div className={classes} ref={close}>
                {closable && (
                    <div
                        className="closed"
                        onClick={() => {
                            onClose && onClose();
                        }}></div>
                )}
                <div>{message}</div>
                <div className="alert-children">{children}</div>
            </div>
        </>
    );
};

Alert.defaultProps = {
    message: 'this is a Alert',
    type: AlertType.Info,
    closable: false,
    onClose: () => {
        alert('关闭Alert');
    },
};

export default Alert;
