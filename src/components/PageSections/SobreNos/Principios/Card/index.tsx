import { Card } from "./styles";
import creditCardImage from './credit-card.svg';
interface PrincipiosCardProps {
  image: any;
  title: string;
  content: string
}

export function PrincipiosCard({ image, title, content }: PrincipiosCardProps) {
  return (
    <Card>
      <div className="card-image">
        <img src={creditCardImage} alt="" />
      </div>
      <p>{title}</p>
      <span>{content}</span>
    </Card>
  )
}