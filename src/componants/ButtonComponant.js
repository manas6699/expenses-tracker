import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
//   const reset = () =>{
//     setCounter(0)
//   }
 
  return (
    <div className="counter">
      
      <h1 className="counter__output">Cart Item = {counter}</h1>
      <div className="btn__container">
      <i className="fa-solid fa-plus" onClick={increase}></i>
      <i className="fa-solid fa-circle-minus my-4 mx-4" onClick={decrease}></i>
        
        {/* <button className="reset" onClick={reset}>Reset</button> */}
      </div>
    </div>
  );
}