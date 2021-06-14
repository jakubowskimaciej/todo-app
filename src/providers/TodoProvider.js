import React, { useState } from 'react';

export const TodoContext = React.createContext({
  todo: [],
  handleTodoAdd: () => {},
  handleTodoDelete: () => {},
});

const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);

  const handleTodoAdd = (formValues) => {
    const newTodo = {
      title: formValues.title,
      description: formValues.description,
    };
    setTodo([...todo, newTodo]);
  };

  const handleTodoDelete = (id) => {
    console.log(id);
    setTodo((prevState) => {
      return prevState.filter((item, index) => {
        return id !== index;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        handleTodoAdd,
        handleTodoDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
