import MatchScheduleBlock from "../../components/match-schedule-block/match-schedule-block.tsx";
import "./index.css"

const MatchSchedule = () => {
    return (
        <div className="match__schedule">
            <MatchScheduleBlock />
            <MatchScheduleBlock />
            <MatchScheduleBlock />
            <div className="show__more">
                <b className="show__more__button">ПОКАЗАТЬ ЕЩЕ</b>
            </div>
        </div>
    );
};

export default MatchSchedule;