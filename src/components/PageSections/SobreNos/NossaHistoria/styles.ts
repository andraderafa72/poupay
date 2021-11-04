import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 3rem 0;
  
  .wrapper{
    max-width: 1320px;   
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    color: var(--text-light);

    .content{
      width: 55%;
      padding: 1rem;
      padding-right: 3rem;

      h3{
        font-size: 2.25rem;
        margin-bottom: 2rem;
      }

      p{
        font-size: 1.125rem;
        text-align: justify;
        line-height: 160%;
      }
    }

    .image{
      width: 40%;

      img{
        display: block;
        object-fit: cover;
        border-radius: 1rem;
        margin: 0 auto;
        width: 90%;
      }
    }

    .background{
      position: absolute;
      width: 100%;
      height: 90%;
      background:var(--blue-500);
      top: 5%;
      left: 0%;
      z-index: -1;
      border-radius: 1rem;
    }
  }

  @media(max-width: 1368px) and (min-width: 1120px){
    .wrapper{
      max-height: 75vh;
      .image{
        width: 50%;
        img{

          max-height: 70vh;
        }
      }
    }
  }
  @media(max-width:768px){
    margin-bottom: 12rem;
    .wrapper{
      flex-direction: column-reverse;
      gap: 2rem;
      .image{
        width: 100%;
      }
      
      .content{
        width: 80%;
        padding-right: 1.5rem;

        p{
          font-size: 1rem;
        }
      }

      .background{
        width: 82.5%;
        height: 110%;
        top: 0%;
        left: 50%;
        transform: translate3D(-50%, -5%, 0);
      }
    }
  }
  @media(max-width:425px){
    margin-bottom: 12rem;
    padding: 0;
    .wrapper{
      flex-direction: column-reverse;
      gap: 2rem;
      .image{
        width: 100%;
      }
      
      .content{
        width: 80%;
      }

      .background{
        width: 85%;
        height: 105%;
        top: 0%;
        left: 50%;
        transform: translate3D(-50%, -2.5%, 0);
      }
    }
  }

  @media(min-width:769px){
    margin-bottom: 12rem;
    .wrapper{
      gap: 2rem;
      .image{
        width: 40%;
        img{
          width: 100%;
        }
      }
      
      .content{
        width: 50%;
        padding-left: 0;
        padding-right: 2rem;

        h3{
          margin-bottom: 1.25rem;
          font-size: 2rem;
        }

        p{
          font-size: 1rem;
          line-height: 140%;
        }
      }

      .background{
        width: 100%;
        height: 85%;
        top: 7.5%;
        left: 0;
        /* transform: translate3D(-50%, -5%, 0); */
      }
    }
  }

`;