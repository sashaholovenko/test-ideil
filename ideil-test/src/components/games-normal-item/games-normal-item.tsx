import MaltaTour from "../../assets/malta-tournament.png";
import "./index.css"
import {FC, useEffect, useState} from "react";
import {GamesItemProps} from "../../modules/types.ts";
import {useNavigate} from "react-router-dom";

const GamesNormalItem: FC<GamesItemProps> = ({elem}) => {

    const [_onlineMatch, setOnline] = useState<boolean>()
    const [matchTime, setMatchTime] = useState<number[]>([])
    const [userTime, setUserTime] = useState<number[]>([])

    const months = ['янв' , 'фев' , 'мар' , 'апр' , 'май' , 'июн' , 'июл' , 'авг' , 'сен' , 'окт' , 'ноя' , 'дек']
    const navigate = useNavigate()


    useEffect(() => {


        // @ts-ignore
        const getTimeOfMatch = (value?: string) => {
            let date;
            if (value && typeof value === 'string') {
                date = new Date(value);
            } else {
                date = new Date()
            }
            const [month, day, year, hour, minutes, seconds] = [
                date.getMonth(),
                date.getDate(),
                date.getFullYear(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            ];
            return [year, month, day, hour, minutes, seconds]
        }

        const checkOnline = (userDate: number[], gameDate: number[]) => {
            for (let i = 0; i <= 2; i++) {
                if (userDate[i] === gameDate[i]) {
                    continue
                } else {
                    return false
                }
            }
            if ( userDate[3] >= gameDate[3]  && userDate[3] <= gameDate[3] ) {
                return true
            } else {
                return false
            }
        }
        setUserTime(getTimeOfMatch())

        setMatchTime(getTimeOfMatch(elem.attributes.matchDate))
        setOnline(checkOnline(userTime, matchTime))

    }, [])



    return (
        <div className="games__normal__item" onClick={() => navigate(`/${elem.id}`)}>
            <div className="game__format"><p>bo1</p></div>
            <div className="game__status">
                <div className={_onlineMatch ? "game__status__logo" : "game__status__logo red"}>+</div>
                <p>{_onlineMatch ? "онлайн" : "soon"}</p>
            </div>
            { _onlineMatch ? <div className="game__score"><p>{elem.attributes.score? "0 - 0" : "0 - 0"}</p></div>
                :
                <div className="game__date">
                    <p>{matchTime[3]}-{matchTime[4]} GMT - 3</p>
                    <h3>{matchTime[2]} {months[matchTime[2]]}</h3>
                </div>
            }
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
                        <img src={"/src/assets/" + elem.attributes.teams.data["0"].attributes.shortName + ".svg"} alt=""/>
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
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img src={"/src/assets/" + elem.attributes.teams.data["1"].attributes.shortName + ".svg"} alt="" style={{width: 57, height: 40}}/>
                    </div>
                    <p>{elem.attributes.teams.data["1"].attributes.name}</p>
                </div>
            </div>
            { _onlineMatch ?   <div className="game__status__text"><p className="red__text">LIVE</p></div>
            :
            null
            }
            <div className="tournament__info">
                <img src={MaltaTour} alt=""/>
                <p>International 2023</p>
            </div>
        </div>
    );
};

export default GamesNormalItem;