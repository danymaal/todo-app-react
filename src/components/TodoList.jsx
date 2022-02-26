import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul>
      {props.todo.map((todo, idx) => (
        <TodoItem todo={todo} key={todo.id} idx = {idx} onChange={props.onToggle}  />
      ))}
    </ul>
  );
};

export default TodoList;
