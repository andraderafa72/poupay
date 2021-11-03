import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  width: 225px;
  height: 250px;
  background: var(--background-light);
  border-radius: 1rem;

  @media(max-width:1024px){
    min-width: 225px;
  }
`;