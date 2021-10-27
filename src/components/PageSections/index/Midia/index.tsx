import { Card } from "./Card";
import { Container } from "./styles";
import blob from './assets/blob.svg';
import blobB from './assets/blob-2.svg';

export function Midia(){
  return (
    <Container>
      <header>
        <h2>PouPay+ na mídia</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        </p>
      </header>
      
      <main>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>

      <img src={blob} alt="" className="blob" />
      <img src={blobB} alt="" className="blob-b" />
    </Container>
  );
}