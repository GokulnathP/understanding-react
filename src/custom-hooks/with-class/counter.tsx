import CounterState from "./counter-state.ts";
import {useMemo, useSyncExternalStore} from "react";

const Counter = () => {
  const counterState = useMemo(() => new CounterState(), []);
  useSyncExternalStore(counterState.subscribe, () => counterState.count)

  const {count, increment, decrement} = counterState;

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default Counter;
