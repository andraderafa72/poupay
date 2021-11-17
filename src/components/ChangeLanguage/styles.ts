import styled from "styled-components";

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  /* font-weight: bold; */
  position: relative;
  .currentLang{
    max-height: 48px;
    cursor: pointer;
    padding: .5rem;
    background: var(--purple-300);
    border: none;
    border-radius: 1rem;
    color: var(--text-light);
    display: flex;
    align-items: center;
    gap: .5rem;

    img{
      max-height: 40px;
      width: 1.25rem;
      height: 1.25rem;
      margin: 0!important;
    }

    p{
      text-transform: uppercase;
      font-size: .9rem;
    }
  }

  .close-background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${props => props.isOpen ? 'block' : 'none'};
    z-index: 1;
  }
  .langs{
    display: ${props => props.isOpen ? 'block' : 'none'};
    background: var(--background-light);
    position: absolute;
    bottom: -300%;
    border-radius: 1rem;
    padding: .35rem;
    left: 0;
    width: 200%;
    z-index: 9;
    /* right: 0; */
    
    .lang{
      cursor: pointer;
      padding: .25rem;
      display: flex;
      align-items: center;
      border-radius: .5rem;
      gap: .5rem;

      &:hover{
        background: #f2f2f2;
      }

      & + .lang{
        margin-top: .25rem;
      }

      p{
        color: var(--text-body);
        /* text-transform: uppercase; */
        font-size: .9rem;
      }

      img{
        max-height: 40px;
        width: 1.25rem;
        height: 1.25rem;
        margin: 0;
      }
    }
  }
  
  @media(max-height: 695px) and (max-width: 980px){
    .langs{
      bottom: auto;
      top: -300%;
    }
  }
`;