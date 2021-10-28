import styled from "styled-components";


export const Container = styled.section`
  display: flex;
  align-items: center;
  margin: 3rem 0;
  
  .wrapper{
    max-width: 1320px;   
    display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    position: relative;
    color: var(--text-light);

    .content{
      width: 55%;
      padding: 0 2rem 0 1rem;

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
        width: 100%;
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

`;