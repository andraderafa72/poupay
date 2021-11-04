import styled from "styled-components";

export const List = styled.ul`
  li{
    display: flex;
    max-width: 400px;
    gap: .5rem;
    align-items: flex-start;

    & + li {
      margin-top: 3rem;
    }

    img{
      transform: translateY(-10px);
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

  @media(max-width: 1024px){
    display: none;

    li{
      .content{
        strong{
          font-size: 1rem;
        }
        p{
          font-size: .9rem;
        }
      }
    }
  }
`;