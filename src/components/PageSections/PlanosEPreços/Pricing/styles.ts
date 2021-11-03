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

  main.desktop{

    .wrapper{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .col-1, .col-2, .col-3, .col-4{
      width: 23.333%;
      
      > .wrapper{
        /* padding: 0 1rem; */
        height: 550px;
        background: var(--blue-500);
      }
    }

    .col-1{
      width: 30%;
    }

    .col-4 .wrapper{
      border-radius: 0 1rem 1rem 0;
    }

    .plano-free, .plano-anual,.plano-premium{
      p{
        justify-content: center;
      }

      img{
        width: 1.5rem;
        height: 1.5rem;
      }

    }
    .todos-os-beneficios, .plano-free, .plano-anual,.plano-premium{
      background: var(--blue-500);
      height: 550px;
      padding: 1.5rem 1rem;
      width: 100%;
      p{
        width: 100%;
        height: 3.45rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        color: var(--text-light);
        display: flex;
        align-items: center;
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

    .plano-anual{
      p{
        max-width: 60%;
        margin: 0 auto;
      }
    }

    .plano-anual .button{
      background: var(--blue-500);
      padding-bottom: 1rem;
      width: 109%;
      transform: translateX(-4%);
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

  main.mobile{
    width: 100%;
    display: none;
    gap: 1rem;
    align-items: center;
    padding-bottom: 1rem;
    overflow: auto;

    &::-webkit-scrollbar{
      display: none;
    }

    &::after, &::before{
      content: '';
      margin: auto;
    }

    .col-1, .col-2, .col-3{
      padding: 2rem;
      width: 90%;
      min-width: 315px;
      border-radius: 1rem;

      button{
        display: block;
        margin: 1rem auto 0;
      }
      .pricing{
        span{
          margin-bottom: 1rem;
        }
        p{
          font-size: .95rem;
          
          strong{
            font-size: 2.25rem;
          }

          span{
            font-size: 1rem;
            color: var(--text-light);
          }
        }
      }

      .plano{
        margin-top: 1rem;
        p{
          width: 100%;
          height: 3.45rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;


          img{
            width: 2rem;
            height: 2rem;
            object-fit: contain;
            margin-right: .75rem;
          }
        }
      }
    }

    .col-1, .col-3{
      border: 1px solid #cecece;
      color:var(--text-body);
      /* max-height: 550px; */

      .pricing{
        p{
          color: var(--text-dark);
        }
      }
    }

    .col-2{
      background: var(--blue-500);
      color:var(--text-light) ;
      min-height: 620px;
      .pricing{
        p{
          font-size: 1rem;
          
          strong{
            font-size: 2.5rem;
          }

          span{
            font-size: 1.1rem;
            color: var(--text-body);
          }
        }
      }

      button{
        margin-top: 2.5rem;
        background: var(--pink-400);
      }
    }
    .col-1{
      margin-left: 2rem;
    }

    .col-3{
      margin-right: 2rem;
    }
  }

  @media(max-width: 1023px){
    padding: 0;
    header{
      padding: 0 2rem;
      h2{
        text-align: center;
      }
    }
    main.desktop{
      display: none;
    }
    main.mobile{
      display: flex;
      &::-webkit-scrollbar{
        /* display: none; */
      }
    }
  }
  @media(max-width:320px){
    main.mobile{
      gap: .5rem;
      .col-1, .col-2, .col-3{
        min-width: 285px;
      }
    }
  }
`;