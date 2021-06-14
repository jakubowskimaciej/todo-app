import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 2rem;
  background-color: ${({ isSecondary }) =>
    isSecondary ? 'var(--color-danger)' : 'var(--color-apply)'};
  color: var(--color-white);
  font-weight: 300;
  border: none;
  border-radius: 5rem;
  margin-top: 2rem;
  box-shadow: 0 0.5rem 1rem -0.6rem var(--shadow);
`;
