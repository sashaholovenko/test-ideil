import MatchScheduleBlock from "../../components/match-schedule-block/match-schedule-block.tsx";
import "./index.css"
import {GamesItemProps} from "../types.ts";
import {FC} from "react";

interface MatchScheduleProps {
    matches: GamesItemProps[]
}

const MatchSchedule: FC<MatchScheduleProps>= ({matches}) => {

    return (
        <div className="match__schedule">
            <MatchScheduleBlock matches={matches.slice(0, 3)} date="Пятница 30 июля 2021"/>
            <MatchScheduleBlock matches={matches.slice(3)} date="Среда 22 0июля 2021"/>
            <div className="show__more">
                <b className="show__more__button">ПОКАЗАТЬ ЕЩЕ</b>
            </div>
        </div>
    );
};

export default MatchSchedule;