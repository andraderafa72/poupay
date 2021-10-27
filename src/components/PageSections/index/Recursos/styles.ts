import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 0 2rem;
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
        position: absolute;
        top: -25%;
        left: -27.5%;
        transform: scale(.95);
        z-index: -1;
      }
    }

    .left, .right{
      margin-top: 3rem;
    }
  }

  button{
    margin: 5rem auto 0;
  }
`;