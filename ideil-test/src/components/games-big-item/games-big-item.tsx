import "./index.css"
import React from "react";
// import NaviLogo from "../../assets/navi-logo.svg"
import NaviLogo1 from "../../assets/navinah.png"
// import EgLogo from "../../assets/EG.svg"
import MaltaTour from "../../assets/malta-tournament.png"
import OGlogo from "../../assets/og-logo.svg"
import {GamesItemProps} from "../../modules/types.ts"
import {useNavigate} from "react-router-dom";



const GamesBigItem: React.FC<GamesItemProps> = ({elem}) => {

    let navigate = useNavigate();


    return (

        <div className="games__large__item" onClick={() => navigate(`/${elem.id}`)}>
            <div className="game__format"><p>bo5</p></div>
            <div className="game__status">
                <div className="game__status__logo">+</div>
                <p>идет вторая карта</p>
            </div>
            <div className="game__score"><p>{elem.attributes.score}</p></div>
            <div className="game__teams">
                <div className="team__info">
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "white",
                        borderRadius: "60px",
                        borderLeft: "0.50px #F6F6FA solid",
                        borderTop: "0.50px #F6F6FA solid",
                        borderRight: "0.50px #F6F6FA solid",
                        borderBottom: "0.50px #F6F6FA solid",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={OGlogo} alt=""/>
                    </div>
                    <p>{elem.attributes.teams.data["0"].attributes.name}</p>
                </div>
                <div className="team__info">
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "white",
                        borderRadius: "60px",
                        borderLeft: "0.50px #F6F6FA solid",
                        borderTop: "0.50px #F6F6FA solid",
                        borderRight: "0.50px #F6F6FA solid",
                        borderBottom: "0.50px #F6F6FA solid",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={NaviLogo1} alt=""/>
                    </div>
                    <p>{elem.attributes.teams.data["1"].attributes.name}</p>
                </div>
            </div>

            <div className="game__status__text"><p className="red__text">LIVE</p></div>
            <div className="tournament__info">
                <img src={MaltaTour} alt=""/>
                <p>International 2023</p>
            </div>
        </div>
    );
};

export default GamesBigItem;