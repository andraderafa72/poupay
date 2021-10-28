import { Container } from "./styles";
import image from './assets/image.png';

export function NossaHistoria() {
  return (
    <Container>
      <div className="wrapper">

        <div className="image">
          <img src={image} alt="" />
        </div>

        <div className="content">
          <h3>Nossa história</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Bibendum est ultricies integer quis. Iaculis urna id volutpat lacus laoreet. 
            Mauris vitae ultricies leo integer malesuada. Ac odio tempor orci 
            dapibus ultrices in. Egestas diam in arcu cursus euismod. 
            Dictum fusce ut placerat orci nulla. Tincidunt ornare massa eget 
            egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi 
            ipsum faucibus. Fusce id velit ut tortor pretium. Massa ultricies 
            mi quis hendrerit dolor magna eget. Nullam eget felis eget nunc lobortis. 
            Faucibus ornare suspendisse sed nisi. Sagittis eu
          </p>
        </div>

        <div className="background"></div>

      </div>
    </Container>
  );
}