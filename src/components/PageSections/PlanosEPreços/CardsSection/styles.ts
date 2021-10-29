import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 5rem auto 7rem;
  padding: 2rem;

  h2,p{
    max-width:550px;
  }

  h2{
    font-size: 2.25rem;
  }

  p{
    color: var(--text-body);
  }

  .card-wrapper{
    margin-top: 3rem;
    display: flex;
    gap: 2rem; 
    overflow-x: auto;
  }

  @media(max-width:475px){
    padding: 1rem;
  }
`;