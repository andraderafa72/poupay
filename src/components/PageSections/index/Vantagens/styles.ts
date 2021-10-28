import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  max-width: 1320px;
  margin:8rem auto 4rem;
  position: relative;

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

    h2{
      font-size: 2.25rem;
    }

    p{
      color: var(--text-body);
    }
  }

  .vantagens{
    overflow: hidden;


    .buttons{
      padding-right: 1rem;
      display: flex;
      justify-content: flex-end;
      /* margin-left: auto; */
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

    &::-webkit-scrollbar{
      /* display: none */
    }
  }
`;