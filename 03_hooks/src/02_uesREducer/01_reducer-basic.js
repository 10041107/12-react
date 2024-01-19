import React, { useReducer, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const minus = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={minus}>-1</button>
    </>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DECREMENT":
      return { value: state.value - 1 };
    case "INCREMENT":
      return { value: state.value + 1 };
    default:
      return state;
  }
};

const UseReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h1>Counter: {state.value}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
    </>
  );
};

export default UseReducerBasic;
