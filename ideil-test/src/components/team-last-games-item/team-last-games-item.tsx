import naviLogo from "../../assets/navi-logo.svg";
import malta from "../../assets/malta-tournament.png";
import "./index.css"

const TeamLastGamesItem = () => {

    // TODO: make a normal logic of winning or losing small logo
    const a = false

    return (
        <div className="last__games-item">
            <div className="last__games-image-wrapper">
                { a ?
                    <div className="last__games-item-status winner__color">W</div>
                :
                    <div className="last__games-item-status looser__color">L</div>
                }
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <div className="last__games__item-score">2 - 1</div>
            <div className="last__games-image-wrapper">
                <img src={naviLogo} alt="" style={{width: 57, height: 40}}/>
            </div>
            <p>G2</p>
            <div className="last__games-tournament-image">
                <img src={malta} alt="" style={{width: 15, height: 15}}/>

            </div>
        </div>
    );
};

export default TeamLastGamesItem;