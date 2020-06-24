/** @format */

import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import Icon from './icon';

const defaultIcon = () => (
    <>
        <Icon icon="info" size="1x" />
        <hr />
        <Icon icon="check" size="2x" />
        <hr />
        <Icon icon="anchor" size="3x" />
        <hr />
        <Icon icon="trash" size="4x" />
    </>
);
const IconTheme = () => (
    <>
        <Icon icon="info" size="1x" theme="dark" />
        <hr />
        <Icon icon="check" size="2x" theme="info" />
        <hr />
        <Icon icon="anchor" size="3x" theme="warning" />
        <hr />
        <Icon icon="trash" size="4x" theme="success" />
    </>
);
storiesOf('Icon', module)
    .addParameters({
        info: {
            text: (
                <div>
                    <h5>提供了一套常用的图标集合 基于 react-fontawesome。</h5>
                    <h6>
                        支持 react-fontawesome的所有属性可以在这里查询{' '}
                        <a href="https://github.com/FortAwesome/react-fontawesome#basic">
                            https://github.com/FortAwesome/react-fontawesome#basic
                        </a>
                    </h6>
                    <h6>
                        支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标
                        <a href="https://fontawesome.com/icons?d=gallery&s=solid&m=free">
                            https://fontawesome.com/icons?d=gallery&s=solid&m=free
                        </a>
                    </h6>
                </div>
            ),
        },
    })
    .add('icon', defaultIcon)
    .add('不同主题的Icon', IconTheme);
