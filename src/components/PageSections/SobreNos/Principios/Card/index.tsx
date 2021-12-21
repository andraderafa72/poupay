import { Card } from "./styles";
interface PrincipiosCardProps {
  image: any;
  title: string;
  content: string
}

export function PrincipiosCard({ image, title, content }: PrincipiosCardProps) {
  return (
    <Card>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <p>{title}</p>
      <span>{content}</span>
    </Card>
  )
}