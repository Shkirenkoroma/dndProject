import { FC, useState } from 'react';
import './App.css';
import CreateTodo from './components/createTodo';
import Todos from './components/todos';

const defaultTodos = [
  {id: 1, title: 'Learn Framer Motion', completed: false},
  {id: 2, title: 'Create nice animation', completed: false},
  {id: 3, title: 'Use Reorder component', completed: false}
]

const App:FC = (): JSX.Element =>  {
  const [ todos, setTodos] = useState(defaultTodos);

  const onRemove = (id: any):void => {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  return (
    <div className="App">
     <CreateTodo onCreate={setTodos} />
     <Todos todos={todos} setTodos={setTodos} onRemove={onRemove}/>
    </div>
  );
}

export default App;
