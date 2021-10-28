import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 3rem auto 10rem;
  padding: 0 2rem;
  header{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4rem;
    
    h2{
      font-size: 2.25rem;
      line-height: 2.75rem;
      font-weight: 600;
      margin-bottom: .75rem;
    }
    span{
      max-width: 600px;
      text-align: center;
      color: var(--text-body);
    }
  }

  main{

    .wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .col-1, .col-2, .col-3, .col-4{
      width: 23.333%;
      
      > .wrapper{
        /* padding: 0 1rem; */
        height: 500px;
        background: var(--blue-500);
      }
    }

    .col-1, .col-3{
      width: 30%;
    }

    .col-4 .wrapper{
      border-radius: 0 1rem 1rem 0;
    }

    .plano-free, .plano-anual,.plano-premium{
      p{
        display: flex;
        align-items: center;
        justify-content: center;

      }

      img{
        width: 1.5rem;
        height: 1.5rem;
      }

    }
    .todos-os-beneficios, .plano-free, .plano-anual,.plano-premium{
      background: var(--blue-500);
      height: 500px;
      padding: 1.5rem 1rem;
      width: 100%;
      p{
        width: 100%;
        height: 3.45rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        color: var(--text-light);
      }
    }

    .todos-os-beneficios, .plano-anual{
      padding-top: 2.8rem;
    }

    
    .todos-os-beneficios{
      padding-left: 2rem;
      border-radius: 1rem 0 0 1rem;
    }


    .plano-free, .plano-premium{
      background: var(--background-light);
      margin-top: 10%;
      height: 90%;
      p{
        border-bottom-color: rgba(12, 12, 12, 0.15);
      }
    }

    .plano-free{
      border-radius: 1rem 0 0 1rem;
      margin-left: 1rem;
    }
    .plano-premium{
      border-radius: 0 1rem 1rem 0;
      margin-right: 1rem;
    }

    .plano-anual .button{
      background: var(--blue-500);
      padding-bottom: 1rem;
      width: 110%;
      transform: translateX(-5%);
      border-radius: 0 0 1rem 1rem;

      display: flex;
      align-items: center;
      justify-content: center;

      button{
        background: var(--pink-400);
        margin-top: 3rem;
      }
    } 

    .space, .free, .premium, .premium-mensal{
      display: flex;
      flex-direction: column;
      height: 150px;
      padding: 1.5rem 2rem;
      p, span{
        text-align: left;
        width: 100%;
        /* max-width: 120px; */
      }

      button{
        width: 100%;
      }

      > span{
        font-size: 1.125rem;
        &.recomendado{
          font-size: 1rem;
          color: var(--text-body);
        }
      }

      p{
        font-size: .95rem;
        
        strong{
          font-size: 2.25rem;
        }

        span{
          font-size: 1rem;
          color: var(--text-body);
        }
      }
    }

    .premium{
      background: var(--blue-500);
      border-radius: 1rem 1rem 0 0;

      > span:not(.recomendado){
        margin-top: 1rem;
      }

      span, p{
        color: var(--text-light)
      }
    }
  }
`;