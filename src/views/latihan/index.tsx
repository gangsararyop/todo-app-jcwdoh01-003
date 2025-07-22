"use client";

import { useCounterStore } from "@/stores/counterStore";

const ChildComponent = () => {
  const count = useCounterStore((state) => state.count);

  return <h2>{count}</h2>;
};

// props -> properties
const LatihanView = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div className="w-fit mx-auto">
      <h1>Count : {count}</h1>

      <button className="border-2 p-2 cursor-pointer mt-4" onClick={decrement}>
        -
      </button>

      <button className="border-2 p-2 cursor-pointer mt-4" onClick={increment}>
        +
      </button>

      <ChildComponent />
    </div>
  );
};

export default LatihanView;
