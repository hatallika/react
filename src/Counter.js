import React, {useEffect, useState} from "react";
export function Counter(){
        const [count, setCount] = useState(0);
        const updateCount = ()=>{
            setCount((prevCount) => prevCount + 1);
        };

        useEffect(()=>{
            console.log(count)
        }, [count])

    return(
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>

        </div>
    )
}

export function Example(props){
    const {name} = props.name;

    useEffect(()=>{
        console.log('like didMount');
    }, []);

    useEffect(()=>{
        console.log(('like didUpdate'));
    })

    useEffect(()=>{
        return ()=>{
            console.log(('like willUnmount'));
        }

    }, []);

    return (
        <div> {name} </div>
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

