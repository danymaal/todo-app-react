import React, { useState } from 'react';
import './scss/AddTodo.scss';

// Custom hook
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue('');

  //   const [inputData, setInputData] = useState('');

  const submited = (e) => {
    e.preventDefault();

    // Default method
    // if (inputData.trim()) {
    //   onCreate(inputData);
    //   setInputData(' ');
    // }

    // For custom hook
    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
      // setInputData(' ');
    }
  };
  return (
    <form className="form" onSubmit={submited}>
      <input
        className="form__input"
        placeholder="Enter a todo"
        // value={inputData}
        // onChange={(event) => setInputData(event.target.value)}
        {...input.bind}
      />
      <button className="form__button">Add</button>
    </form>
  );
};

export default AddTodo;
