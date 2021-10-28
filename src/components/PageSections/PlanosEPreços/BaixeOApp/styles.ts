import styled from "styled-components";
import background from './assets/background.png';

export const Container = styled.section`
  background-image:url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400px;
  margin-top: 15rem;
  position: relative;

  .background{
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    background:  #5715E8;
    opacity: .75;
    z-index: 0;
  }

  .wrapper{
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;

    .info{
      display: flex;
      min-height: 400px;
      flex-direction: column;
      justify-content: center;

      max-width: 550px;
      z-index: 1;

      h2{
        margin-bottom: 3rem;
        color: var(--text-light);
      }

      > div{
        flex-direction: row;
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