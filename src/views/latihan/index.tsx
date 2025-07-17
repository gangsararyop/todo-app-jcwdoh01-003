"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import useCounter from "./hooks/useCounter";

const Component2 = () => {
  return <Component3 />;
};

const Component3 = () => {
  return <Component4 />;
};

const Component4 = () => {
  return <Component5 />;
};

const Component5 = () => {
  return <Component6 />;
};

const Component6 = () => {
  const data = useContext<{ count: number }>(LatihanViewContext);

  return <div>Counte dari component 3 : {data.count}</div>;
};

const LatihanViewContext = createContext<{ count: number }>({
  count: 0,
});

// Regular Function
const testOke = () => {
  //   const [count, setCount] = useState(0);
};

// Custom Hooks
const useTest = () => {
  const [count, setCount] = useState(0);
};

const LatihanView = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const { count, increment, decrement } = useCounter();

  return (
    <div ref={ref} className="w-fit mx-auto">
      <h1>Count : {count}</h1>

      <button className="border-2 p-2 cursor-pointer mt-4" onClick={increment}>
        +
      </button>
      <button className="border-2 p-2 cursor-pointer mt-4" onClick={decrement}>
        -
      </button>

      <LatihanViewContext.Provider value={{ count: count }}>
        <Component2 />
      </LatihanViewContext.Provider>
    </div>
  );
};

export default LatihanView;
