import "./index.css"
import GameSummary from "../../components/game-summary/game-summary.tsx";
import TeamsPlayersSection from "../../components/teams-players-section/teams-players-section.tsx";
import PlayersStats from "../../components/players-stats/players-stats.tsx";
import GameResults from "../game-results/game-results.tsx";
import TeamGames from "../team-games/team-games.tsx";
import {FC} from "react";

interface GameSectionProps {
}

const GameSection: FC<GameSectionProps> = ( ) => {

    return (
        <div className="game-section">

            <GameSummary/>
            <TeamsPlayersSection />
            <h1>Статистика игроков</h1>
            <PlayersStats img={true}/>
            <GameResults />
            <TeamGames />
        </div>
    );
};

export default GameSection;