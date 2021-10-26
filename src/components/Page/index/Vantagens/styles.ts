import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  /* align-items: flex-end; */
  gap: 5rem;
  margin:8rem 0 4rem;
  position: relative;

  img:not(.blob){
    max-width: 663px;
    width: 40%;
    margin-top: 1.75rem;
    /* z-index: -1; */
    transform: scale(1.15);

  }

  img.blob{
    width: 793px;
    position: absolute;
    z-index: -1;
    transform: translate3D(-11%, -5%, 0);
  }

  .content{
    display: flex;
    flex-direction: column;
    width: 60%;

    h2{
      font-size: 2.25rem;
    }

    p{
      color: var(--text-body);
    }
  }

  .wrapper{
    display: flex;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
    overflow-x: auto;
    padding: 1rem;
    padding-left: 0;
    margin: 1.5rem 0;

    &::-webkit-scrollbar{
      display: none
    }
  }
`;