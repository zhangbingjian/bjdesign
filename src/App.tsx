/** @format */
import React from 'react';
import Button, {ButtonType, ButtonSize, ButtonShape} from './components/Button/button';

function App() {
    return (
        <div style={{paddingLeft: '300px'}}>
            <span> </span>
            <Button
                onClick={() => {
                    alert('123');
                }}
                width="200px">
                333
            </Button>
            <span> </span>
            <Button btnType={ButtonType.Promary} size={ButtonSize.Large}></Button>
            <span> </span>
            <Button btnType={ButtonType.Link} disabled></Button>
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
                width="300px"
                height="50px"
                href="http://www.baidu.com"></Button>
            <span> </span>
            <p>12</p>
            <Button btnType={ButtonType.Promary}>099</Button>
            <hr />
            <hr />
            <hr />
            <div style={{width: '500px', backgroundColor: '#ccc', height: '200px'}}>
                <Button btnType={ButtonType.Danger} block>
                    333
                </Button>
                <span>123</span>
            </div>
            <hr />
            <Button size={ButtonSize.Small} btnType={ButtonType.Danger} shape={ButtonShape.Circle}></Button>
            <Button
                size={ButtonSize.Large}
                btnType={ButtonType.Link}
                width={'300px'}
                height={'90px'}
                shape={ButtonShape.Circle}></Button>
        </div>
    );
}

export default App;
