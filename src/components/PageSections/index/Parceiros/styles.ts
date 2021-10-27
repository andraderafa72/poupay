import styled from "styled-components";

export const Container = styled.section`
  background: var(--blue-500);
  padding: 4rem 0;
  margin-top: 3rem;
  .wrapper{
    max-width: 1440px;
    margin: 0 auto;
    /* display: flex; */

    header{
      display: flex;
      flex-direction: column;

      h2{
        font-size: 2.25rem;
        line-height: 2.75rem;
        font-weight: 600;
        margin-bottom: .75rem;
        color: var(--text-light);
      }

      p{
        max-width: 600px;
        color: var(--text-light);
      }
    }

    main{
      margin-top: 2rem;
      .parceiros{
        display: flex;
        gap: 2rem;
        overflow-x: auto;
        padding: 1rem 0;
      }
    }
  }
`;