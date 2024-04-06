import Subscribable from "./subscribable.ts";
import Store, {IStore} from "./store.ts";

class StoreObserver extends Subscribable {
  private readonly trackedFields: (keyof IStore)[] = [];
  private store: Store;
  private currentResult: IStore;

  constructor(store: Store) {
    super();
    this.store = store;
    this.currentResult = store.data;
  }

  protected onSubscribe = () => {
    this.store.subscribe(this.onStoreUpdate)
  }

  private onStoreUpdate = () => {
    const prevResult = this.currentResult;
    this.currentResult = this.store.data;

    const shouldNotify = () => {
      return Object.keys(this.currentResult).some(key => {
        const typedKey = key as keyof IStore;
        const changed = this.currentResult[typedKey] !== prevResult[typedKey]
        return changed && this.trackedFields.includes(typedKey)
      });
    }

    if(shouldNotify()) this.notify();
  }

  getCurrentResult = () => this.currentResult;

  getTrackedResult = () => {
    const trackedResult = {} as IStore;

    Object.keys(this.currentResult).forEach(key => {
      Object.defineProperty(trackedResult, key, {
        configurable: false,
        enumerable: true,
        get: () => {
          this.trackedFields.push(key as keyof IStore);
          return this.currentResult[key as keyof IStore];
        }
      });
    });

    return trackedResult;
  }
}

export default StoreObserver;
