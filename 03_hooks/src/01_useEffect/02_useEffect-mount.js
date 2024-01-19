
import { useEffect, useState } from "react";

const UseEffectBasic2 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [message, setMessage] = useState("");

  useEffect(() => {
    console.log("마운트 시작점에만 동작함");

    // Cleanup function (optional)
    return () => {
      console.log("컴포넌트 언마운트 시 정리 작업");
    };
  }, []); // 두 번째 인자로 빈 배열을 넣으면 컴포넌트가 처음 마운트될 때만 실행됨

  return (
    <>
      <button onClick={() => setTime(new Date().toLocaleTimeString())}>
        현재 시간 확인하기
      </button>
      <h1>{time}</h1>
    </>
  );
};

export default UseEffectBasic2;
