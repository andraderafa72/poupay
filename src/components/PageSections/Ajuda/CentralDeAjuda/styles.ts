import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto 7rem;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .search{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    .wrapper{
      width: 100%;
      max-width: 450px;
      position: relative;
      padding: .75rem;
      border-radius: .75rem;
      border: 1px solid #EAEDEE;
      input{  
        padding: .2rem;
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--blue-500);
        color: var(--text-body);
        transition: .2s;
        &:focus{
          outline: none;
        }
      }

      img{
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  p{
    color: var(--text-body);
    font-size: 1rem;
    text-align: justify;
  }

  @media(max-width: 375px){
    /* justify-content: flex-start; */
    /* gap: 1rem */
  }
`;