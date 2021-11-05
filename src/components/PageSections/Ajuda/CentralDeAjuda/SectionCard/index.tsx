import { Card } from "./styles";
import { ReactSVG } from 'react-svg'

interface SectionCardProps {
  ilustration: string;
  onClick: () => void;
}

export function SectionCard ({ilustration, onClick}: SectionCardProps) {
  return (
    <Card onClick={onClick}>
      <ReactSVG src={ilustration} />
    </Card>
  );
}