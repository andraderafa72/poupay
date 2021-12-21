import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ccc;
  width: 225px;
  min-height: 250px;
  background: var(--background-light);
  border-radius: 1rem;
  padding: 1.5rem 1rem;

  .image{
    margin: 0 0 1rem .5rem;
  }

  img{
    display: block;
    width: 4rem;
    height: 4rem;
    margin-top: 0!important;
    margin-left: -.4rem;
    position: relative;
    /* padding: .5rem; */
  }
  h4{
    margin-top: .5rem;
  }
  p{
    font-size: .85rem; 
    margin-top: .5rem;
  }

  @media(max-width: 1120px){
    .image{
      width: 50%;

      img{
        margin: 0;

      }
    }
  }
  @media(max-width: 768px){
    min-width: 225px;
    min-height: 100%;

    .image img{
      margin: 0;
      margin-left: -25%;
    }
  }
`;