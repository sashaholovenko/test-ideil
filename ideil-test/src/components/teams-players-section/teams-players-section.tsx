import "./index.css"
import TeamItem from "../team-item/team-item.tsx";

import g2logo from "../../assets/G2.svg"


const TeamsPlayersSection = () => {

    const naVi = ['Natus Vincere'];

    return (
        <div className="teams__players__section">
            <h1 >Команды и составы</h1>
            <div className="teams__squads">
                    <TeamItem img={g2logo} team={naVi}/>
            </div>
        </div>
    );
};

export default TeamsPlayersSection;