import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto 7rem;
  padding: 2rem;

  h4{
    margin: 1.5rem 0 0.5rem;
  }
  ul{
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-body);
  }

  li{
    list-style: disc;

   & + li{
     margin-top: 1rem;
   } 
  }

  p{
    color: var(--text-body);
    font-size: 1rem;
    text-align: justify;
  }

  @media(max-width: 1024px){

  }
`;