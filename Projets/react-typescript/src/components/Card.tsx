type CardProps = {
  title: string;
  content: string;
};

const Card = ({ title, content }: CardProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Card;
