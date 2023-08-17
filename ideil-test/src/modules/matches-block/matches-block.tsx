import GamesBigItem from "../../components/games-big-item/games-big-item.tsx";
import GamesNormalItem from "../../components/games-normal-item/games-normal-item.tsx";
import MatchSchedule from "../match-schedule/match-schedule.tsx";
import {Match} from "../types.ts";
import {matchesApi} from "../../store/matchesApi.ts";
import {useAppSelector} from "../../store/hooks.ts";


const MatchesBlock = () => {

    const { data, isLoading, isError, error} = matchesApi.useGetAllMatchesQuery(null)
    const { filterBy, chosenTeam, chosenTournament } = useAppSelector(state => state.filtersReducer)
    function filterMatches ( matches: Match[], filterBy: string, teamName: string) {
        if (matches) {
            if ( filterBy === 'noFilter' ) {
                return matches.data
            }

            if ( filterBy === 'Teams') {
                if ( chosenTeam === 'all') {
                    return matches.data
                }
                return matches.data.filter((elem: Match) => (
                        elem.attributes.teams.data[0].attributes.name === teamName || elem.attributes.teams.data[1].attributes.name === teamName
                    )
                )
            }
            if ( filterBy === 'Tournaments') {
                if ( chosenTournament === 'all') {
                    return matches.data
                }
                return matches.data.filter((elem: Match) => (
                    elem.attributes.tournament === chosenTournament
                ))
            }

        }

    }

    const newArr = filterMatches(data, filterBy, chosenTeam, chosenTournament)

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
                    {newArr ? newArr.slice(0, 3).map((elem: Match, index: number)=> (
                        <GamesBigItem elem={elem} key={elem.id} index={index} data={data.data}/>
                    )) : null}
                </div>

                <div className="games-normal">
                    {newArr ? newArr.slice(3).map( (elem: Match, index: number) => (
                        <GamesNormalItem key={elem.id} elem={elem} data={data.data} index={index}/>
                    )) : null}
                </div>
                <MatchSchedule matches={data.data}/>
            </div>
    );
};

export default MatchesBlock;