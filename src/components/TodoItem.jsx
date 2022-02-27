import React, { useContext } from 'react';
import '../components/scss/TodoItem.scss';
import Context from '../context';

const TodoItem = ({ todo, onChange, idx }) => {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push('done');
  }

  return (
    <li className="todo">
      <span className={classes.join(' ')}>
        <input className="todo__input" type="checkbox" onChange={() => onChange(todo.id)} checked ={todo.completed} />
        <strong>{idx + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="todo__button" onClick={() => removeTodo(todo.id)}>
        {/* &#10005; */}
        Delete
      </button>
      {/* Функция удаления принимает в себя айди поэтому мы можем вызвать колбэк () => removeTodo(todo.id)  */}
    </li>
  );
};

export default TodoItem;
