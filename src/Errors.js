import React, {useCallback, useState} from "react";
export function Example(props) {
    const badIdea = () => {
        const err = useCallback(() => {
// вызовет ошибку
        }, [])
    }
    for (let i = 0; i < 10; i++) {
// вызовет ошибку
        const res = useMemo(() => null, []);
    }
    if (!props.show) {
        return null
    }
// ошибка!
    const dont = useRef(null);
    return (
        <div>
            Hooks
        </div>
    )
}
function Button(props) {
    const [count, setCount] = useState(0);
    const changeCount = useCallback(() => {
// здесь переменная count всегда равна 0,
// т.к. коллбэк не обновляется при ее изменении
        console.log(count);
    }, []);
    const changeCountCorrect = useCallback(() => {
// здесь переменная count всегда актуальна,
        console.log(count);
    }, [count]);
    return (
        <div className="button" onClick={props.onClick}>Click!</div>
    )
}
