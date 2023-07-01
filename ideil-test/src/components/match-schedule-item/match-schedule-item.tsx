import "./index.css"
import React from "react";
import MaltaTour from "../../assets/test.svg";
import NaviLogo1 from "../../assets/navinah.png";
import GambitLogo from "../../assets/gambit-logo.png";

interface MatchScheduleItem {
    lastElem: boolean
}

const MatchScheduleItem: React.FC<MatchScheduleItem> = ({lastElem}) => {


    return (
        <div className={lastElem ? "match__schedule__item bottom_border" : "match__schedule__item"}>
            <div className="match__schedule__stage"><p>1-4 финала <br/>bo3</p></div>
            <div className="match__schedule__preview">
                <p className="team__name">Natus Vincere</p>
                <div className="match__schedule_item__logo">
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'white',
                        borderRadius: 60,
                        borderLeft: '0.50px #F6F6FA solid',
                        borderTop: '0.50px #F6F6FA solid',
                        borderRight: '0.50px #F6F6FA solid',
                        borderBottom: '0.50px #F6F6FA solid',
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={NaviLogo1} alt="" style={{width: 38, height: 26}}/>
                    </div>
                </div>
                <div className="match__schedule__time">
                    <p className="time__zone">GTM-3</p>
                    <time className="time__match__start">19-00</time>
                </div>
                <div className="match__schedule_item__logo">
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'white',
                        borderRadius: 60,
                        borderLeft: '0.50px #F6F6FA solid',
                        borderTop: '0.50px #F6F6FA solid',
                        borderRight: '0.50px #F6F6FA solid',
                        borderBottom: '0.50px #F6F6FA solid',
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={GambitLogo} alt=""/>
                    </div>

                </div>
                <div>
                    <p className="team__name">Gambit</p>
                </div>
            </div>
            <div className="match__schedule__tournament">
                <div className="tournament__logo__wrapper">
                    <img src={MaltaTour} alt="" style={{width: 37, height: 17}}/>

                </div>
                <p className="tournament__name">BLAST Premier Final Blast Fall Groups 2021</p>
                <div className="drop__logo"><img alt=""/></div>

            </div>
        </div>
    );
};

// @ts-ignore
export default MatchScheduleItem;