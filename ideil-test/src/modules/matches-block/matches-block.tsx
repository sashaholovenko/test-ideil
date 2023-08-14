import GamesBigItem from "../../components/games-big-item/games-big-item.tsx";
import GamesNormalItem from "../../components/games-normal-item/games-normal-item.tsx";
import MatchSchedule from "../match-schedule/match-schedule.tsx";
import {useEffect, useState} from "react";
import {Match} from "../types.ts";


const MatchesBlock = () => {

    const [matches, setMatches] = useState<[]>([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("http://localhost:1337/api/matches?sort=matchDate:asc&populate=*")
            .then( responce => {
                if (responce.ok) {
                    return responce.json()
                }
                throw responce
            })
            .then( data => {
                setMatches(data.data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) return (
        <div style={{width: "100%", height: 700, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Loading....</h1>
        </div>
    );
    if (error) return "Error!";
    console.log(matches)

    return (
            <div className="games">
                <div className="games-large">
                    {matches ? matches.slice(0, 3).map((elem: Match, index)=> (
                        <GamesBigItem elem={elem} key={elem.id} index={index} data={matches}/>
                    )) : null}
                </div>

                <div className="games-normal">
                    {matches ? matches.slice(3).map( (elem: Match, index) => (
                        <GamesNormalItem key={elem.id} elem={elem} data={matches} index={index}/>
                    )) : null}
                </div>
                <MatchSchedule matches={matches}/>
            </div>
    );
};

export default MatchesBlock;