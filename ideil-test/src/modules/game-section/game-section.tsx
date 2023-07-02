import "./index.css"
import GameSummary from "../../components/game-summary/game-summary.tsx";
import TeamsPlayersSection from "../../components/teams-players-section/teams-players-section.tsx";
import PlayersStats from "../../components/players-stats/players-stats.tsx";
import GameResults from "../game-results/game-results.tsx";

const GameSection = () => {
    return (
        <div className="game__section">
            <GameSummary />
            <TeamsPlayersSection/>
            <h1>Статистика игроков</h1>
            <PlayersStats><p>Natus Vincere</p></PlayersStats>
            <PlayersStats><p>OG Esports</p></PlayersStats>
            <GameResults />
        </div>
    );
};

export default GameSection;