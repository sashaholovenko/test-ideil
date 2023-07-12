import "./index.css"
import GameSummary from "../../components/game-summary/game-summary.tsx";
import TeamsPlayersSection from "../../components/teams-players-section/teams-players-section.tsx";
import PlayersStats from "../../components/players-stats/players-stats.tsx";
import GameResults from "../game-results/game-results.tsx";
import TeamGames from "../team-games/team-games.tsx";
import {Match} from "../types.ts";
import {FC} from "react";

interface GameSectionProps {
    game: Match
}

const GameSection: FC<GameSectionProps> = ({game}) => {

    console.log(game)


    return (
        <div className="game-section">

            <GameSummary game={game}/>
            <TeamsPlayersSection teams={game.attributes.teams.data}/>
            <h1>Статистика игроков</h1>
            <PlayersStats game={game} img={true}/>
            <GameResults game={game}/>
            <TeamGames />
        </div>
    );
};

export default GameSection;