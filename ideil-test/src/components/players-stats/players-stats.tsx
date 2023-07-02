import "./index.css"
import naviLogo from "../../assets/navi-logo.svg"
import PlayersStatsItem from "../players-stats-item/players-stats-item.tsx";
import {FC, JSX} from "react";

interface PlayersStatsProps {
    children: JSX.Element
}

const PlayersStats: FC<PlayersStatsProps> = ({children}) => {
    return (
        <div className="player__stats__section">
            <div className="player__stats__header">
                <div className="stats__header__team">
                    <div className="stats__header__team__wrapper">
                        <img src={naviLogo} alt="" style={{width: 30, height: 21}}/>
                    </div>
                    {children}
                </div>
                <div className="stats__header__names">
                    <div className="shn"><p>Maps</p></div>
                    <div className="shn"><p>K(HS)</p></div>
                    <div className="shn"><p>A(F)</p></div>
                    <div className="shn"><p>D</p></div>
                    <div className="shn"><p>KD Diff</p></div>
                    <div className="shn"><p>KAST</p></div>
                    <div className="shn"><p>ADR</p></div>
                    <div className="shn"><p>FK Diff</p></div>
                </div>
            </div>
            {[1,1,1, 1, 1].map( _elem => (
                <PlayersStatsItem />
            ))}

        </div>
    );
};

export default PlayersStats;