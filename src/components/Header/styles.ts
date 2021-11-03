import styled from "styled-components";

interface HeaderProps {
  page?: string;
  isBurgerOpen: boolean
}

export const Container = styled.header<HeaderProps>`
  height: 8rem;
  width: 100%; 
  position:  ${props => props.page === 'home' ? 'absolute' : 'fixed' };
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  z-index: 9;
  background: ${props => props.page === 'home' ? 'transparent' : 'var(--purple-400)' };
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.page !== 'home' ? `
  box-shadow: 0 4px 16px 0 rgba(11,11,15, .24);
  ` : ''}

  .wrapper{
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    .hamburger, .burger-menu{
      display: none;
    }

    img{
      max-width: 350px;
      height: 106px;
      object-fit: contain; 
      @media(max-width:1120px){
        max-width: 250px;

      }
    }

    a{
      color: var(--text-light);
    }

    nav{
      display: flex;
      align-items: center;

      li{
        select{
          padding: .5rem 1rem;
          background: var(--purple-300);
          border: none;
          border-radius: .75rem;
          color: var(--text-light);
          font-weight: bold;
        }

        a{
          padding: .75rem 1.25rem;
          font-size: 1rem;
          font-weight: medium;
          position: relative;
          display: inline-block;

          &::after{
            content: '';
            position: absolute;
            width: 10px;
            border-radius: 0 0 1rem 1rem;
            height: 4rem;
            top: -8rem;
            left: 50%;
            background: var(--pink-400);
            transition: .2s;
            transform: translateX(-50%);
          }

          &:hover, &.active{
            &::after{
              top: -4rem;
            }
          }
        }
      }
    }

    .auth-buttons{
      a{
        padding: .75rem 1rem;
        margin-left: 1rem;
        transition: .2s;
        font-size: 1rem;
        &:hover:not(.primary){
          color: var(--pink-400)
        }

        &.primary{
          padding: .75rem 2rem;
          border: 2px solid var(--text-light);
          border-radius: 1rem;

          &:hover{
            background: var(--pink-400);
            border-color: var(--pink-400);
          }
        }
      }
    }
  }

  @media (max-width:992px){
    .wrapper{
      position: relative;
      nav, .auth-buttons{
        display: none;
      }

      .hamburger{
        display: block;
        position:  ${props => props.isBurgerOpen ? 'fixed' : 'absolute'};
        right:  ${props => props.isBurgerOpen ? '0' : '-1rem'};
        top: 1.25rem;
        z-index: 4;
      }

      .background{
        display: ${props => props.isBurgerOpen ? 'block' : 'none'}; // open
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100vw;
        height: 100vh; 
        background: rgba(11,11,15,.5);
        z-index: 2;
      }
      .burger-menu{
        min-width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        background: var(--blue-500);
        z-index: 3;
        transition: .2s;
        transform: ${props => props.isBurgerOpen ? 'translateX(0)' : 'translateX(100vw)'} ; // open

        img{
          margin-top: 4rem;
        }

        nav{
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;

          a{
            &.active{
              color: var(--pink-400);
              font-weight: bold;
            }
            &::after{
              display: none;
            }
          }
        }
      }
    }
  }

  @media(max-width: 1368px){
    height: 6.5rem;
    .wrapper{
      img{
        height: 85px;
      }
    }
  }
`;