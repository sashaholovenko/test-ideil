
import "./index.css"
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";
import TeamLastGamesItem from "../team-last-games-item/team-last-games-item.tsx";


const TeamsLastGames = () => {
    return (
        <div>
            <h2 style={{fontSize: "30px", marginBottom: 20}}>Прошедшие матчи</h2>
            <div className="last-games">
                <div className="last-games__first">
                    <h3>Пятница 25 июля 2021</h3>
                    { [1,2, 3].map( elem => (
                        <TeamLastGamesItem key={elem}/>
                    ))}
                </div>
                <div className="last-games__second">
                    <h3>Суббота 26 июля 2021</h3>
                    { [4,5, 6].map( elem => (
                        <TeamLastGamesItem key={elem}/>
                    ))}
                </div>

            </div>
            <ShowMoreButton/>
        </div>



    );
};

export default TeamsLastGames;