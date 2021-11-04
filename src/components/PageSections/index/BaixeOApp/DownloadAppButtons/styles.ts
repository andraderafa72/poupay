import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin  : 0 2rem;

  button{
    height: 3.75rem;
    font-size: 1rem;
    font-weight: normal;
    background:var(--blue-500);
    border: none;
    border-radius: .5rem;
    max-width: 200px;
    min-width: 175px;
    color: var(--text-light);
    text-align: left;
    position: relative;
    padding-left: 4.5rem;
    img{
      position: absolute;
      left: 0.5rem;
      top: 0rem;
      height: 100%;
    }
  }

  @media(min-width:1024px){
    button{
      min-width: 200px;
    }
  }
  @media(max-width:375px){
    button{
      min-width: 140px;
      max-width: 150px;

      font-size: .9rem;
    }
  }
  @media(max-width:320px){
    button{
      font-size: .85rem!important;
    }
  }
`;