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
import HardCalculator from "./03_usememo/01_hard-caculator";
import ComplexCalculator from "./03_usememo/02_complex-caculator";
import UseMemoComponent from "./03_usememo/03_performance-optimization";
import LocationComponent from "./03_usememo/04_object-type-problem";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-monorization";
import CallBackComponent from "./04_useCallback/03_composited-component";
import CounterRef from "./05_useRef/01_problem";
import UseRefCounter from "./05_useRef/02_resolve-as-useRef";
import LoginComponent from "./05_useRef/03_inputRef";


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
   {/* <ReducerFromControl/> */}
   {/* <HardCalculator/> */}
   {/* <ComplexCalculator/> */}
   {/* <UseMemoComponent/> */}
   {/* <LocationComponent/> */}
   {/* <CallBackProblem/> */}
   {/* <FunctionMemoization/> */}
   {/* <CallBackComponent/> */}
   {/* <CounterRef/> */}
   {/* <UseRefCounter/> */}
   <LoginComponent/>

   
    </>

  );
}

export default App;
