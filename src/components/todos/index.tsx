import { FC } from "react"

const Todos:FC<any> = ({todos = []}):JSX.Element => {

  return (
    <ol>
      {todos.map((todo:any)=> (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ol>
  )
}

const TodoItem = ({ todo }: any) => {
  return (
    <li>
      <span>{todo.title}</span>
    </li>
  )
}

export default Todos;