import {useState, useSyncExternalStore} from "react";
import {useStore} from "./use-store.tsx";
import StoreObserver from "./store-observer.ts";

export const useQuery = () => {
  const store = useStore();
  const [observer] = useState(() => new StoreObserver(store));

  useSyncExternalStore(observer.subscribe, () => observer.getCurrentResult());
  return observer.getTrackedResult();
}
