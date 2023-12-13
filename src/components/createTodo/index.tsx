import { FC } from "react";

const CreateTodo:FC<any> = ({ onCreate }): JSX.Element => {
  const handleSubmit = (e:any) => {
    e.preventDefault();

    const title = e.target.todo.value;

    if (e.target.todo.value) {
      onCreate((prevTodos: any) => [
        ...prevTodos, {
          title,
          completed: false,
          id: Date.now()
        }
      ]);

      e.target.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input placeholder="New todo" name="todo" />
      <input type="submit" value="Add Todo" />
    </form>
  )
}

export default CreateTodo;
