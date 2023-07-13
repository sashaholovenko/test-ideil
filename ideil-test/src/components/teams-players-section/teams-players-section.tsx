import "./index.css"
import TeamItem from "../team-item/team-item.tsx";
import {Team} from "../../modules/types.ts";
import {FC} from "react";


interface TeamsPlayersSection {
    teams: Team[]
}

const TeamsPlayersSection: FC<TeamsPlayersSection> = ({teams}) => {
    console.log(teams   )

    return (
        <div className="teams-players-section">
            <h1 >Команды и составы</h1>
            <div className="teams-squads">
                    <TeamItem teams={teams}/>
            </div>
        </div>
    );
};

export default TeamsPlayersSection;