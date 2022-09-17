import React, {useState} from "react";
export function Counter(){
        const [value, setValue] = useState('');
        const handleChange = (event)=> {
            setValue(event.target.value);
        }
    return(
        <div>
            <input type="text" value={value} onChange={handleChange}/>

        </div>
    )
}

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        console.log('ComponentDidMount');
    }

    render() {
        console.log('render')
        return(
            <div>
                rendered!
                <Child/>
            </div>
        )
    }
}
class Child extends React.Component {
    constructor(props) {
        super(props);

        console.log("child constructor");
    }

    componentDidMount() {
        console.log("child componentDidMount");
    }

    render() {
        console.log("child render")
        return <div>child rendered!</div>
    }
}