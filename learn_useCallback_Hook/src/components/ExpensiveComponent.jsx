import React from 'react'
import { useEffect, useRef } from 'react';
import { useCallback, useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  // useRef to store the previous version of the function
  // so we can compare it with the new one after each render
  const previousFunction = useRef(null);

  // useCallback: memoizes the function
  // only recreates when count changes, not on every render
  const expensiveTask = useCallback((num) => {
    console.log("inside expensive task");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }, [count]); // dependency: count

  useEffect(() => {
    // compare previous function reference with current one
    if (previousFunction.current === expensiveTask) {
      console.log("function NOT re-created"); // same reference = memoized
    } else {
      console.log("function got re-created"); // new reference = count changed
    }

    // always update ref to latest version after comparison
    previousFunction.current = expensiveTask;

  }, [expensiveTask]);

  // useMemo: memoizes the result of calling expensiveTask
  // only recomputes when input changes
  const doubleValue = useMemo(() => expensiveTask(input), [input, expensiveTask]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="number"
        placeholder='Enter Number'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div>Double: {doubleValue}</div>
    </div>
  )
}

export default ExpensiveComponent