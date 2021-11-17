import styled from "styled-components";
import background from './assets/background.svg';

export const Container = styled.section`
  background-color: var(--background-dark);
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400px;
  margin-top: 15rem;

  .wrapper{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: visible;

    div{  
      min-height: 400px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content:center;
    }

    .info{
      max-width: 650px;
      text-align: center;
      z-index: 2;

      h2{
        margin-bottom: 3rem;
      }
    }

    .image{
      width: 50%;
      position: relative;
      img{
        position: absolute;
        bottom: 0;
        right: -50%;
        /* width: 100%; */
        max-height: 400px;
        height: 100%;
      }
    }
  }
  @media(max-width:1024px){
    .wrapper{
      flex-direction: column;
      align-items: center;
      
      .info, .image{
        width: 100%;
      }
      .image{
        padding-left: 5rem;
        img{
          position: initial;
          /* right: -80%;  */
        }
      }
    }
  }
`;