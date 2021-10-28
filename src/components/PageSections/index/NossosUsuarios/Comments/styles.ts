import styled from "styled-components";

export const Container = styled.div`
  max-width: 575px;
  overflow-x: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  > div{
    width: 100%;
  }

  .wrapper{
    display: flex;
    transition: .2s;
  }

  button{
    background: none;
    border: none;

    & + button{
      margin-left: 1rem;
      img{
        margin-bottom:.1rem;
      }
    }
  }

  .comment{
    max-width: 575px;
    min-width: 100%;
  }
`; 