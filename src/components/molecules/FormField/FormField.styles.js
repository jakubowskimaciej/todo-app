import styled from 'styled-components';
import { Label } from '../../atoms/Label/Label';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 1rem 0;
  }

  textarea {
    min-width: 100%;
    max-width: 100%;
    font-family: inherit;
  }
`;
