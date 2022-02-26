import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todo.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onChange={props.onToggle}  />
      ))}
    </ul>
  );
};

export default TodoList;
