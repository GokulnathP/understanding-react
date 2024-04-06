import {useQuery} from "./hooks.tsx";
import {useStore} from "./use-store.tsx";

const Counter = () => {
  const { counter } = useQuery();
  const { increment, decrement } = useStore();

  console.log("[Counter]")

  return (
    <div>
      <p>count is {counter.count}</p>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default Counter;
