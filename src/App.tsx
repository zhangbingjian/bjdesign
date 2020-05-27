/** @format */
import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/button';

function App() {
    return (
        <>
            <span> </span>
            <Button
                onClick={() => {
                    alert('123');
                }}></Button>
            <span> </span>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Large}></Button>
            <span> </span>
            <Button btnType={ButtonType.Link} disabled></Button>
            <div>
                <Button btnType={ButtonType.Link}></Button>
            </div>
            <span> </span>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Large} disabled></Button>
            <span> </span>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Small} disabled></Button>
            <span> </span>
            <Button btnType={ButtonType.Danger} size={ButtonSize.Small}></Button>
            <span> </span>

            <Button size={ButtonSize.Custom} width="300px" height="50px"></Button>
            <span> </span>

            <Button
                onClick={() => {
                    alert('a');
                }}
                btnType={ButtonType.Link}
                size={ButtonSize.Custom}
                width="300px"
                height="50px"
                href="http://www.baidu.com"></Button>
            <span> </span>
        </>
    );
}

export default App;
