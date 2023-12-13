import { FC } from 'react'
import { Reorder, AnimatePresence} from 'framer-motion'

const variants = {
  initial: {
    opacity: 0,
    height: 0,
  },
  animate: {
    opacity: 1,
    height: 'auto',
  },
  exit: {
    opacity: 0,
    height: 0,
  },
}

const Todos: FC<any> = ({ todos = [], setTodos, onRemove }): JSX.Element => {
  return (
    <Reorder.Group as="ol" values={todos} onReorder={setTodos}>
      <AnimatePresence initial={false}>
      {todos.map((todo: any) => (
        <TodoItem key={todo.id} todo={todo} onRemove={onRemove}/>
      ))}
      </AnimatePresence>
    </Reorder.Group>
  )
}

const TodoItem = ({ todo, onRemove }: any) => {
  return (
    <Reorder.Item
      value={todo}
      whileDrag={{
        scale: 1.1,
        boxShadow:
          'rgba(0,0,0,0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
      
        }}
        onDoubleClick={()=>onRemove(todo.id)}
        {...variants}
    >
      <span>{todo.title}</span>
    </Reorder.Item>
  )
}

export default Todos
