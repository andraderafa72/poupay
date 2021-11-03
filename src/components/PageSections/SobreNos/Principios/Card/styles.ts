import styled from "styled-components";
import blob from './card-blob.svg';

export const Card = styled.div`
  border: 1px solid #ccc;
  /* min-width: 240px; */
  max-width: 250px;
  width: 250px;
  /* min-height: 250px; */
  background: var(--background-light);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem 1rem;
  p, span{
    text-align: left!important;
    /* max-width: 210px; */
  }

  .card-image{
    /* max-width: 210px; */
    background-image: url(${blob});
    background-repeat: no-repeat;
    background-size: contain;
    padding: 1rem 1.5rem;
  }

  img{
    width: 3rem;
    height: 3rem;
  }

  p{
    font-size: 1.125rem;
    margin: .5rem 0 1.5rem!important;
    font-weight: 500;
  }

  span{
    font-size: 1rem;
    color: var(--text-body);
   }
`;