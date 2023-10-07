// import react from '../../../../../assets/react.svg';

const CardSideBack = ({ cardType, sideInfo }) => {

    const getBulletPoints = () => {
        return sideInfo?.bullets?.map((point) => {
            return (
                <li key="0">
                    {/* <img src={react} className="back-bullet-point" /> */}
                    <p><span>{point.bolded}</span>{point.text}</p>
                </li>
            )
        })
    }
    return (
        <div className={`card-side card-side_back card-side_back__${cardType}`}>
                  <div className={`back card-back__${cardType}`}>
                  <div className={`card-back-title card-back-title__${cardType}`}>
                        <h2>{sideInfo?.title}</h2>
                    </div>
                    <div className={`card-back-info card-back-info__${cardType}`}>
                        <div className="card-back-info-inner">
                            <div className="card-back-info-inner-text">
                                <ul>
                                    {getBulletPoints()}
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>
        </div>
    )
}

export default CardSideBack;