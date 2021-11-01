import styled from "styled-components";
interface HeaderProps {
  page?: string
}

export const Container = styled.footer<HeaderProps>`
  min-height: 372px;
  width: 100%; 
  background: transparent linear-gradient(173deg, #5610E7 0%, #6B16DB 57%, #f33e8f 100%) 0% 0% no-repeat padding-box;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > img{
    position: absolute;
    z-index: 0;
  }

  *{
    z-index: 1;
    color: var(--text-light);
  }

  .wrapper{
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

    .links{
      /* font-size: 1.125rem; */
      display: flex;
      flex-direction: column;
      strong{
        font-size: 1.125rem;
        margin-bottom: 2.5rem;
      }

      a:hover{
        transition: .2s;
        color: var(--pink-200);
      }

      a + a{
        margin-top: 2rem;
      }
    }

    .social-media{
      strong{
        display: inline-block;
        margin-bottom: 1rem;
      }
      ul{
        display: flex;
        gap: 1rem;

        li{
          border-radius: 100%;
          background: var(--pink-400);
          
          a{
            width: 2.5rem;
            height: 2.5rem;
            padding: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .2s;

            &:hover{
              filter: brightness(.9);
            }

            img{
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
    }

    .info{
      strong{
        display: inline-block;
        margin-bottom: 1rem;
      }

      p span{
        font-weight: bold;
      }
    }

    .download-app{
      strong{
        display: inline-block;
        margin-bottom: 1rem;
      }
    }
  }
  @media(max-width:1023px){
    .wrapper{
      flex-wrap: wrap;
      /* gap: 3rem; */
      .links{
        width: 50%;
        margin-bottom: 3rem;
      }

      .social-media, .info, .download-app{
        width: 100%;
        margin-bottom: 3rem;
      }

      .download-app{
        > div{
          flex-direction: row;

          button{
            font-size: .9rem;
          }
        }
      }
    }
  }
`;