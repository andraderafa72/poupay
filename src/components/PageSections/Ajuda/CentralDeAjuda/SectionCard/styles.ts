import styled from "styled-components";

export const Card = styled.div`
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: calc(25% - 1rem);
  tspan{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
  }

  svg{
    width: 100%;
  }
  img{
    width: 100%;
  }

  @media(min-width: 1600px){
    max-height: 300px;
  }

  @media(max-width: 1280px){
    max-height: 250px;
  }
  @media(max-width: 1120px){
    max-height: 225px;
  }
  @media(max-width: 1024px){
    max-height: 200px;
  }
  @media(max-width: 768px){
    max-height: 150px;
  }
  @media(max-width: 767px){
    width: calc(50% - 1rem);
    max-height: 400px;
    margin-top: 1rem;
  }
  @media(max-width: 698px){
    max-height: 250px;
  }
  @media(max-width: 640px){
    max-height: 250px;
  }
`;