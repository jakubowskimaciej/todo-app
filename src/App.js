import React from 'react';
import styled from 'styled-components';
import Header from './components/molecules/Header/Header';
import Form from './components/organisms/Form/Form';
import TodoList from './components/organisms/TodoList/TodoList';
import TodoProvider from './providers/TodoProvider';

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const App = () => {
  return (
    <Wrapper>
      <TodoProvider>
        <Header />
        <Form />
        <TodoList />
      </TodoProvider>
    </Wrapper>
  );
};

export default App;
