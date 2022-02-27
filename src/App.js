import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Context from './context';
import Loader from './Loader';

import './index.scss';

function App() {
  const [todos, setTodos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);
  // Вторым параметром передаем массив - список завсисимостей, которые будут служить для того, чтобы отрабатовать данному колбэку. Но учитывая, что мы хотим, чтобы он сработал сразу, мы передаем пустой массив

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
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todo={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <h2 className="no-todos">No todos</h2>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
