/** @format */
import React from 'react';
// import Button, {ButtonType, ButtonSize, ButtonShape} from './components/Button/button';
import Alert, {AlertType} from './components/Alert/alert';

function App() {
    return (
        <div style={{width: '300px', margin: '100px'}}>
            <Alert
                type={AlertType.Info}
                message="123333"
                closable
                onClose={() => {
                    console.log(123);
                }}
            />
            <hr />
            <Alert type={AlertType.Success} icon closable>
                <span>1231231231231内容</span>
            </Alert>
            <hr />
            <Alert type={AlertType.Warning} closable />
            <hr />
            <Alert type={AlertType.Error} icon closable>
                qweqhweiuaiuenqwiu qweqhweiuaiuenqwiu qweqhweiuaiuenqwiu qweqhweiuaiuenqwiu qweqhweiuaiuenqwiu
                qweqhweiuaiu
            </Alert>
        </div>
    );
}

export default App;
