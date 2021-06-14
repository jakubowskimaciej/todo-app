import React from 'react';
import { Title } from '../../atoms/Title/Title';
import { Wrapper } from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Title>To-Do App</Title>
      <p>It is a 'Hello World' for React actually. </p>
    </Wrapper>
  );
};

export default Header;
