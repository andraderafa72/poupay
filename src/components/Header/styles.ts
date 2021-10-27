import styled from "styled-components";

interface HeaderProps {
  page?: string
}

export const Container = styled.header<HeaderProps>`
  height: 8rem;
  width: 100%; 
  position:  ${props => props.page === 'home' ? 'absolute' : 'sticky' };
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.page === 'home' ? 'transparent' : 'var(--purple-400)' };
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .wrapper{
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;


    img{
      width: 350px;
      height: 106px;
      object-fit: cover; 
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
          font-size: 1.125rem;
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
          }

          &:hover{
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
        font-size: 1.125rem;
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
`;