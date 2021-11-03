import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  &::-webkit-scrollbar{
    display: none;
  }
  
  .wrapper{
    display: flex;
    /* gap: 0.5rem; */
    overflow: auto;
    transition: .2s;

    &::-webkit-scrollbar{
      display: none;
    }
  }

  .background{
    position: absolute;
    width: 150%;
    height: 22rem;
    right: 0;
    top: 10%;
    left: 0;
    z-index: -1;
    border-radius: 10rem;
    background:#eee ;
  }

  .buttons{
    margin-top: 3rem;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
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

  .membro{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 200px;

    strong, span{
      text-align: center;
      max-width: 185px;
    }
    img{
      display: block;
      width: 150px;
      height: 150px;
      border-radius: 100%;
      background: #fff;
      margin-bottom: 0.75rem;
    }
  }
  @media(max-width:375px){
    .wrapper{
      gap: 0rem;
    }

    .membro{
      min-width: 180px;
    }
  }
`;