import MatchScheduleBlock from "../../components/match-schedule-block/match-schedule-block.tsx";
import "./index.css"
import {GamesItemProps} from "../types.ts";
import {FC} from "react";
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";

interface MatchScheduleProps {
    matches: GamesItemProps[]
}

const MatchSchedule: FC<MatchScheduleProps>= ({matches}) => {

    return (
        <div className="match__schedule">
            <MatchScheduleBlock matches={matches.slice(0, 3)} date="Пятница 30 июля 2021"/>
            <MatchScheduleBlock matches={matches.slice(3)} date="Среда 22 0июля 2021"/>
            <ShowMoreButton/>
        </div>
    );
};

export default MatchSchedule;