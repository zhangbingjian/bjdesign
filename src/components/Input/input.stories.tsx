/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Input from './input';

const defaultInput = () => {
    return (
        <>
            <Input size="large" addonBefore="http://" addonAfter=".com" />
            <hr />
            <Input
                maxLength={5}
                value="1323123"
                onChange={() => {
                    console.log('改变了');
                }}
                addonBefore="https://"
                addonAfter=".com"
            />
            <hr />
            <Input maxLength={5} size="small" addonBefore="http://" addonAfter=".com" />
        </>
    );
};

storiesOf('Input', module).add('默认的Input', defaultInput);
