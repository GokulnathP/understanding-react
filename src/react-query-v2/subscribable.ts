type Listener = () => void

class Subscribable {
  private listeners: Listener[] = [];

  subscribe = (listener: Listener) => {
    this.listeners.push(listener);
    this.onSubscribe();

    return () => {
      this.listeners = this.listeners.filter(fn => fn !== listener);
      this.onUnSubscribe();
    }
  }

  protected notify = () => {
    this.listeners.forEach(listener => listener());
  }

  protected onSubscribe = () => {}

  protected onUnSubscribe = () => {}
}

export default Subscribable;
