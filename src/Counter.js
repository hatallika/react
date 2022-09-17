import React, {useState} from "react";
export function Counter(){
        const [count, setCount] = useState(0);
    const updateCount = ()=>{
        // setCount(count + 1);
        setCount((prevCount) => prevCount + 1);
    }
    return(
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>+1</button>
        </div>
    )
}

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: "Alexander"
        };
    }

    updateCount = () => {
        this.setState({count: 2, name: 'noname' },
        ()=>{console.log(this.state);
        });
    }

    render() {
        return(
            <div>
                <span className="name">{this.state.name}</span><br/>
                <span className="counter">{this.state.count}</span>
                <button className="counter-button" onClick={this.updateCount}>
                    Click!
                </button>
            </div>
        )
    }
}