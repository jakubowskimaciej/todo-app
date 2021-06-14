import React, { useContext } from 'react';
import TodoListItem from '../../molecules/TodoListItem/TodoListItem';
import { Wrapper } from './TodoList.styles';
import { TodoContext } from '../../../providers/TodoProvider';

const TodoList = () => {
  const { todo } = useContext(TodoContext);

  return (
    <Wrapper>
      {todo.map((todoData, index) => (
        <TodoListItem
          title={todoData.title}
          description={todoData.description}
          key={index}
          id={index}
        />
      ))}
    </Wrapper>
  );
};

export default TodoList;
