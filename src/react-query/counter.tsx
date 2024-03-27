import {useQuery} from "./hooks.tsx";
import {IStore} from "./store.ts";

const selectCount = (store: IStore) => store.counter.count;

const Counter = () => {
  const {data, increment, decrement} = useQuery(selectCount);

  console.log("[Counter]")

  return (
    <div>
      <p>count is {data}</p>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
    </div>
  );
};

export default Counter;
