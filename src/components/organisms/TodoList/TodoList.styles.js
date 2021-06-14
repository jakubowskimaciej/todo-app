import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 35rem));
  place-content: space-between space-evenly;
  align-items: start;
  padding: 4rem;
  gap: 6rem;
`;
