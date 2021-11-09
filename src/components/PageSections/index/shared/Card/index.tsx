import { Container } from "./styles";

interface CardProps {
  image?: string;
}

export function Card ({image}: CardProps) {
  return (
    <Container>
      { image ? (
        <img src={image} alt="" />
      ) : (<></>)}
    </Container>
  )
}