import styled from "styled-components";

export const Container = styled.div`
  max-width: 575px;
  overflow-x: auto;
  
  &::-webkit-scrollbar{
    display: none;
  }
  
  > div{
    width: 100%;
  }

  .comment{
    max-width: 575px;
    min-width: 100%;
  }
`; 