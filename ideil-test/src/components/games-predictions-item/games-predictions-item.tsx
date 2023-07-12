import "./index.css"
import egLogo from "../../assets/EG.svg"
import authorPic from "../../assets/alec-harber-journalist.png"
import betWinner from "../../assets/bet-winner.svg"

const GamesPredictionsItem = () => {
    return (
        <div className="games-predictions-item">
            <div className="games-predictions-item__preview">
                <div  className="games-predictions-item__logos">
                    <div className="games-prediction-item__image-wrapper">
                        <img src={egLogo} alt=""/>
                    </div>
                    <div className="games-prediction-item__coefficient">
                        <b>2.8</b>
                    </div>
                </div>
                <div className="games-predictions-item__time">
                    <time>
                        <span>21:00 GMT -3</span>
                        <br/>
                                <b>30 июл</b>
                    </time>
                    <img src={betWinner} alt=""/>
                </div>
                <div className="games-predictions-item__logos">
                    <div className="games-prediction-item__image-wrapper">
                        <img src={egLogo} alt=""/>
                    </div>
                    <div className="games-prediction-item__coefficient">
                        <b>1.3</b>
                    </div>
                </div>
            </div>
            <div className="games-predictions-item__info">
                <div style={{paddingTop: 20}}>
                    <h3>Virtus.pro - Evil Geniuses Матч CS:GO</h3>
                </div>
                <div className="games-predictions-item__author">
                    <img src={authorPic} alt="" style={{width: 40, height: 40}}/>
                    <span><b>Alec Harber</b></span>
                </div>
            </div>
        </div>
    );
};

export default GamesPredictionsItem;