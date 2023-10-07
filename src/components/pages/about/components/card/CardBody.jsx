import CardSideFront from './CardSideFront';
import CardSideBack from './CardSideBack';

function CardBody({ frontBody, backBody, cardType }) {
  return (
    <div className="card-body">
      <CardSideFront sideInfo={frontBody} cardType={cardType} />
      <CardSideBack sideInfo={backBody} cardType={cardType} />
    </div>
  );
}

export default CardBody;
