import MatchScheduleItem from "../match-schedule-item/match-schedule-item.tsx";
import {GamesItemProps, Match} from "../../modules/types.ts";
import {FC} from "react";

interface MatchScheduleBlockProps {
    matches: Match[]
    date: string
}

const MatchScheduleBlock: FC<MatchScheduleBlockProps> = ({matches, date}) => {


    return (
        <>
            <div className="match-schedule-wrapper">{date}</div>
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