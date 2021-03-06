import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 5rem 0 10rem;
  
  .wrapper{
    padding-bottom: 17.5rem;
    max-width: 1320px;   
    margin: 0 auto;
    position: relative;
    width: 100%;

    header{
      padding: 0 2rem;
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

      p{
        max-width: 600px;
        text-align: center;
        color: var(--text-body);
      }
    }
  

    main{
      padding: 0 2rem;
      padding-right: 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    span{
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
      margin-right: 2rem;
    }

    > img{
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    p{
      margin: 1.5rem 0 1rem;
      text-align: center;
    }

    .blob{
      transform: translate3D(17.5%, 25%, 0) scale(.9);
    }
    .image{
      transform: translate3D(-25%, 5%, 0);
    }
    
    .cards{
      margin: 0 auto;
      width: 100%;  
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      > div:last-child{
        margin-right: 2rem;
      }
    }
    
    .card-wrapper{
      display: flex;
      gap: 1rem;
      overflow: auto;
      justify-content: space-between;
      
      .space{
        display: block;
        min-width: 250px;
        width: 250px;
      }
    }

    .cards, .card-wrapper{
      &::-webkit-scrollbar{
        display: none;
      }
    }
  }

}

  @media(max-width:1440px){
    .wrapper{
      .card-wrapper{
        gap: 1.5rem;
      }
    }
  }

  @media(max-width:1120px){
    .wrapper{
      .cards{
        overflow: auto;
      }
      .card-wrapper{
        gap: 1rem;
      }
    }
  }

  @media(max-width:768px){
    .wrapper{
      .image{
        display: none;
      }

      .blob{
        max-width: 600px;
        transform: translate3D(25%, -5%, 0) scale(.9);
      }

      .cards{
        >div:last-child{
          margin-right: 2rem;
        }
      }

      .card-wrapper{
        .space{
          display: none;
        }

        .visao{
          margin-right: 2rem;
        }
      }
    }
  }

  @media(max-width:475px){
    .wrapper{
      span, p{
        text-align: left;
        padding-left: .5rem;
      }
    }
  }

  @media(max-width:320px){
    .wrapper{
      .blob{
        transform: translate3D(35%, -5%, 0) scale(.9);
      }
    }
  }
`;