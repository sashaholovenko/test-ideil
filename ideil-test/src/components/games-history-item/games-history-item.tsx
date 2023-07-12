import "./index.css"
import naviLogo from "../../assets/navi-logo.svg"
import malta from "../../assets/malta-tournament.png"

const GamesHistoryItem = () => {
    return (
        <div className="games-history-item">
            <div className="games-history-item__time">
                <span>Playoffs - bo3</span>
                <time dateTime="2023-06-11 19:44+03:00">
                    <span>
                        11.06.2023, 19:44
                    </span>
                </time>
            </div>
            <div className="games-history-item__overview">
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <span>
                        <b>NaVi</b>
                    </span>
                    <div className="games-history-item__image-wrapper">
                        <img src={naviLogo} alt=""/>
                    </div>
                </div>
                <div className="games-history-item__score"> 2 - 1</div>
                <div style={{display: "flex", alignItems: "center", gap: 10}}>
                    <div className="games-history-item__image-wrapper">
                        <img src={naviLogo} alt=""/>
                    </div>
                    <span>
                        <b>NaVi</b>
                    </span>
                </div>
            </div>
            <div className="games-history-item__tournament">
                <div className="games-history-item__tournament-image-wrapper">
                    <img src={malta} alt=""/>
                </div>
                <span>Major</span>
            </div>
        </div>
    );
};

export default GamesHistoryItem;