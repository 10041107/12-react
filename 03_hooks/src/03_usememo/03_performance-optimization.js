import { useMemo, useState } from "react";

const hardCalculator = (num) =>{
    console.log("어려운 계산기");

    for(let i = 0; i < 199999; i++){

    }
    return num + 10000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기");
    return num +10000;
}

const UseMemoComponent = () =>{
    const [hardNumber, setHardNumber] = useState(0);
    const [easyNumber, setEasyNumber] = useState(0);

    const hardSum = useMemo(() => {
        return hardCalculator(hardNumber);
    }, [hardNumber]);

    const easySum = useMemo(() => {
        return easyCalculator(easyNumber);
    }, [easyNumber]);

    return(
        <>
        <h3>어려운 계산기</h3>
        <input
            type="number"
            value={hardNumber}
            onChange={e => setHardNumber (parseInt(e.target.value))}
            />
            <span> +10000 = {hardSum}</span>

            <h3>쉬운 계산기</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={e => setEasyNumber (parseInt(e.target.value))}
            />
            <span> +10000 = {easySum}</span>
        </>
    );
}

export default UseMemoComponent;