import { useState } from "react";

/*
목적: 많은 연산이 수행되는 문제로 인해 화면에 렌더린이 늦어진다.
의문: 그렇다면 setTimeout으로 루프를 막아버리면? 
*/
const hardCalculator = (num) => {
    /*
    event loop는 영향을 받지 않는다.
    react는 자식 요소에 promise객체를 가질 수 없다.
    setTImeout(() => {return 19999}, 3000);
    */

    setTimeout (() =>(console.log("타임아웃 종료")), 3000 )
    return num = +1999999;

  };

  const HardCalculator = () => {

    const [hardNumber, setHardNumber] = useState(0);

    const hardSum = hardCalculator(hardNumber);

  return (
    <>
      <h3> 어려운 계산 </h3>
      <input
        type="number"
        value={hardNumber}
        onChange={ e => setHardNumber(parseInt(e.target.value))}
      />
      <span>+1999999 = {hardSum}</span>
    </>
  );
  }

export default HardCalculator;