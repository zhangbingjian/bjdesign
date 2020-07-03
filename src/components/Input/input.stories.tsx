/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Input from './input';

const defaultInput = () => {
    return (
        <>
            <Input />
        </>
    );
};

const differentSizeInput = () => {
    return (
        <>
            <Input size="large" />
            <br />
            <Input size="middle" placeholder="请输入" />
            <br />
            <Input size="small" />
        </>
    );
};

const beforeAfterTag = () => {
    return (
        <>
            <Input addonBefore={<div>http://</div>} addonAfter={'.com'} />
            <br />
            <Input
                addonBefore={<div>http://</div>}
                addonAfter={'.com'}
                placeholder="请输入网址"
                onChange={() => {
                    console.log('改变了');
                }}
                onPressEnter={() => {
                    console.log('回车执行回调');
                }}
            />
        </>
    );
};

storiesOf('Input', module)
    .add('默认的Input', defaultInput)
    .add('不同大小的Input', differentSizeInput)
    .add('带前后标签的Input', beforeAfterTag);
