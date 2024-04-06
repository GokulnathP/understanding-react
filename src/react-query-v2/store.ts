import Subscribable from "./subscribable.ts";

export interface ICounter {
  count: number;
}

export interface ITodo {
  name: string;
}

export interface IStore {
  counter: ICounter;
  todo: ITodo;
}

class Store extends Subscribable {
  private state: IStore = {
    counter: {count: 0},
    todo: {name: 'Understand React Query'}
  }

  get data() {
    return this.state;
  }

  increment = () => {
    this.state = {
      ...this.state,
      counter: { count: this.state.counter.count + 1 }
    };
    this.notify();
  }

  decrement = () => {
    this.state = {
      ...this.state,
      counter: { count: this.state.counter.count - 1 }
    };
    this.notify();
  }

  updateTodo = () => {
    this.state = {
      ...this.state,
      todo: { name: "Random" + Math.ceil(Math.random() * 100) }
    };
    this.notify();
  }
}

export default Store;