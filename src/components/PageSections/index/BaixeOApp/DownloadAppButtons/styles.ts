import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

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

  @media(max-width:375px){
    button{
      min-width: 150px;
      font-size: .9rem;
    }
  }
`;