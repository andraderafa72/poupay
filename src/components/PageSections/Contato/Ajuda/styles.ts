import styled from "styled-components";
import background from './assets/background.svg'

export const Container = styled.section`
  padding: 0 2rem;
  background-color: var(--background-dark);
  background-image: url(${background});
  background-size: cover;
  min-height: 400px;

  .wrapper{    
    margin: 0 auto;
    max-width: 1320px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .image, .content{
    width: 50%;
  }

  .content{
    text-align: center;
    transform: translate3D(-15%, 0, 0);
    h2{
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
    }
  }
  
  .image{
    img{
      transform: translate3D(-25%, 0, 0);
    }
  }

  .links{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    a{
      padding: .675rem 1rem;
      min-width: 280px;
      border-radius: .5rem;
      color: #fff;
      transition: .2s;
      &.whatsapp{
        background: green;
      }

      &.email{
        background: #121215;
      }
      
      &.carreiras{
        background: var(--purple-500);
      }
      
      &.ajuda{
        background: var(--purple-400);
      }

      &:hover{
        filter: brightness(.9);
      }
    }
  }

  @media(max-width: 768px){
    height: 485px;
    .wrapper{
      height: 100%;
      flex-direction: column-reverse;
      /* justify-content:center; */
      /* gap: 3rem; */
      /* gap: 2rem; */
      .image, .content{
        width: 100%;
        transform: none;
      }
      
      .content{
        margin-top: 4rem;
      }

      .image{
        /* transform: scale(1.15); */
        margin-left: 2rem;
        img{
          position:initial;
          width: 100%;
          transform: none;
        }
      }
    }
  }
`;