import { Container } from "./styles";
import icon from '../assets/icon.svg';

interface RecursoCardProps {
  title: string;
  subtitle: string;
}

export function RecursoCard({ title, subtitle }: RecursoCardProps) {
  return (
    <Container>
      <img src={icon} alt="" />
      <div className="content">
        <strong>{title}</strong>
        <p>{subtitle}</p>
      </div>
    </Container>
  )
}