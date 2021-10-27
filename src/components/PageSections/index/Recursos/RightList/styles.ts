import styled from "styled-components";

export const List = styled.ul`
  li{
    display: flex;
    max-width: 400px;
    gap: .5rem;

    & + li {
      margin-top: 3rem;
    }

    img{
      transform: translateY(-20px);
    }
    
    .content{
      strong{
        font-size: 1.125rem;
      }
      p{
        color: var(--text-body);
        margin-top: .5rem;
      }
    }
  }
`;