import styled from "styled-components";

export const Container = styled.section`
  max-width: 1320px;
  margin: 5rem auto 15rem;
  padding: 2rem;
  gap: 3rem; 
  display: flex;
  p{
    color: var(--text-body);
    font-size: 1rem;
    text-align: justify;
  }

  .left{
    position: relative;

    .blob{
      position: absolute;
      top:-20%;
      left: -100%;
      z-index: -1;
    }

    img:not(.blob){
      transform: translateX(-25%);
    }
  }

  .right{
    header{
      h2{

      }
      p{

      }
    }

    form{
      margin-top: 4rem;
      .input-group{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }

      label{
        color: var(--text-body);
        font-size: .9rem;
      }

      input, textarea, label.file{
        width: 100%;
        background: transparent;
        border: none;
        /* height: 2.5rem; */
        padding:1rem 1rem .5rem;
        border-bottom: 1px solid #cecece;
        color: var(--text-dark);
        margin-bottom: 2rem;
        transition: .2s;
        
        font-size: 1rem;
        &::placeholder{
          color: var(--text-dark);
          transition: .2s;
          font-size: .9rem;
        }

        &:hover{
          border-bottom-color: var(--pink-400);
        }

        &:focus{
          outline: none;
          border-bottom-color: var(--pink-500);

          &::placeholder{
            color: var(--text-body);
          }

        }
      }

      input[type="file"]{
        display: none;
      }

      label.file{
        font-size: .95rem;
      }

      textarea{
        resize:none;
      }

      button{
        display: block;
        margin-left: auto;
      }
    }
  }

  @media(max-width: 1380px){
    .left{
      .blob{
        left: -75%;
        transform: scale(.75);
      }

      img:not(.blob){
        transform: translateX(-15%) scale(.8);
      }
    }
  }
  
  @media(max-width: 1024px){
    margin-bottom: 3rem;
    .left{
      display: none;
    }
    .right{
      margin: 0 auto;
      width: 75%;
    }
  }

  @media(max-width:768px){
    .right{
      width: 100%;
    }
  }
`;