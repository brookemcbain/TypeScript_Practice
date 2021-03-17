import React from "react";
import { TodoListItem } from "./TodoListItem";
import { useState } from "react";

const initialTodos: Array<Todo> = [
  { text: "walk the dog", complete: true },
  { text: "write app", complete: false },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <React.Fragment>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
};

export default App;
