import { Card } from "./styles";
import { ReactSVG } from 'react-svg'
import ill from './assets/desktop/SOS.svg'; 

interface SectionCardProps {
  section: string;
  title: string;
}

export function SectionCard ({section, title}: SectionCardProps) {
  return (
    <Card>
      <ReactSVG src={ill} />
    </Card>
  );
}