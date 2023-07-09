import "./index.css"
import naviLogo from "../../assets/navi-logo.svg"
import malta from "../../assets/malta-tournament.png"

const GamesHistoryItem = () => {
    return (
        <div className="games__history__item">
            <div className="games__history__item-time">
                <span>Playoffs - bo3</span>
                <time dateTime="2023-06-11 19:44+03:00">
                    <span>
                        11.06.2023, 19:44
                    </span>
                </time>
            </div>
            <div className="games__history__item-overview">
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <span>
                        <b>NaVi</b>
                    </span>
                    <div className="games__history-image-wrapper">
                        <img src={naviLogo} alt=""/>
                    </div>
                </div>
                <div className="games__history__item-score"> 2 - 1</div>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <div className="games__history-image-wrapper">
                        <img src={naviLogo} alt=""/>
                    </div>
                    <span>
                        <b>NaVi</b>
                    </span>
                </div>
            </div>
            <div className="games__history__item-tournament">
                <div className="games__history-tournament-image-wrapper">
                    <img src={malta} alt=""/>
                </div>
                <span>Major</span>
            </div>
        </div>
    );
};

export default GamesHistoryItem;