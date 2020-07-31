/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import AutoComplete from './index';
import {action} from '@storybook/addon-actions';

const defaultAutoComplete = () => <AutoComplete></AutoComplete>;

storiesOf('AutoComplete', module).add('默认的AutoComplete', defaultAutoComplete);
