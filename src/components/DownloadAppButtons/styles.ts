import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a{
    display: inline-flex;
    align-items: center;
    height: 3.75rem;
    font-size: 1rem;
    font-weight: normal;
    background: transparent;
    border: none;
    border-radius: .5rem;
    width: 200px;
    color: var(--text-light);
    border: 2px solid var(--text-light);
    text-align: left;
    position: relative;
    padding-left: 4.5rem;
    img{
      position: absolute;
      left: 0.5rem;
      top: 0rem;
      height: 100%;

    }
  }
`;