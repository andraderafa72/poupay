import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 5rem auto 7rem;
  padding: 2rem;
  padding-right: .5rem;

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
    justify-content: space-between;
    gap: 2rem; 
    overflow-x: auto;

    &::-webkit-scrollbar{
      display: none;
    }
  }

  @media(max-width: 1120px){
    .card-wrapper{
      gap: 1rem;
    }
  }
  @media(max-width: 1024px){
    justify-content: flex-start;
  }

  @media(max-width:475px){
    padding: 1rem;
  }
`;