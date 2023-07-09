
import "./index.css"
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";
import TeamLastGamesItem from "../team-last-games-item/team-last-games-item.tsx";
import {FC, JSX} from "react";

interface TeamsLastGames {
    children: JSX.Element
}
// TODO: fix inline styles and naming of the reusable component

const TeamsLastGames: FC<TeamsLastGames> = ({children}) => {
    return (
        <div>
            {children}
            <div className="last__games">
                <div className="last__games-first">
                    <h3>Пятница 25 июля 2021</h3>
                    { [1,2, 3].map( _elem => (
                        <TeamLastGamesItem/>
                    ))}
                </div>
                <div className="last__games-second">
                    <h3>Суббота 26 июля 2021</h3>
                    { [1,2, 3].map( _elem => (
                        <TeamLastGamesItem />
                    ))}
                </div>

            </div>
            <ShowMoreButton/>
        </div>



    );
};

export default TeamsLastGames;