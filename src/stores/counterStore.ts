import { create } from "zustand";

interface CounterStore {
  count: number;
  name: string;
  increment: () => void;
  decrement: () => void;
}

export const useCounterStore = create<CounterStore>((set) => {
  return {
    // State
    count: 0,
    name: "",

    // Action
    increment: () => {
      return set((state) => {
        return { ...state, count: state.count + 1 };
      });
    },
    decrement: () => {
      return set((state) => {
        return { ...state, count: state.count - 1 };
      });
    },
  };
});
