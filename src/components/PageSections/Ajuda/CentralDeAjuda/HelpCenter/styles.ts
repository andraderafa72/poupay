import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 1rem auto 3rem;
  padding: 2rem;
  
  .header{
    button{
      border: none;
      background: none;
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
      &:hover{
        filter: brightness(.9);
      }
    }
    h2{
      color: var(--pink-400);
    }
  }

  .question-wrapper{
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .question{
    width: calc(50% - 1rem);
    padding: 1rem;
    border-radius: .75rem;
    border: 1px solid #cecece;
    transition: .2s;
    cursor: pointer;

    h4{
      font-size: 1.125rem;
    }

    p{
      color: var(--text-body);
      font-size: 1rem;
    }

    &:hover{
      border-color: var(--pink-400);
    }

  }

  @media(max-width: 768px){
    padding: 1rem;
    .question{
    }
  }

  @media(max-width: 540px){
    .question-wrapper{
      flex-direction: column;
    }
    .question{
      width: 100%;
    }
  }
`;

export const QuestionContainer = styled.section`
  max-width: 1320px;
  margin: 1rem auto 3rem;
  padding: 2rem;
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  .header{
    width: 100%;
    button{
      border: none;
      background: none;
      img{
        width: 1.5rem;
        height: 1.5rem;
      }
      &:hover{
        filter: brightness(.9);
      }
    }
    h2{
      color: var(--pink-400);
    }
  }


  
  .left, .right {
     display: flex;
     gap: 1rem;
     flex-direction: column;
  }

  .left{
    width: calc(60% - 2rem);

    p{
      color: var(--text-body);
      font-size: 1rem;
    }
  }
  
  .right{
    width: calc(40% - 2rem);
    
    h4{
      width: 100%;
      color: var(--pink-500);
    }
  }

  .question{
    width: 100%;
    padding: 1rem;
    border-radius: .75rem;
    border: 1px solid #cecece;
    transition: .2s;
    cursor: pointer;

    h4{
      font-size: 1.125rem;
    }

    p{
      color: var(--text-body);
      font-size: .9rem;
    }
    &:hover{
      border-color: var(--pink-400);
    }
  }

  @media(max-width:768px){
    padding: 1rem;
  }
  @media(max-width:767px){
    flex-direction: column;

    .right, .left{
      width: 100%;
    }
    
    .right{

      flex-direction: row;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .question{
      width: calc(50% - .5rem);
    }
  }

  @media(max-width: 540px){
    .question-wrapper{
      flex-direction: column;
    }
    .question{
      width: 100%;
      padding: 1rem;
    }
  }
`;