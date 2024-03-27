type Listener = () => void

class Observer {
  private listeners: Listener[] = [];

  subscribe = (listener: Listener) => {
    this.listeners.push(listener);

    return () => {
      this.listeners = this.listeners.filter(fn => fn !== listener)
    }
  }

  protected notify() {
    this.listeners.forEach(listener => listener());
  }
}

class CounterState extends Observer {
  private value = 0

  get count() {
    return this.value;
  }

  increment = () => {
    this.value += 1;
    this.notify();
  }

  decrement = () => {
    this.value -= 1;
    this.notify();
  }
}

export default CounterState;