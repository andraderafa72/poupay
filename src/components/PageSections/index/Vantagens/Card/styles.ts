import styled from "styled-components";
import circle from '../assets/circle.svg';
export const Card = styled.div`
  border: 1px solid #ccc;
  width: 225px;
  height: 250px;
  background: var(--background-light);
  border-radius: 1rem;
  padding: 1.5rem 1rem;

  .image{
    background-image: url(${circle});
    background-size: contain;
    background-repeat: no-repeat;
    padding: 1rem;
  }

  img{
    display: block;
    width: 2rem;
    height: 2rem;
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

  @media(max-width: 768px){
    min-width: 225px
  }
`;