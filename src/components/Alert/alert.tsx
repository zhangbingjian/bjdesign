/** @format */

import React, {useRef, useState} from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';

interface BaseAlertProps {
    className?: string;
    message?: string; //提示的信息
    type?: AlertType; //提示的类型
    children?: React.ReactNode; //按钮内部元素
    closable?: boolean; //是否可关闭(默认不可)
    icon?: boolean; //是否显示icon图标
    onClose?: Function; //关闭的回调函数
    banner?: boolean; //是否用作顶部公告
}
//alert类型
export type AlertType = 'success' | 'info' | 'warning' | 'error';

const Alert: React.FC<BaseAlertProps> = props => {
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
    onClose: () => {
        console.log('关闭alert');
    },
};

export default Alert;
