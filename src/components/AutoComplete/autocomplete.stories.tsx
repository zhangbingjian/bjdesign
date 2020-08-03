/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import AutoComplete from './index';
import {action} from '@storybook/addon-actions';

const defaultAutoComplete = () => (
    <div style={{height: '200px'}}>
        <AutoComplete
            fetchSuggestions={['cde', 'edf']}
            onSelect={item => {
                console.log(item);
            }}></AutoComplete>
    </div>
);

storiesOf('AutoComplete', module).add('默认的AutoComplete', defaultAutoComplete);
