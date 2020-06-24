/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Alert from './alert';

const defaultAlert = () => <Alert>this is a Alert</Alert>;
const AlertSeveralType = () => (
    <>
        <Alert type="error">this is a Alert</Alert>
        <hr />
        <Alert type="info">this is a Alert</Alert>
        <hr />
        <Alert type="success">this is a Alert</Alert>
        <hr />
        <Alert type="warning">this is a Alert</Alert>
    </>
);
const canTurnOffAlert = () => {
    return (
        <>
            <Alert
                type="error"
                closable
                icon
                onClose={() => {
                    console.log('close Alert Callback');
                }}>
                Alert Text
            </Alert>
            <hr />
            <Alert
                type="info"
                closable
                icon
                onClose={() => {
                    console.log('close Alert Callback');
                }}>
                Alert Text
            </Alert>
            <hr />
            <Alert
                type="success"
                closable
                icon
                onClose={() => {
                    console.log('close Alert Callback');
                }}>
                Alert Text
            </Alert>
            <hr />
            <Alert
                type="warning"
                closable
                icon
                onClose={() => {
                    console.log('close Alert Callback');
                }}>
                Alert Text
            </Alert>
        </>
    );
};

const bringIcon = () => (
    <>
        <Alert type="error" icon>
            this is a Alert
        </Alert>
        <hr />
        <Alert type="info" icon>
            this is a Alert
        </Alert>
        <hr />
        <Alert type="success" icon>
            this is a Alert
        </Alert>
        <hr />
        <Alert type="warning" icon>
            this is a Alert
        </Alert>
    </>
);

storiesOf('Alert', module)
    .add('默认样式Button', defaultAlert)
    .add('Alert类型', AlertSeveralType)
    .add('带着icon的Alert', bringIcon)
    .add('可以关闭的Alert', canTurnOffAlert);
