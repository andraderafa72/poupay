import styled from "styled-components";

export const Container = styled.section`
  background: var(--background-dark);
  margin-top: 8rem;
  padding: 2rem;
  > .wrapper{
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 0;    
  }

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
    margin-top: 2rem;
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: space-between;
    p{
      color: var(--text-body);
      text-align: justify;
      max-width: 575px;
    }
  }

  .left{
    max-width: 480px;
    width: 40%;
    img{
      width: 100%;
      object-fit: cover;
    }
  }

  .center{
    width: 40%;
    max-width: 575px;
    /* overflow: hidden; */
    strong{
      display: inline-block;
      margin-top: 1.5rem;
    }

    .arrows{
      margin-top: 2.5rem;
      span{
        & + span{
          margin-left: 1rem;
        }
      }
    }
  }

  .right{
    width:180px;
    /* width: 100%; */
    img{
      width: 3.5rem;
      height: 3.5rem;
      display: block;
      background: pink; 
      border-radius: 100%;

      & + img{
        margin-top: 1.5rem;
      }

      &:first-child, &:nth-child(3), &:last-child{
        text-align: right;
        margin-left: auto;
      }
    }
  }

  .swiper-button-next, .swiper-button-prev{
    bottom: -4rem!important;
  }

  @media(max-width: 768px){
  
    main{
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start; 
      gap: 2rem;
      margin-top: 4rem;
      .right{
        margin-top: 1rem;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-left: 25%;
        gap: 1rem;
        > img{
          margin: 0;
          &:nth-child(3), &:last-child{
            margin-left: 0;
          }
          & + img{
            margin-top: 0rem;
          }
          &:first-child{
            margin-left: 0;
          }
        }
      }

      .left{
        width: 20%;
      }
      .center{
        margin-top: 0;
        width: calc(80% - 2rem);
      }
    }
  }
`; 