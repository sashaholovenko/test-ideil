import MatchScheduleItem from "../match-schedule-item/match-schedule-item.tsx";
import { Match} from "../../modules/types.ts";
import {FC} from "react";
import formatDate from "../../services/date-service.ts";

interface MatchScheduleBlockProps {
    matches: Match[]

}

const MatchScheduleBlock: FC<MatchScheduleBlockProps> = ({matches}) => {

    function formatedDate() {

        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "Europe/Kiev",
        }

        return formatDate(matches[0].attributes.matchDate, "ru-Ru",options).charAt(0).toUpperCase() + formatDate(matches[0].attributes.matchDate, "ru-Ru",options).slice(1)
    }

    return (
        <>
             <div className="match-schedule-wrapper">{formatedDate()}</div>
            <table className="match-schedule-item">
                <tbody>
                { matches.map( match => (
                    <MatchScheduleItem match={match} key={match.id} />
                ))}
                </tbody>

            </table>

        </>
    );
};

export default MatchScheduleBlock;