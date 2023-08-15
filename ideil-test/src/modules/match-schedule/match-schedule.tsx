import MatchScheduleBlock from "../../components/match-schedule-block/match-schedule-block.tsx";
import "./index.css"
import {GamesItemProps, Match} from "../types.ts";
import {FC, useEffect, useState} from "react";
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";

interface MatchScheduleProps {
    matches: GamesItemProps[]
}

const MatchSchedule: FC<MatchScheduleProps>= ({matches}) => {

    const [filteredMatches, setFiltered] = useState([])

    // TODO: fix filtration by data
    // TODO: make new strapi archive

    useEffect(() => {
        function groupMatchesByDay(matches: object[]) {
            const matchesByDay: object = {};

            matches.forEach((match) => {
                const matchDate: string = new Date(match.attributes.matchDate).toISOString().split('T')[0];

                if (!matchesByDay[matchDate]) {
                    matchesByDay[matchDate] = [];
                }

                matchesByDay[matchDate].push(match);
            });

            return matchesByDay;
        }

        // Matches by days
        const matchesByDay = groupMatchesByDay(matches);

        // making object matchesByDay in array for better mapping
        const matchesArray = Object.values(matchesByDay);

        setFiltered(matchesArray)

        function showUpcoming (matches) {
            const currentDate = new Date()

            const upcomingMatches = matches.filter( elem => {
                return new Date(elem[0].attributes.matchDate) > currentDate
            })

            return upcomingMatches
        }
        setFiltered(showUpcoming(matchesArray))


    }, [])



    return (
        <div className="match-schedule">
            { filteredMatches.length === 0 ?
                <div style={{fontSize: 32, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 800, height: 200}}>
                    <span>Нету ближайших матчей</span>
                </div>
                :
                filteredMatches.map( (elem: Match[]) => (
                    <MatchScheduleBlock key={elem[0].id} matches={elem} />
                ))
            }
            <ShowMoreButton/>
        </div>
    );
};

export default MatchSchedule;