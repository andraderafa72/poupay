import styled from "styled-components";
import hero from './assets/hero.webp'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  min-height: 840px;
  background: url(${hero});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: flex-start;


  .content{
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    padding: 2rem;

    .wrapper{
      max-width: 550px;
      max-height: 75vh;
      min-height: 564px;
      border-radius: 1rem;
      background: rgba(255,255,255, .20);
      padding: 3rem 2.5rem;
      backdrop-filter: blur(15px);
      -webkit-backdrop-filter: blur(15px);

      h1{ 
        font-size:3.5rem;
        font-weight: normal;
        line-height: 130%;
        color: var(--text-light);
        max-width: 500px;

        span{
          color: var(--pink-400);
          font-weight: bold;
        }
        strong{
          font-weight: bold;
        }
      }

      p{
        margin-top: 1rem;
        color: var(--text-light);
        font-weight: 400;
      }

      > div:last-child{
        margin: 3rem auto 0;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
      }
      
    }
  }

  @media(max-width: 1368px){
    .content{
      .wrapper{
        margin-top: 5rem;
        padding: 2rem;
        min-height: 391px;
        h1{
          font-size: 2.75rem;
        }
        p{
          font-size: 1rem;
        }
      }
    }
  }

  @media(max-width:1024px){
    min-height: 580px;
  }

  @media(max-width: 768px){
    background-position-x: 25%;
    min-height: 640px;

    .content{
      .wrapper{
        min-height: 432px;
        h1{
          font-size: 2.75rem;
          max-width: 400px;
        }

        p{
          font-size: 1.1rem;
          line-height: 155%;
        }
      }
    }
  }
  
  @media(max-width:425px){
    background-position-x: 0;
    .content .wrapper{
      min-height: 520px;

      > div:last-child{
        margin: 3rem auto 0;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }

    }
  }

  @media(max-width:406px){
    .content .wrapper{
      min-height: 520px;
    }
  }

  @media(max-width:375px){
    .content .wrapper{
      min-height: 480px;

      h1{
        font-size: 2.25rem;
      }

      p{
        font-size: 1rem;
      }
    } 
  }
  @media(max-width:320px){
    .content .wrapper{
      padding: 1rem 1.5rem;
      min-height: 475px;
      h1{
        font-size: 2rem;
      }
    } 
  }
`;