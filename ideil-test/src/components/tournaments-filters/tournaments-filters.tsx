import "../../core/main/index.css"
import {useState} from "react";


const TournamentsFilters = () => {

    const [tournamentFilter, setTournament] = useState("Все")

    const tournaments = ["Все", "BLAST Premier: World Final 2021", "BLAST Premier: Fall Final 2021",
        "ESEA Season 38: Premier Division — Европа", "Intel Extreme Masters Season XVI — Winter", "DreamHack Open Winter 2021", "PGL Major Stockholm 2021"]


    return (
            <div className="tournaments__filters">
                {tournaments.map( (tournament, index) => (
                    <div key={index} className={tournament === tournamentFilter ? "tournament__item tournament__item__active" : "tournament__item"} onClick={() => setTournament(tournament)}>
                        <p>{tournament}</p>
                    </div>
                ))}
            </div>
    );
};

export default TournamentsFilters;