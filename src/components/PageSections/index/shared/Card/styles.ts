import styled from "styled-components";

export const Container = styled.section`
  width: 210px;
  height: 175px;
  min-width: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-light);
  border: 1px solid #cecece;
  border-radius: .75rem;
  padding: 1rem;

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;