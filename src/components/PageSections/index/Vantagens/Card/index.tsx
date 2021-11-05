import { Card } from "./styles";

interface VantagemCardProps {
  image: string;
  title: string;
  content: string;
}

export default function VantagemCard({ title, content, image }: VantagemCardProps) {
  return (
    <Card>
      <div className="image">
        <img src={image} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{content}</p>
    </Card>
  )
}