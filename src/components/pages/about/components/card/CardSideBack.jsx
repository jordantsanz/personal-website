const CardSideBack = ({ cardType, sideInfo }) => {
    return (
        <div className={`card-side card-side_back card-side_back__${cardType}`}>
                  <div className={`back card-back__${cardType}`}>
                  <div className={`card-back-title card-back-title__${cardType}`}>
                        <h2>Other experiences</h2>
                    </div>
                    <div className={`card-back-info card-back-info__${cardType}`}>
                        <div className="card-back-info-inner">
                            <div className="card-back-info-inner-text">
                                <p>Info goes here</p>
                            </div>

                        </div>

                    </div>

                </div>
        </div>
    )
}

export default CardSideBack;