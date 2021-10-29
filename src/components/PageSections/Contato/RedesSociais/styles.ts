import styled from "styled-components";

export const Container = styled.section`
  margin: 5rem auto;
  max-width: 1320px;

  .wrapper{    
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    color: var(--text-light);
  }
  
  .image, .content{
    width: 50%;
    padding: 2rem;
  }
  
  .content{
    text-align: left;
    padding-left: 4rem;
    h2{
      margin-bottom: 1rem;
    }
    p{
      margin-bottom: 2.5rem;
      max-width: 540px;
    }

    a{
      display: inline-flex;
      align-items: center;
      width: 100%;
      color: var(--text-light);
      transition: .2s;
      &+a {
        margin-top: 1rem;
      }

      &:hover{
        color: var(--pink-500)
      }

      .image-wrapper{
        /* display: inline; */
        width: 1.75rem;
        height: 1.75rem;
        /* padding: .2rem; */
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--pink-500);
        margin-right: 1rem;
      }
      img{
        width: 1rem;
        height: 1rem;
      }
    }
  }
  
  .image{
    width: 50%;
    img{
      width: 100%;
      border-radius: 1rem;
    }
  }

  .background{
    position: absolute;
    width: 100%;
    height: 75%;
    background:var(--blue-500);
    top: 12.5%;
    left: 0%;
    z-index: -1;
    border-radius: 1rem;
  }

`;