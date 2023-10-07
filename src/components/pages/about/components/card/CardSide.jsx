function CardSide({ sideInfo, type, cardType }) {
  const renderFrontContent = () => {
    return (
      <div className={`front card-front__${cardType}`}>
        <div className="front-title">
          {sideInfo?.title}
        </div>
        <div className="front-image">{sideInfo?.img}</div>
      </div>
    );
  };

  const renderBackContent = () => {
    return (
      <div className={`back card-back__${cardType}`}>{sideInfo}</div>
    );
  };

  const renderSideContent = () => {
    let layout;
    if (type === 'front') {
      layout = renderFrontContent();
    } else {
      layout = renderBackContent();
    }
    return layout;
  };

  return (
    <div className={`card-side card-side_${type}`}>{renderSideContent()}</div>
  );
}
export default CardSide;
