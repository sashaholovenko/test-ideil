import naviLogo from "../../assets/navi-logo.svg";
import malta from "../../assets/malta-tournament.png";
import "./index.css"

const TeamsUpcomingGamesItem = () => {
    return (
        <div className="upcoming-games__item">
            <div className="upcoming-games__image-wrapper">
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <time dateTime="19:00">12:00</time>
            <div className="upcoming-games__image-wrapper">
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <p>G2</p>
            <div className="upcoming-games__tournament-image">
                <img src={malta} alt="" style={{width: 15, height: 15}}/>
            </div>
        </div>
    );
};

export default TeamsUpcomingGamesItem;