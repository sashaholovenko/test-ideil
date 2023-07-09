import TeamsLastGames from "../../components/teams-last-games/teams-last-games.tsx";
import TeamsUpcomingGames from "../../components/teams-upcoming-games/teams-upcoming-games.tsx";
import TeamsGamesHistory from "../../components/teams-games-history/teams-games-history.tsx";
import "./index.css"
import TeamAboutGame from "../../components/team-about-game/team-about-game.tsx";

const TeamGames = () => {
    return (
        <div className="team__games">
            <TeamsUpcomingGames />
            <TeamsLastGames><h2 style={{fontSize: "30px", marginBottom: 20}}>Прошедшие матчи</h2></TeamsLastGames>
            <TeamsGamesHistory/>
            <TeamAboutGame/>
        </div>
    );
};

export default TeamGames;