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
      margin-bottom: 2rem;
    }
  }
  
  .image{
    img{
      transform: translate3D(-25%, 0, 0);
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