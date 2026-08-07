import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement,reset,incrementByAmount} from "./features/counter/counterSlice";

function App() {
  //now we wont use useState to manage state of count variable rather we will use the value in counterslice file using useSelector Hook

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount,setAmount]=useState(0);

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleReset(){
    dispatch(reset());
  }
    function handleIncAmountClick(){
      // amount is a payload here
    dispatch(incrementByAmount(amount));
  }

  return (
    <div className="container">
  <div className="counter">

    <h2 className="count">Count: {count}</h2>

    <div className="buttons">
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleIncrementClick}>+</button>
    </div>

    <button className="reset-btn" onClick={handleReset}>
      Reset
    </button>

    <input
      type="number"
      value={amount}
      placeholder="Enter Amount"
      onChange={(e) => setAmount(Number(e.target.value))}
    />

    <button className="amount-btn" onClick={handleIncAmountClick}>
      Increment By {amount}
    </button>

  </div>
</div>
  );
}

export default App;