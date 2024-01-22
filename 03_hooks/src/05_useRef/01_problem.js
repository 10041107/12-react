import { useState } from "react"

const CounterRef = () => {
    const [Counter, setCounter] = useState(0);

    console.log("counter렌더링됨");

    const increseCount = () => {
        setCounter(Counter+1);
    }

    // const value = document.querySelector("#a");

    return(
        <>
        <h1>Counter : {Counter} </h1>
        <button onClick={increseCount}>카운트 증가</button>
        </>
    )
}

export default CounterRef;