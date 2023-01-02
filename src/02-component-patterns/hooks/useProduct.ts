import { useState } from "react";

const useProduct = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = (val: number) => {
    setCounter(prev => Math.max(prev + val, 0))
  }
  return {
    counter,
    handleCounter,
  }
}

export default useProduct;

