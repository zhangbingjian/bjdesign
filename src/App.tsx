/** @format */
import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
    return (
        <>
            <Button></Button>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Large}></Button>
            <Button href="http://www.baidu.com" btnType={ButtonType.Link} disabled></Button>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Large} disabled></Button>
        </>
    );
}

export default App;
