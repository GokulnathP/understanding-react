import {useQuery} from "./hooks.tsx";
import {useStore} from "./use-store.tsx";

const Todo = () => {
  const { todo } = useQuery();
  const { updateTodo } = useStore();

  console.log("[Todo]")

  return (
    <>
      <p>todo: {todo.name}</p>
      <button onClick={updateTodo}>update todo</button>
    </>
  )
}

export default Todo;