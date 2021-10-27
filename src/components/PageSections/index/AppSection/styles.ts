import styled from "styled-components";
import backgroundImage from './assets/background.svg';

export const Container = styled.section`
  background: url(${backgroundImage}) var(--blue-500);
  height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper{
    max-width: 1320px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left{
    width: 40%;
    color: var(--text-light);

    h2{
      font-weight: 600;
    }

    p{
      margin-top: 1rem;
      line-height: 150%;
      opacity: .9;
    }

    ul{
      margin-top: 1.5rem;
      li{
        display: flex;
        align-items: center;
        gap: .5rem;

        & + li{
          margin-top: 1rem;
        }
      }
    }
  }

  .right{
    width: 50%;
    position: relative;
    display: flex;
    transform: scale(1.2) translateX(10%);

    img:not(.mobile){
      max-width: 800px;
      max-height: 556px;
      width: 100%;
    }
    
    .mobile{
      width: 50%;
      position: absolute;
      bottom: -20%;
      left: -20%;
    }
  }
`;
