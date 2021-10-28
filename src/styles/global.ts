import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --pink-200: #FDBEDA;
    --pink-400: #F33E8F;
    --pink-500: #F83F8F;
   
    --blue-100: #D7C7F9;
    --blue-500: #5715E8;
    
    --purple-300: #7C41E9;
    --purple-400: #5C12E3;
    --purple-500: #8A5BED;
    
    --text-light: #F4F6F6;
    --text-dark: #10182B;
    --text-body: #868A93;

    --background-light: #FFF;
    --background-medium: #FAFBFB;
    --background-dark: #F4F6F6;
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    overflow-x: hidden;
    @media(max-width: 1080px){
      font-size: 93.75%;
    }

    @media(max-width: 768px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background-light);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button{
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  h2{
      font-size: 2.25rem;
  }

  button{
    cursor: pointer;
  }

  nav, ul{
    list-style: none;
  }
  
  a{
    text-decoration: none;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }
`
