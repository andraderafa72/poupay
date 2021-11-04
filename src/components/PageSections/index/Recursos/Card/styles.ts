import styled from "styled-components";

export const Container = styled.div`
  padding:1rem;
  display: flex;
  width: 90%;
  border-radius: 1rem;
  border: 1px solid #cecece;
  min-width: 500px;
  min-height: 4rem;

  align-items: flex-start;
  gap: 1rem;

  p{
    font-size: .9rem; 
    color: var(--text-body);
  }

  @media(max-width:590px){
    min-width: 400px
  }
  @media(max-width:425px){
    /* padding: 0 1rem; */
    min-height: 2rem;
    height: 8.5rem;
    min-width: 350px;
  }
  @media(max-width:375px){
    min-width: 300px;
    min-height: 10rem;
  }
  @media(max-width:320px){
    min-width: 250px;
    min-height: 100%;
    height: 12rem;

    img{
      display: inline-block;
      width: 20%;
    }
  }
`;