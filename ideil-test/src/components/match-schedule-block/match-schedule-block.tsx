import MatchScheduleItem from "../match-schedule-item/match-schedule-item.tsx";
import {GamesItemProps} from "../../modules/types.ts";
import {FC} from "react";

interface MatchScheduleBlockProps {
    matches: GamesItemProps[]
    date: string
}

const MatchScheduleBlock: FC<MatchScheduleBlockProps> = ({matches, date}) => {

    return (
        <div className="match__schedule__block">
            <div style={{width: '100%', color: 'black', fontSize: 24, fontFamily: 'Formular', fontWeight: '700', wordWrap: 'break-word', marginBottom: 8, marginTop: 20}}>{date}</div>
            { matches.map( (match, index) => (
                <MatchScheduleItem match={match} key={index} lastElem={matches[matches.length - 1] === match}/>
            ))}
        </div>
    );
};

export default MatchScheduleBlock;