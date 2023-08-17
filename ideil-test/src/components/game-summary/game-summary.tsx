import "./index.css"
import ScoreLine from "../../assets/score-line.svg"
import {FC, useContext} from "react";
import formatDate from "../../services/date-service.ts";
import {matchesApi} from "../../store/matchesApi.ts";
import {GameContext} from "../../core/game-page/game-page.tsx";

interface GameSummaryProps {

}

const GameSummary: FC<GameSummaryProps> = ({}) => {


    // TODO: make logic for correct time and date output
    const id = useContext(GameContext)
    const { data } = matchesApi.useGetOneMatchQuery(id).data
    const formDate = formatDate(data.attributes.matchDate, "en-GB")

    return (
        <div className="game__summary">
            <div className="summary__info">
                <b><p>D2CL 2021 S4</p></b>
                <time>
                    <p>{formDate}</p>
                </time>
            </div>
            <div className="summary-main">
                <div className="summary-main__team">
                    <div className="summary-main__team-photo">
                        <div className="summary-main__winner"><p>W</p></div>
                        <img src={"/src/assets/" + `${data.attributes.teams.data[0].attributes.shortName}` + ".svg"} alt="" style={{width: 133, height: 93}}/>
                    </div>
                    <div className="summary-main__team-name"><p>{data.attributes.teams.data[0].attributes.name}</p>
                    </div>
                    <div className="summary-main__last-matches">
                        <div className="round green"></div>
                        <div className="round red"></div>
                        <div className="round red"></div>
                        <div className="round green"></div>
                        <div className="round green"></div>
                    </div>
                </div>
                <div className="summary-main__score">
                    <div className="summary-main__score-count"><p>{data.attributes.score}</p></div>
                    <div className="summary-main__score-result">
                        <p>Победа {data.attributes.teams.data[0].attributes.shortName}</p></div>
                    <div className="summary-main__score-line"><img src={ScoreLine} alt="" style={{width: '100%'}}/></div>

                </div>
                <div className="summary-main__team looser">
                    <div className="summary-main__team-photo">
                        <div className="summary-main__winner"><p>W</p></div>
                        <img src={"/src/assets/" + `${data.attributes.teams.data[1].attributes.shortName}` + ".svg"} alt="" style={{width: 133, height: 93}}/></div>
                    <div className="summary-main__team-name"><p>{data.attributes.teams.data[1].attributes.name}</p>
                    </div>
                    <div className="summary-main__last-matches">
                        <div className="round green"></div>
                        <div className="round red"></div>
                        <div className="round red"></div>
                        <div className="round green"></div>
                        <div className="round green"></div>
                    </div>
                </div>
            </div>
            <div className="game-summary__tournament">
                <div className="game-summary__tournament-item"><h2>{data.attributes.tournament}</h2><p>Турнир</p></div>
                <div className="game-summary__tournament-item middle"><h2>1 000 000</h2><p>Призовой фонд</p></div>
                <div className="game-summary__tournament-item"><h2>8</h2><p>Команд соревновалось</p></div>
            </div>
        </div>
    );
};

export default GameSummary;