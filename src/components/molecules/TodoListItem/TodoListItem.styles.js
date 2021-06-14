import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

export const TodoWrapper = styled(ViewWrapper)`
  max-width: 35rem;
  margin: 0;
  padding: 2.5rem;
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 400;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;
  }
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  top: -3rem;
  right: -2.5rem;

  button {
    margin-left: 1rem;
  }
`;
