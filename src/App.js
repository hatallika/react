import './App.scss';

import Message from "./Message";
import {Counter, CounterClass, Example} from "./Counter";

function App(props) {


    const name = 'Natalya';
    return (
        <header className={`App-header ${props.showRed ? 'header-red' : 'header-blue'}`}
                style={{top: props.topPosition || `15px`}}>
            <h1>Добро пожаловать!</h1>
            <div>
                <Message name={name}/>
            </div>
            <div className="screen">
                <a href="./img/react_dev_tools.png"  target="_blank">Screen React dev tools</a>
            </div>
            <div>
                <Counter />
            </div>
            <div>
                <Example name = {name}/>
            </div>
        </header>
  );
}

export default App;
