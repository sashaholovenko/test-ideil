import GamesBigItem from "../../components/games-big-item/games-big-item.tsx";
import GamesNormalItem from "../../components/games-normal-item/games-normal-item.tsx";
import MatchSchedule from "../match-schedule/match-schedule.tsx";
import {Match} from "../types.ts";
import {matchesApi} from "../../store/matchesApi.ts";


const MatchesBlock = () => {

    const { data, isLoading, isError, error} = matchesApi.useGetAllMatchesQuery(null)

    if ( isLoading ) return (
        <div style={{width: "100%", height: 700, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Loading....</h1>
        </div>
    );
    if ( isError ) {
        console.error(error)
        return "Error!";
    }

    return (
            <div className="games">
                <div className="games-large">
                    {data.data ? data.data.slice(0, 3).map((elem: Match, index)=> (
                        <GamesBigItem elem={elem} key={elem.id} index={index} data={data.data}/>
                    )) : null}
                </div>

                <div className="games-normal">
                    {data.data ? data.data.slice(3).map( (elem: Match, index) => (
                        <GamesNormalItem key={elem.id} elem={elem} data={data.data} index={index}/>
                    )) : null}
                </div>
                <MatchSchedule matches={data.data}/>
            </div>
    );
};

export default MatchesBlock;