import "./index.css"

import {FC} from "react";
import {Match} from "../../modules/types.ts";

interface PlayersStatsProps {
    game: Match
    img: boolean
}

const PlayersStats: FC<PlayersStatsProps> = ({game, img}) => {

    return (
        <div className="roasters">
            {game.attributes.teams.data.map( (team) => (
                <table key={team.id}>
                    <thead>
                    <tr>
                        {img ?
                            <th style={{width: "30%"}}><div className="roasters__team">
                                <img src={"/src/assets/" + `${team.attributes.shortName}` + ".svg"} alt="" style={{width: 50, height: 41}}/>
                                {team.attributes.name}
                            </div></th>
                            :
                            <th style={{width: "30%", textAlign: "start", fontSize: 18}}>
                                {team.attributes.name}
                            </th>
                        }

                        <th>Maps</th>
                        <th>K(HS)</th>
                        <th>A(F)</th>
                        <th>D</th>
                        <th>KD Diff</th>
                        <th>KAST</th>
                        <th>ADR</th>
                        <th>FK Diff</th>
                    </tr>
                    </thead>
                    <tbody>
                    {team.attributes.players.data.map( player => (
                        <tr key={player.id}>
                            <td>{player.attributes.nickname}</td>
                            <td>3</td>
                            <td>63 (20)</td>
                            <td>22 (6)</td>
                            <td>46</td>
                            <td>+17</td>
                            <td>73.4%</td>
                            <td>79.7</td>
                            <td>+7</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            ))}


        </div>


    );
};

export default PlayersStats;