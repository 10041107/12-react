import { useState, useRef } from "react";

const UseRefCounter = () => {
    console.log("useRefCounter 렌더링됨");

    const [count,setCount] = useState(0);

    const countRef = useRef(0);

    const variable = useRef(0);


    const increaseCount = () => {
        setCount(count+1);
    }

    const increaseVariable = () => {
        variable.current += 1;
        console.log("variable : " + variable.current);
    }
    


    const increaseCountRef = () => {
        countRef.current = countRef.current+1;
        console.log("countRef : " + countRef.current);
    }

    return (
        <>
        <h1>counter : {count}</h1>
        <h1>variable : {variable}</h1>
        <h1>countRef : {countRef.current}</h1>
        <button onClick={increaseCount}> 카운트 증가</button>
        <button onClick={increaseVariable}> variable 증가</button>
        <button onClick={increaseCountRef}> 카운트Ref 증가</button>

        </>
    )
}

export default UseRefCounter;