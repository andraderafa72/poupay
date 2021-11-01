import styled from "styled-components";
import hero from './assets/hero.webp'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
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

      .input-wrapper{
        margin-top: 3.5rem;
        display: flex;
        align-items: center;
        position: relative;

        label{
          position: absolute;
          top: 0;
          left: 0;
          padding: 0 .5rem;
          transform: translate3D(25%, -50%, 0);
          background: #8844E3;
          color: var(--text-light);
          /* letter-spacing: 1px; */
        }

        input, button{
          display: inline-block;
          height: 3rem;
          border-radius: .5rem 0 0 .5rem;
          color: var(--text-light);
        }

        input{
          background: transparent;
          border: 2px solid var(--text-light);
          border-right: none;
          width: 70%;
          padding-left: 1rem;

          &::placeholder{
            color: var(--text-light);
            opacity: .8;
          }
        }
        button{
          border-radius: 0 .5rem .5rem 0;
          border: none;
          background: var(--pink-400);
          width: 30%;
          font-weight: 700;
          font-size: 1rem;
          
        }
      }
    }
  }

  @media(max-width: 768px){
    background-position-x: 0%;

    .content{
      .wrapper{
        h1{
          font-size: 2.75rem;
        }

        p{
          font-size: 1.1rem;
          line-height: 155%;
        }

        .input-wrapper{
          label{
            background: #6838D0;
          }
        }
      }
    }
  }
`;