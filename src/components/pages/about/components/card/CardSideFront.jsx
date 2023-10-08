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
                    <h3>Undergraduate of Dartmouth College, 2022.</h3>
                    <p><span>Majors:</span> Computer Science and Quantitiative Social Science</p>
                    <p><span>Awards:</span> Cum Laude, High Honors in Quantitative Social Science, Academic Excellence Citation in COSC 52: Full-Stack Web Development</p>
                </div>
                {/* <div className="front-title">{sideInfo?.title}</div>
                <div className="front-image">{sideInfo?.img}</div> */}
            </div>
        </div>
    )
}

export default CardSideFront;