import useCounter from "./use-counter.tsx";

const Counter = () => {
  const {count, increment, decrement} = useCounter();

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default Counter;
