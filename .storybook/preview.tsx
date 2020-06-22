/** @format */

import '../src/styles/index.scss';
import React from 'react';
import {addDecorator} from '@storybook/react';

const styles: React.CSSProperties = {
    textAlign: 'center',
};

const centerDecorater = (storyFn: any) => {
    return <div style={styles}>{storyFn()}</div>;
};
addDecorator(centerDecorater);
