/** @format */

import '../src/styles/index.scss';
import React from 'react';
import {addDecorator, addParameters} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

const wrapperStyle: React.CSSProperties = {
    padding: '25px 30px',
};

const storyWrapper = (storyFn: any) => <div style={wrapperStyle}>{storyFn()}</div>;

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({
    info: {
        inline: true,
        header: false,
    },
});
