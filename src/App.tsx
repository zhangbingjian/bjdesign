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
            <Alert type={AlertType.Success} closable>
                <span>1231231231231内容</span>
            </Alert>
            <hr />
            <Alert type={AlertType.Warning} closable />
            <hr />
            <Alert type={AlertType.Error} closable />
        </div>
    );
}

export default App;
