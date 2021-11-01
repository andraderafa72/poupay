import styled from "styled-components";

export const Container = styled.section`
  background: var(--background-dark);
  margin-bottom: 5rem;
  padding: 0 2rem;
  .wrapper{
    max-width: 1320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left{
      width: 40%;
      z-index: 0;

      img{
        transform: translateX(-200px);
        width: 200%;
        max-height: 400px;
        max-width: 980px;
        height: 100%;
      }
    }
    
    .right{
      z-index: 1;
      width: 55%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      h2{
        text-align: center;
        margin-bottom: 2rem;
      }
    }
  }

  @media(max-width: 767px){
    padding: 0 1rem;

    .wrapper{
      .left{
        display: none;
      }
      .right{
        width: 100%;
        padding: 2rem;
        h2{
          font-size: 2rem;
        }
        button{
          width: 180px;
        }
      }
    }
  }

  @media(max-width:320px){
    .wrapper .right button{
      width: 140px;
      font-size: .9rem;

    }
  }
`;