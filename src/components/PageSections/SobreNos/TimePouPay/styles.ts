import styled from "styled-components";


export const Container = styled.section`
  margin: -8rem 0 10rem;
  
  .wrapper{
    /* padding-bottom: 17.5rem; */
    max-width: 1320px;   
    margin: 0 auto 10rem;
    position: relative;
    width: 100%;

    header{
      display: flex;
      flex-direction: column;
      margin-bottom: 4rem;

      h2{
        font-size: 2.25rem;
        line-height: 2.75rem;
        font-weight: 600;
        margin-bottom: .75rem;
        text-align: left;
      }

      p{
        max-width: 600px;
        text-align: left;
        color: var(--text-body);
      }
    }

    main{
      position: relative;
      .team{
        padding-left: 3.5rem;

        > strong{
          display: inline-block;
          transform: translateX(-3.5rem);
        }
      }
    }
  }
`;