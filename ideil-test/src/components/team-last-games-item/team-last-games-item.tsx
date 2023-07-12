import naviLogo from "../../assets/navi-logo.svg";
import malta from "../../assets/malta-tournament.png";
import "./index.css"

const TeamLastGamesItem = () => {

    // TODO: make a logic based on match data to show loosed team
    const a = false

    return (
        <div className="last-games-item">
            <div className="last-games-item__image-wrapper">
                { a ?
                    <div className="last-games-item__status winner-color">W</div>
                :
                    <div className="last-games-item__status looser-color">L</div>
                }
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <div className="last-games-item__score">2 - 1</div>
            <div className="last-games-item__image-wrapper">
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <p>G2</p>
            <div className="last-games-item__tournament-image">
                <img src={malta} alt="" style={{width: 15, height: 15}}/>

            </div>
        </div>
    );
};

export default TeamLastGamesItem;