import MatchScheduleItem from "../match-schedule-item/match-schedule-item.tsx";
import {GamesItemProps, Match} from "../../modules/types.ts";
import {FC} from "react";

interface MatchScheduleBlockProps {
    matches: Match[]
    date: string
}

const MatchScheduleBlock: FC<MatchScheduleBlockProps> = ({matches, date}) => {

    console.log(matches)

    return (
        <>
            <div style={{width: '100%', color: 'black', fontSize: 24, fontFamily: 'Formular', fontWeight: '700', wordWrap: 'break-word', marginBottom: 8, marginTop: 20}}>{date}</div>
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