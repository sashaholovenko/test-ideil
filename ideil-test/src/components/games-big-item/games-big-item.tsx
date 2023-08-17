import "./index.css"
import React from "react";
import MaltaTour from "../../assets/malta-tournament.png"
import { Match} from "../../modules/types.ts"
import {useNavigate} from "react-router-dom";
import {formatUrl, matchStatus} from "../../services/match-service.ts";


interface GamesBigItemProps {
    elem: Match
    index: number
    data: Match[]
}

const GamesBigItem: React.FC<GamesBigItemProps> = ({elem, data, index}) => {

    const navigate = useNavigate()
    // TODO: rework logic of checking online match

    return (

        <div className="games-large-item" onClick={() => {
            if (formatUrl(elem, data, index) === matchStatus.FINISHED_NO_NEXT || matchStatus.ONGOING) {
                navigate(`matches/${elem.attributes.teams.data[0].attributes.shortName}-vs-${elem.attributes.teams.data[1].attributes.shortName}`, {state: {id: elem.id, index: true}})
            } else {
                navigate(`matches/${elem.attributes.teams.data[0].attributes.shortName}-vs-${elem.attributes.teams.data[1].attributes.shortName}/${2023}-${12}-${10}`, {state: {id: elem.id, index: false}})
            }
        }}>
            <div className="games-large-item__format"><p>bo5</p></div>
            <div className="games-large-item__status">
                <div className="games-large-item__status-logo"></div>
                <p>идет вторая карта</p>
            </div>
            <div className="games-large-item__score"><p>{elem.attributes.score}</p></div>
            <div className="games-large-item__teams">
                <div className="games-large-item__teams-info">
                    <div className="games-large-item__logo__wrapper" >
                        <img src={"/src/assets/" + elem.attributes.teams.data["0"].attributes.shortName + ".svg"} style={{width: 57, height: 40}} alt=""/>
                    </div>
                    <p>{elem.attributes.teams.data["0"].attributes.name}</p>
                </div>
                <div className="games-large-item__teams-info">
                    <div className="games-large-item__logo__wrapper">
                        <img src={"/src/assets/" + elem.attributes.teams.data["1"].attributes.shortName + ".svg"} alt="" style={{width: 57, height: 40}}/>
                    </div>
                    <p>{elem.attributes.teams.data["1"].attributes.name}</p>
                </div>
            </div>

            <div className="games-large-item__status-text"><p className="red-text">LIVE</p></div>
            <div className="games-large-item__tournament-info">
                <img src={MaltaTour} alt=""/>
                <p>{elem.attributes.tournament}</p>
            </div>
        </div>
    );
};

export default GamesBigItem;