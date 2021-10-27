import styled from "styled-components";

export const Container = styled.section`
  background: var(--background-dark);
  margin-bottom: 5rem;
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
      width: 50%;
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
`;