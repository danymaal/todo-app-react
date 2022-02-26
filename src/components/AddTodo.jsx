import React, { useState } from 'react';
import './scss/AddTodo.scss';

const AddTodo = ({ onCreate }) => {
  const [inputData, setInputData] = useState('');

  const submited = (e) => {
    e.preventDefault();

    if (inputData.trim()) {
      onCreate(inputData);

      setInputData(' ');
    }
  };
  return (
    <form className="form" onSubmit={submited}>
      <input
        className="form__input"
        placeholder="Enter a todo"
        value={inputData}
        onChange={(event) => setInputData(event.target.value)}
      />
      <button className="form__button">Add</button>
    </form>
  );
};

export default AddTodo;
