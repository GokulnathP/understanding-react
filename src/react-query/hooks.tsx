import {useSyncExternalStore} from "react";
import {IStore} from "./store.ts";
import {useStore} from "./use-store.tsx";

const defaultSelect = (data: IStore) => data;

export const useQuery = <T = IStore, >(select?: (data: IStore) => T) => {
  const store = useStore();
  const {increment, decrement, updateTodo} = store;

  const selector = select ?? defaultSelect;
  const data = useSyncExternalStore(store.subscribe, () => selector(store.data)) as T;

  return {data, increment, decrement, updateTodo};
}
