import TeamsLastGames from "../../components/teams-last-games/teams-last-games.tsx";
import TeamsUpcomingGames from "../../components/teams-upcoming-games/teams-upcoming-games.tsx";
import TeamsGamesHistory from "../../components/teams-games-history/teams-games-history.tsx";
import "./index.css"
import TeamAboutGame from "../../components/team-about-game/team-about-game.tsx";

const TeamGames = () => {
    // TODO: Make one reusable component for last and upcoming games instead of <TeamsUpcomingGames/> and <TeamsLastGames/>

    return (
        <div className="team-games">
            <TeamsUpcomingGames />
            <TeamsLastGames />
            <TeamsGamesHistory/>
            <TeamAboutGame/>
        </div>
    );
};

export default TeamGames;