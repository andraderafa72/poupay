import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: 4rem 0;
  position: relative;

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
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem 0;
  }

  .blob, .blob-b{
    position: absolute;
    right: -25%;
    z-index: -1; 
  }
  
  .blob{
    bottom: -5%;
  }
  .blob-b{
    right: -22.5%;
    top: -10%;
  }
`;