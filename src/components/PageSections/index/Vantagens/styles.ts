import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  max-width: 1320px;
  margin:8rem auto 4rem;
  position: relative;
  padding: 2rem;

  img:not(.blob){
    max-width: 663px;
    width: 40%;
    margin-top: 1.75rem;
    transform: scale(1.15);

  }

  img.blob{
    width: 793px;
    position: absolute;
    z-index: -1;
    transform: translate3D(-11%, -5%, 0);
  }

  .content{
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-right: 2rem;
    /* margin-right: 2rem; */

    h2{
      font-size: 2.25rem;
      max-width: 550px;
      margin-bottom: 0.5rem;
    }

    p{
      color: var(--text-body);
      max-width: 550px;
    }
  }

  .vantagens{

    .buttons{
      display: flex;
      justify-content: flex-end;
      /* margin-left: auto; */
      padding-right: 1.5rem;
      width: 100%;
    }

    button{
      background: none;
      border: none;

      img{
        width: 100%; 
      }
      & + button{
        margin-left: 1rem;
        img{
          margin-bottom:.1rem;
        }
      }
    }
  }

  .wrapper{
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    transition: .2s;
    padding: 1rem;
    padding-left: 0;
    margin: 1.5rem 0;
    justify-content: space-between;
    /* overflow: auto; */
    &::-webkit-scrollbar{
      display: none
    }
  }

  @media(max-width: 1120px){
    flex-direction: column;
    padding-right: 0;
    .content{
      width: 70%;
      margin: 0 auto;

      h2,p{
        padding-right: 2rem;
      }
    }

    img:not(.blob){
      width: 70%;
      margin: 0 auto 2rem;
      transform: scale(1);
      margin-top: 0;
    }

    img.blob{
      max-width: 793px;
      width: 100%;
      transform: translate3D(20%, -5%, 0);
    }
  }

  @media(max-width: 768px){
    flex-direction: column;
    
    .content{
      width: 100%;
      padding-right: 0;

      .wrapper{
        padding: 0;
        overflow: auto;

        >div:last-child{
          margin-right: 2rem;
        }
      }

      h2,p{
        padding-right: 2rem;
      }
    }

    img:not(.blob){
      width: 100%;
      transform: scale(1);
      margin-top: 0;

    }

    img.blob{
      max-width: 793px;
      width: 100%;
      transform: translate3D(0%, -5%, 0);
    }
  }
`;