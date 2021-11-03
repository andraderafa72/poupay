import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 5rem auto 7rem;
  padding: 2rem;

  main{
    display: grid;
    grid-template-areas: repeat(4, 1fr);
    
    gap: 2rem;
    grid-template-areas:
    "header header header header"
    "col-2 col-2 col-1A col-1B";
    grid-template-columns: repeat(4, 1fr);

  }

  .comparativo{
    grid-area: header;
    border-radius: 1rem;
    background: var(--background-dark);
    margin-top: 3rem;

    display: grid;
    gap: 2rem;
    /* align-items: center; */
    grid-template-areas: "col-2 col-2 col-1A col-1B";
    grid-template-columns: repeat(4, 1fr);

    .col-2{
      grid-area: col-2;
      display: flex;
      align-items: center;
      padding-left: 25%; 
    }

    .col-1{
      grid-area: col-1A;
      /* max-width: 25%; */

      padding: 1.5rem;
      text-align: center;
      span{
        color: var(--pink-400);
        font-weight: bold;
        margin-bottom: .5rem;
      }
      p{
        max-width: 275px;
        font-size: .9;
        color: var(--text-body)
      }
      &:last-child{
        grid-area: col-1B;
        span{
          color: var(--blue-500);
        }
      }
    }
  }

  .card-col-1{
    grid-area: col-1A;
    p{
      margin: 0 auto;
      justify-content: center;

      img{
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    &:last-child{
      grid-area: col-1B;
    }
  }

  .card-col-1, .card-col-2{
    border: 1px solid #D9E1E7;
    border-radius: 1rem;
    padding: 2rem;
    p{
      color: var(--text-body);
      height: 3.5rem;
      width: 75%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(11,11,11, .1);
    }
  }

  .card-col-2{
    grid-area: col-2;
    p{
      width:100%;
    }
  }

  @media(max-width:768px){
    main{
      gap: 1rem;
    }
    .comparativo{
      gap: 1rem;
    }
  }
  @media(max-width:767px){
    display: none;
  }
`;