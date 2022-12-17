import { useState } from "react";
const Counter = () => {
   const [count,setCount] = useState(0);
   const handleInc = () => {
      setCount((prev) => prev + 1);
   }
   const handleDec = () => {
      setCount((prev) => prev - 1);
   }
   return (
      <>
         <h3>Counter Example</h3>
         <button data-testid="increment" onClick={handleInc}>+</button>
         <span data-testid="counter">{count}</span>
         <button data-testid="decrement" onClick={handleDec}>-</button>
      </>
   )
}
export default Counter;