/** @format */

import React, {FC, createContext, useState} from 'react';
import Input from '../Input/input';
import classNames from 'classnames';
import Transition from '../Transition/transition';

interface AutoCompleteProps {}

const AutoComplete: FC<AutoCompleteProps> = props => {
    const [text, setText] = useState('');

    return (
        <>
            <div className="bj-autoComplete">
                <Input text={{text, setText}} />
                <Transition in={text.length !== 0} timeout={300} animation="zoom-in-top">
                    <div className="bj-candidate"></div>
                </Transition>
            </div>
        </>
    );
};

export default AutoComplete;
