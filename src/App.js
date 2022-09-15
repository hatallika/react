import './App.css';
import Message from "./Message";

function App() {
    const name = 'Natalya';
    return (
        <header className="App-header">
            <h1>Добро пожаловать!</h1>
            <div>
                <Message name={name}/>
            </div>
            <div className="screen">
                <a href="./img/react_dev_tools.png"  target="_blank">Screen React dev tools</a>
            </div>
        </header>

  );
}

export default App;
