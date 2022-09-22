import React, {useCallback, useEffect, useRef, /*useMemo,*/ useState} from "react";
export function Counter(props){
        const [count, setCount] = useState(0);
        const updateCount = ()=>{
            setCount(prevCount => prevCount + 1);
            //elem();
        };
        const changeCount = useCallback(()=>{
            setCount(0);
        }, []);

        // const elem = useMemo(
        //     ()=>props.hugeArray.find(el => el.show), [props.hugeArray]
        // );

        useEffect(()=>{
            console.log(count)
        }, [count])

    return(
        <div>
            <span className="counter">{count}</span>
            <button className="counter-button" onClick={updateCount}>Click!</button>
            <button className="counter-button" onClick={changeCount}>Change</button>
        </div>
    )
}

//этот дочерний компонент Example отображает стейт
function Child(props) {
    return (

        <span>State :{props.number}</span>
    )
}
//этот дочерний элемент Example вызывает callback функцию меняющую стейт

//Передает стейт и калбек функцию дочерним компонентам Child и Button
export function Example(props) {
    const [count, setCount] = useState(0);
    const changeCount = ()=>{
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div> component Example <br/>

            <Child number={count} />
            <Button onClick={changeCount} />
        </div>
    )

    function usePrevious(value){
        const ref = useRef();

        useEffect(() => {
            ref.current = value;
        },[value])

        return ref.current;
    }

    function Button() {
        const[count, setCount] = useState(0);
        const prevCount = usePrevious(count);

        useEffect(()=>{
            if(prevCount !== count) {
                console.log("Logic!")
            }
        }, [prevCount, count]);

        const changeCount = useCallback(()=>{
            setCount(1);
        }, [])
        return (
            <div className="button" onClick={changeCount}>
                Click me!
            </div>

        )
    }
}



