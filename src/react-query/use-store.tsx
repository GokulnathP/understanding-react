import {createContext, PropsWithChildren, useContext} from "react";
import Store from "./store.ts";

const StoreContext = createContext<Store | null>(null);

interface IStoreProviderProps extends PropsWithChildren {
  store: Store
}

export const StoreProvider = ({store, children}: IStoreProviderProps) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export const useStore = () => {
  const store = useContext(StoreContext);

  if (!store) throw Error("StoreProvider: store is not provided");

  return store;
}
