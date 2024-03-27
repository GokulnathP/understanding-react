import {useQuery} from "./hooks.tsx";

const Todo = () => {
  const {data, updateTodo} = useQuery((store) => store.todo.name)

  console.log("[Todo]")

  return (
    <>
      <p>todo: {data}</p>
      <button onClick={updateTodo}>update todo</button>
    </>
  )
}

export default Todo;