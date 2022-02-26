import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Context from './context';

import './index.scss';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, checked: false, title: 'Buy some bread' },
    { id: 2, checked: false, title: 'Buy some milk' },
    { id: 3, checked: false, title: 'Buy some mustard' },
  ]);

  const toggleTodo = (id) => {
    console.log(id);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    );
  };

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>TO-DO list</h1>
        <TodoList todo={todos} onToggle={toggleTodo} />
      </div>
    </Context.Provider>
  );
}

export default App;
