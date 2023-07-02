import "./index.css"
import TeamItem from "../team-item/team-item.tsx";

import g2logo from "../../assets/G2.svg"
import naVilogo from "../../assets/navi-logo.svg"


const TeamsPlayersSection = () => {

    const naVi = ['Natus Vincere'];
    const og = ['OG Esports']

    return (
        <div className="teams__players__section">
            <h1 >Команды и составы</h1>
            <div className="teams__squads">
                    <TeamItem img={g2logo} team={naVi}/>
                    <TeamItem img={naVilogo} team={og}/>
            </div>
        </div>
    );
};

export default TeamsPlayersSection;