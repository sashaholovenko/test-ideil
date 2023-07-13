import "./index.css"
import React from "react";
import MaltaTour from "../../assets/test.svg";
import {teams} from "../../modules/types.ts";
import formatDate from "../../services/date-service.ts";

interface MatchScheduleItem {
    match: {
        id: number
        attributes: {
            matchDate: string
            score: string | null
            stageOfMatch: string
            teams: teams
            winner: string
            formatOfMatch: string
        }

    }
}

const MatchScheduleItem: React.FC<MatchScheduleItem> = ({match}) => {


    const formDate = formatDate(match.attributes.matchDate).split(",")[1].split(" ")
    console.log(formDate)
    return (
                <tr>
                    <td style={{width: "20%"}}><p>{match.attributes.stageOfMatch}
                        <br/>{match.attributes.formatOfMatch}</p></td>
                    <td style={{width: "60%"}}>
                            <div className="match-schedule-item-main">
                                <div className="match-schedule-item-main__first-team">
                                    <p className="match-schedule-item-main__first-team-name">{match.attributes.teams.data[0].attributes.name}</p>
                                    <div className="match-schedule-item__logo">
                                        <div className="match-schedule-item__image-wrapper" >
                                            <img src={"/src/assets/" + match.attributes.teams.data[0].attributes.shortName + ".svg"} alt=""
                                                 style={{width: 38, height: 26}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="match-schedule-item-main__time">
                                    <p className="match-schedule-item-main__time-zone">{formDate[2]}</p>
                                    <time className="match-schedule-item-main__start">{formDate[1]}</time>
                                </div>
                                <div className="match-schedule-item-main__second-team">
                                    <div className="match-schedule-item__logo">
                                        <div className="match-schedule-item__image-wrapper" >
                                            <img src={"/src/assets/" + match.attributes.teams.data[1].attributes.shortName + ".svg"} alt=""
                                                 style={{width: 38, height: 26}}/>
                                        </div>

                                    </div>
                                    <div>
                                        <p className="team__name">{match.attributes.teams.data[1].attributes.name}</p>
                                    </div>
                                </div>
                            </div>
                    </td>
                    <td className="match-schedule-item-last">
                            <div className="match-schedule-item-last__tournament">
                                <div className="match-schedule-item-last__logo-wrapper">
                                    <img src={MaltaTour} alt="" style={{width: 37, height: 17}}/>

                                </div>
                                <p className="match-schedule-item-last__tournament-name">BLAST Premier Final Blast Fall Groups 2021</p>
                                <div className="match-schedule-item-last__drop"><img alt=""/></div>

                            </div>
                    </td>
                </tr>
    );
};

// @ts-ignore
export default MatchScheduleItem;