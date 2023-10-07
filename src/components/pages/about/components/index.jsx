import CardBody from './card/CardBody';
import CardTitle from './card/CardTitle';

function Card({ cardInfo }) {
  const {
    title, frontBody, backBody, img, cardType,
  } = cardInfo;

  return (
    <div className="about-card">
      <CardTitle title={title} />
      <CardBody frontBody={frontBody} backBody={backBody} img={img} cardType={cardType} />
    </div>
  );
}

export default Card;
