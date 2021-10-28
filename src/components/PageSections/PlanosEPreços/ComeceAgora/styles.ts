import styled from "styled-components";
import background from './assets/background.png';

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
`;