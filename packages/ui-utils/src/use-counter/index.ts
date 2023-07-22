import { useState } from "react";

export const useCounter = (initialValue: number) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  return { count, increment, decrement };
};
