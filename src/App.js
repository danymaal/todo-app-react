import React, { useState } from 'react';
import AddTodo from './components/AddTodo';
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

  function addTodo(title) {
    setTodos(todos.concat([{ title, id: Date.now(), checked: false }]));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="heading">TO-DO list</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todo={todos} onToggle={toggleTodo} />: 'No todos yet'}
      </div>
    </Context.Provider>
  );
}

export default App;
