/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Input from './input';

const defaultInput = () => {
    return (
        <>
            <Input maxLength={5} size="large" />
            <hr />
            <Input
                maxLength={5}
                onChange={() => {
                    console.log('输入了');
                }}
            />
            <hr />
            <Input maxLength={5} size="small" />
        </>
    );
};

storiesOf('Input', module).add('默认的Input', defaultInput);
