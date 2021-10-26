import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  height: 3rem;
  width: 200px;
  color: var(--text-light);
  font-weight: normal;
  background: var(--blue-500);
  border: none;
  border-radius: 1rem;
  font-size: 1rem;

  &:hover{
    filter: brightness(.9);
  }
`; 