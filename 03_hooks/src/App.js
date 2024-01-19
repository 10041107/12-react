import React, { useState } from 'react'; 
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectBasic2 from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import UseEffectCleanUp from "./01_useEffect/04_useEffect-cleanup";
import { Container } from './01_useEffect/05_useEffect-cleanup-example';
import Quiz from "./example/quiz";
import Counter from "./02_uesREducer/01_reducer-basic";
import UseReducerBasic from "./02_uesREducer/01_reducer-basic";
import ReducerFromControl from "./02_uesREducer/02_reducer-form-control";

function App() {
  const[message, setMessage] = useState("안녕하세요~");

  return (
    <>
   {/*<UseEffectBasic message = {message}/>*/}
   {/* <UseEffectBasic/> */}
   {/* <UseEffectUpdate/> */}
   {/* <UseEffectCleanUp/> */}
   {/* <Container/> */}
   {/* <Quiz/> */}
   {/* <Counter/>
   <UseReducerBasic/> */}
   <ReducerFromControl/>
   
    </>

  );
}

export default App;
