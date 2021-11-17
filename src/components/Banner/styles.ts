import styled from "styled-components";

interface MainBannerProps {
  page: string;
}

export const Container = styled.section<MainBannerProps>`
  padding: 2rem;
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 3.5rem;
  .wrapper{
    max-width: 1320px;   
    display: flex;
    width: 100%;
    margin: 0 auto;
  }

  .image{
    position: absolute;
    z-index: -1;
    top: 50%;
    right: 0;
    height: 525px;
    max-height: 80vh;
    max-width: 60%;
    transform: translateY(-50%);
    overflow: hidden;
    border-radius: 1rem 0 0 1rem;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    @media(max-width:1024px){
      max-width: 50%;
    } 
    @media(max-width:768px){
      height: 340px;
      max-width: 55%;
    } 
  }

  .content{
    h3{
      display: inline-block;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    h1{
      max-width: 60%;
      font-size: ${props => props.page === 'Sobre nós' ? '2.5rem' : '3.5rem'};

      span{
        color: var(--blue-500);
        background: rgba(255,255,255,.5);
      }
    }
  }

  @media(min-width: 1600px){
    margin-top: 6rem;
  }
  @media(max-width: 860px){
    .content{
      h1{
        ${props => props.page === 'Sobre nós' ? 'font-size: 1.5rem' : ''};
        ${props => props.page === 'Sobre nós' ? 'max-width: 75%' : ''};
      }
    }
  }
  @media(max-width: 840px){
    .content{
      h1{
        ${props => props.page === 'Contato' ? 'max-width: 75%' : ''};
      }
    }
  }
  @media(max-width: 768px){
    min-height: 500px;
    .content{
      h1{
        ${props => props.page === 'Contato' ? 'font-size: 2.5rem' : ''};
      }
    }
  }

  @media(max-width:500px){
    .content {
      h3{
        font-size:1.5rem;
      }
      h1{
        ${props => props.page === 'Sobre nós' ? 'font-size:1.5rem' : 'font-size: 2.75rem'};
        ${props => props.page === 'Contato' ? 'font-size: 2rem' : 'font-size: 2.75rem'};
      }
    }
  }

  @media(max-width:425px){
    .content h1{
      ${props => props.page === 'Sobre nós' ? 'font-size: 1.5rem' : ''};
    }
  }
  @media(max-width:320px){
    .content {
      h3{
        max-width: 60%;
        background: rgba(255,255,255,.5);
      }
      h1{
        ${props => props.page === 'Sobre nós' ? 'max-width: 85%' : ''};
      }
    }
  }
`;