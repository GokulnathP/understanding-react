import Store from "./store.ts";
import {StoreProvider} from "./use-store.tsx";
import Counter from "./counter.tsx";
import Todo from "./Todo.tsx";

const store = new Store();

const ReactQuery = () => {
  return (
    <StoreProvider store={store}>
      <Counter />
      <Todo />
      <Counter />
    </StoreProvider>
  );
}

export default ReactQuery;
