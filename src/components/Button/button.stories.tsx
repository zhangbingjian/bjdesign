/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Button from './button';

const defaultButton = () => <Button onClick={action('clickButton')}></Button>;

const buttonWhitSize = () => (
    <>
        <Button onClick={action('clickButton')} size="lg">
            large button
        </Button>
        <Button onClick={action('clickButton')} size="sm">
            Small button
        </Button>
        <Button onClick={action('clickButton')} size="custom" width="300px" height="70px">
            Custom button
        </Button>
    </>
);

const buttonWhitType = () => (
    <>
        <Button onClick={action('clickButton')} btnType="default">
            default button
        </Button>
        <Button onClick={action('clickButton')} btnType="danger">
            danger button
        </Button>
        <Button onClick={action('clickButton')} href="/" btnType="link">
            link button
        </Button>
        <Button onClick={action('clickButton')} btnType="primary">
            primary button
        </Button>
    </>
);

const buttonWhitConfig = () => (
    <>
        <Button onClick={action('clickButton')} btnType="default" block>
            block button
        </Button>
        <Button onClick={action('clickButton')} btnType="default" shape="circle">
            largeRoundedCorners button
        </Button>
    </>
);

storiesOf('Button Component', module)
    .add('默认样式Button', defaultButton)
    .add('Button大小', buttonWhitSize)
    .add('Button类型', buttonWhitType)
    .add('Button杂项', buttonWhitConfig);
