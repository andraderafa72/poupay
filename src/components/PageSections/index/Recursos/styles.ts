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
        /* position: absolute;
        top: -25%;
        left: -27.5%; */
        transform: scale(.95) translate3D(-20%, -17%, 0);
        z-index: -1;
      }
    }

    .left, .right{
      margin-top: 3rem;
    }

    .bottom{
      margin-top: -17.5rem;
      display: none;
      z-index: 9;
      gap: 1.5rem;
      overflow: auto;

      &::-webkit-scrollbar{
        display: none;
      }
    }
  }

  button{
    margin: 4rem auto 0;
  }

  @media(max-width:1024px){
    main{
      flex-direction: column;
      /* align-items: center; */
      .center{
        margin: 0 auto;
      }
      .bottom{
        display: flex;
      }
    }
  }

  @media(max-width: 1280px){
    main .center img{
      transform:translate3D(-15%, -17%, 0);
      max-height: 800px;
    }
  }

  @media(max-width: 768px){
    main .center img{
      transform:translate3D(-25%, -17%, 0);
    }
  }
  @media(max-width: 425px){
    main .center img{
      transform:translate3D(-36%, -17%, 0);
    }
  }
  @media(max-width: 375px){
    main .center img{
      transform:translate3D(-38%, -17%, 0);
    }
  }
`;