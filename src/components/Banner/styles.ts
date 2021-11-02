import styled from "styled-components";
import sobrenos from './assets/sobrenos.png'
import planos from './assets/planos.png'
import ajuda from './assets/ajuda.png'
import contato from './assets/contato.png'
import privacidade from './assets/privacidade.png'

interface MainBannerProps {
  page: string;
}

export const Container = styled.section<MainBannerProps>`
  /* background-image: ${props => {
    switch (props.page) {
      case 'Sobre nós':
        return `url(${sobrenos})`
      case 'Planos e preços':
        return `url(${planos})`
      case 'Contato':
        return `url(${contato})`
      case 'Ajuda':
        return `url(${ajuda})`
      case 'Política de privacidade':
        return `url(${privacidade})`
    }
  }}; 
  background-position: right;
  background-size: 70%;
  background-repeat: no-repeat;*/

 
  padding: 2rem;
  min-height: 700px;
  display: flex;
  align-items: center;
  position: relative;

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
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
    }

    h1{
      font-size: 3.5rem;

      span{
        color: var(--blue-500);
        background: rgba(255,255,255,.5);
      }
    }
  }

  @media(max-width: 768px){
    padding-top: 3rem;
    margin-top: 3rem;
    min-height: 100%;
    .image{
      min-height: 410px;
    }
  }
`;