import styled from "styled-components";
import hero from '../../../../assets/img/hero.webp'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${hero});
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  .content{
    max-width: 1440px;
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
        line-height: 140%;
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
        margin-top: 1rem;
        display: flex;
        align-items: center;
        position: relative;

        label{
          position: absolute;
          top: 0;
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
          width: 70%;
          padding-left: 1rem;

          &::placeholder{
            color: var(--text-light);
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
`;