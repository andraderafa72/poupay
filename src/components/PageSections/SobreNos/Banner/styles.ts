import styled from "styled-components";
import background from './assets/background.png'


export const Container = styled.section`
  background-image: url(${background});
  background-position: right;
  background-size: 1180px;
  background-repeat: no-repeat;
  min-height: 700px;
  display: flex;
  align-items: center;
  
  .wrapper{
    max-width: 1320px;   
    display: flex;
    width: 100%;
    margin: 0 auto;
  }

  .content{
    h3{
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    h1{
      font-size: 3.5rem;

      span{
        color: var(--blue-500);
        background: rgba(255,255,255,.5);
      }
    }
  }
`;