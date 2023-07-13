import MaltaTour from "../../assets/malta-tournament.png";
import "./index.css"
import {FC, useEffect, useState} from "react";
import {GamesItemProps} from "../../modules/types.ts";
import {useNavigate} from "react-router-dom";
import formatDate from "../../services/date-service.ts";

const   GamesNormalItem: FC<GamesItemProps> = ({elem}) => {

    const [onlineMatch, _setOnline] = useState<boolean>()
    // const [matchTime, setMatchTime] = useState<number[]>([])
    // const [userTime, setUserTime] = useState<number[]>([])

    const navigate = useNavigate()

    // TODO: rework logic of checking online match

    // useEffect(() => {
    //     @ts-ignore
    //     const getTimeOfMatch = (value?: string) => {
    //         let date;
    //         if (value && typeof value === 'string') {
    //             date = new Date(value);
    //         } else {
    //             date = new Date()
    //         }
    //         const [month, day, year, hour, minutes, seconds] = [
    //             date.getMonth(),
    //             date.getDate(),
    //             date.getFullYear(),
    //             date.getHours(),
    //             date.getMinutes(),
    //             date.getSeconds()
    //         ];
    //         return [year, month, day, hour, minutes, seconds]
    //     }
    //
    //     const checkOnline = (userDate: number[], gameDate: number[]) => {
    //         for (let i = 0; i <= 2; i++) {
    //             if (userDate[i] === gameDate[i]) {
    //                 continue
    //             } else {
    //                 return false
    //             }
    //         }
    //         if ( userDate[3] >= gameDate[3]  && userDate[3] <= gameDate[3] ) {
    //             return true
    //         } else {
    //             return false
    //         }
    //     }
    //     setUserTime(getTimeOfMatch())
    //
    //     setMatchTime(getTimeOfMatch(elem.attributes.matchDate))
    //     setOnline(checkOnline(userTime, matchTime))
    //
    // }, [])

    const formDate = formatDate(elem.attributes.matchDate).split(",")

    return (
        <div className="games-normal-item" onClick={() => navigate(`/${elem.id}`)}>
            <div className="games-normal-item__format"><p>bo1</p></div>
            <div className="games-normal-item__status">
                <div className={onlineMatch ? "games-normal-item__status-logo" : "games-normal-item__status-logo red"}>+</div>
                <p>{onlineMatch ? "онлайн" : "soon"}</p>
            </div>

            <div className="games-normal-item__teams">
                <div className="games-normal-item__teams-info">
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
                        <img src={"/src/assets/" + elem.attributes.teams.data["0"].attributes.shortName + ".svg"} alt=""/>
                    </div>
                    <p>{elem.attributes.teams.data["0"].attributes.shortName}</p>
                </div>
                { onlineMatch ? <div className="games-normal-item__score"><p>{elem.attributes.score? "0 - 0" : "0 - 0"}</p></div>
                    :
                    <div className="games-normal-item__date">
                        <p>{formDate[1]}</p>
                        <h3>{formDate[0]}</h3>
                    </div>
                }
                <div className="games-normal-item__teams-info">
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
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img src={"/src/assets/" + elem.attributes.teams.data["1"].attributes.shortName + ".svg"} alt="" style={{width: 57, height: 40}}/>
                    </div>
                    <p>{elem.attributes.teams.data["1"].attributes.shortName}</p>
                </div>
            </div>
            { onlineMatch ?   <div className="games-normal-item__status-text"><p className="red-text">LIVE</p></div>
            :
            null
            }
            <div className="games-normal-item__tournament-info">
                <img src={MaltaTour} alt=""/>
                <p>International 2023</p>
            </div>
        </div>
    );
};

export default GamesNormalItem;