const CardSideFront = ({ sideInfo, cardType }) => {
    return (
        <div className="card-side card-side_front">
            <div className={`front card-front__${cardType}`}>
                <div className='front-card-image-holder'>
                    <div className={`card-front-title card-front-title__${cardType}`}>
                        <p>{sideInfo.year}</p>
                        <h2>{sideInfo.title}</h2>
                    </div>
                    <img src={sideInfo.img} />
                </div>

                <div className={`card-front-info card-front-info__${cardType}`}>
                    <h3>{sideInfo.headline}</h3>
                    {sideInfo.details?.map((detail, index) => (
                        <p key={index}><span>{detail.label}:</span> {detail.value}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardSideFront;