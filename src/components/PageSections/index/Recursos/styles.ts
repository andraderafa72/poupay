import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem 2rem;

  header{
    display: flex;
    flex-direction: column;
    align-items: center;

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
    margin-top: 8rem;
    display: flex;
    justify-content: space-around;

    .center{
      position: relative;
      max-width: 600px;
      width: 35%;
      img{
        transform: scale(.95) translate3D(-20%, -15%, 0);
        z-index: -1;
      }
    }

    .left, .right{
      margin-top: 3rem;
    }

    .bottom{
      display: none;
      z-index: 9;
      gap: 1.5rem;
      overflow: auto;
      padding-left: 1rem;

      &::-webkit-scrollbar{
        display: none;
      }
    }
  }

  button{
    margin: -15rem auto 0;
  }

  @media(max-width:1024px){
    main{
      flex-direction: column;
      .center{
        margin: 0 auto;
      }
      .bottom{
        margin-top: -17.5rem;
        display: flex;
      }
    }

    button{
      margin: 4rem auto 0;
    }
  }


  @media(max-width: 1280px){
    main {
      .center {
        min-height: 1000px;
        img{
          transform:translate3D(-15%,0%, 0);
          max-height: 800px;
        }
      }
      button{
        margin-top: 13rem;
      }
    }
  }

  @media(max-width: 1024px){
    main{
      margin-top: 0;
    }
  }
  @media(max-width: 768px){
    main .center {
      min-height: 0;
      img{
        transform:translate3D(-25%, -15%, 0);
      }
    }
  }
  @media(max-width: 425px){
    main .center img{
      transform:translate3D(-36%, -15%, 0);
    }
  }
  @media(max-width: 375px){
    main .center img{
      transform:translate3D(-38%, -15%, 0);
    }
  }
`;