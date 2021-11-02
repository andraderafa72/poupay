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
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
    }

    span{
      display: inline-block;
      width: 100%;
      text-align: center;
      margin-bottom: 1rem;
    }

    img{
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: -1;
    }

    .blob{
      transform: translate3D(17.5%, 25%, 0) scale(.9);
    }
    .image{
      transform: translate3D(-25%, 5%, 0);
    }
    
    .cards{
      width: 100%;  
      > div {
        width: 1300px;
        display: flex;
        gap: 2rem;
        overflow: visible;
      }
    }
  }
`;