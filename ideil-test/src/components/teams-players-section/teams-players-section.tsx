import "./index.css"
import TeamItem from "../team-item/team-item.tsx";
import {FC} from "react";


interface TeamsPlayersSection {
}

const TeamsPlayersSection: FC<TeamsPlayersSection> = ( ) => {

    return (
        <div className="teams-players-section">
            <h1 >Команды и составы</h1>
            <div className="teams-squads">
                    <TeamItem />
            </div>
        </div>
    );
};

export default TeamsPlayersSection;