import "./index.css"
import React from "react";
import MaltaTour from "../../assets/malta-tournament.png"
import {GamesItemProps} from "../../modules/types.ts"
import {useNavigate} from "react-router-dom";



const GamesBigItem: React.FC<GamesItemProps> = ({elem}) => {

    let navigate = useNavigate();


    return (

        <div className="games-large-item" onClick={() => navigate(`/${elem.id}`)}>
            <div className="games-large-item__format"><p>bo5</p></div>
            <div className="games-large-item__status">
                <div className="games-large-item__status-logo">+</div>
                <p>идет вторая карта</p>
            </div>
            <div className="games-large-item__score"><p>{elem.attributes.score}</p></div>
            <div className="games-large-item__teams">
                <div className="games-large-item__teams-info">
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
                        <img src={"/src/assets/" + elem.attributes.teams.data["0"].attributes.shortName + ".svg"} style={{width: 57, height: 40}} alt=""/>
                    </div>
                    <p>{elem.attributes.teams.data["0"].attributes.name}</p>
                </div>
                <div className="games-large-item__teams-info">
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
                        <img src={"/src/assets/" + elem.attributes.teams.data["1"].attributes.shortName + ".svg"} alt="" style={{width: 57, height: 40}}/>
                    </div>
                    <p>{elem.attributes.teams.data["1"].attributes.name}</p>
                </div>
            </div>

            <div className="games-large-item__status-text"><p className="red-text">LIVE</p></div>
            <div className="games-large-item__tournament-info">
                <img src={MaltaTour} alt=""/>
                <p>International 2023</p>
            </div>
        </div>
    );
};

export default GamesBigItem;