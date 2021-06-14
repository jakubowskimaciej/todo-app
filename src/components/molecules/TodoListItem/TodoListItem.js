import React, { useContext } from 'react';
import { TodoContext } from '../../../providers/TodoProvider';
import { Button } from '../../atoms/Button/Button';
import { ButtonsWrapper, TodoWrapper } from './TodoListItem.styles';

const TodoListItem = (props) => {
  const { handleTodoDelete } = useContext(TodoContext);

  return (
    <TodoWrapper>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <ButtonsWrapper>
        <Button isSecondary onClick={() => handleTodoDelete(props.id)}>
          <i className="far fa-trash-alt" style={{ fontSize: '1.75rem' }}></i>
        </Button>
      </ButtonsWrapper>
    </TodoWrapper>
  );
};

export default TodoListItem;
