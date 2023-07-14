import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";
import "./index.css"
import TeamsUpcomingGamesItem from "../team-upcoming-games-item/teams-upcoming-games-item.tsx";

const TeamsUpcomingGames = () => {
    return (
        <div>
            <h2 style={{fontSize: "30px", marginBottom: 20}}>Предстоящие матчи</h2>
            <div className="upcoming-games">
                <div className="upcoming-games__first">
                    <h3>Пятница 25 июля 2021</h3>
                    { [1,2, 3].map( elem => (
                        <TeamsUpcomingGamesItem key={elem}/>
                    ))}
                </div>
                <div className="upcoming-games__second">
                    <h3>Суббота 26 июля 2021</h3>
                    { [4,5, 6].map( elem => (
                        <TeamsUpcomingGamesItem key={elem}/>
                    ))}
                </div>

            </div>
            <ShowMoreButton/>
        </div>



    );
};

export default TeamsUpcomingGames;