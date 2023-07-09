import "./index.css"
import egLogo from "../../assets/EG.svg"
import authorPic from "../../assets/alec-harber-journalist.png"
import betWinner from "../../assets/bet-winner.svg"

const GamesPredictionsItem = () => {
    return (
        <div className="games__predictions__item">
            <div className="games__predictions__item-preview">
                <div  className="games__predictions__item-logos">
                    <div className="games__prediction-image-wrapper">
                        <img src={egLogo} alt=""/>
                    </div>
                    <div className="games__prediction-coefficient">
                        <b>2.8</b>
                    </div>
                </div>
                <div className="games__predictions-time">
                    <time>
                        <span>21:00 GMT -3</span>
                        <br/>
                                <b>30 июл</b>
                    </time>
                    <img src={betWinner} alt=""/>
                </div>
                <div className="games__predictions__item-logos">
                    <div className="games__prediction-image-wrapper">
                        <img src={egLogo} alt=""/>
                    </div>
                    <div className="games__prediction-coefficient">
                        <b>2.8</b>
                    </div>
                </div>
            </div>
            <div className="games__predictions__item-info">
                <div>
                    <h3>Virtus.pro - Evil Geniuses Матч CS:GO</h3>
                </div>
                <div className="games__predictions-info-author">
                    <img src={authorPic} alt="" style={{width: 40, height: 40}}/>
                    <span><b>Alec Harber</b></span>
                </div>
            </div>
        </div>
    );
};

export default GamesPredictionsItem;