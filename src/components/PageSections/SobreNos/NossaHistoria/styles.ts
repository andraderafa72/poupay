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
  @media(max-width:768px){
    margin-bottom: 12rem;
    .wrapper{
      flex-direction: column-reverse;
      gap: 2rem;
      .image{
        width: 80%;
      }
      
      .content{
        padding-right: 1.5rem;
      }

      .background{
        width: 70%;
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
        width: 95%;
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
`;