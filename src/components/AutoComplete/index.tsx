/** @format */

import React, {FC, createContext, useState, useEffect} from 'react';
import Input from '../Input/input';
import classNames from 'classnames';
import Transition from '../Transition/transition';

interface AutoCompleteProps {
    style?: React.CSSProperties;
    fetchSuggestions: Array<any>;
    onSelect?: (item: any) => void;
}

const AutoComplete: FC<AutoCompleteProps> = props => {
    const {fetchSuggestions, style, onSelect} = props;
    const [text, setText] = useState('');
    return (
        <>
            <div className="bj-autoComplete" style={style}>
                <Input text={{text, setText}} value={text} />
                <Transition
                    in={
                        text.length !== 0 &&
                        !fetchSuggestions.some(item => {
                            return item === text;
                        })
                    }
                    timeout={300}
                    animation="zoom-in-top">
                    <div className="bj-candidate">
                        {fetchSuggestions
                            .filter(item => item.includes(text))
                            .map((item, i) => {
                                if (text === '') return;
                                return (
                                    <div
                                        className="candidate-item"
                                        key={`${item}${i}`}
                                        onClick={() => {
                                            setText(item);
                                            onSelect && onSelect(item);
                                        }}>
                                        {item}
                                    </div>
                                );
                            })}
                    </div>
                </Transition>
            </div>
        </>
    );
};

export default AutoComplete;
