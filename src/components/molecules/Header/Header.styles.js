import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  margin-top: 5rem;
  text-align: center;

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 300;
  }
`;
