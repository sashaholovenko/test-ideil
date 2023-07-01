import GamesBigItem from "../../components/games-big-item/games-big-item.tsx";
import GamesNormalItem from "../../components/games-normal-item/games-normal-item.tsx";
import MatchSchedule from "../match-schedule/match-schedule.tsx";


const MatchesBlock = () => {
    return (
            <div className="games">
                <div className="games__large">
                    {[1, 2 ,3].map((elem) => (
                        <GamesBigItem elem={elem}/>
                    ))}
                </div>

                <div className="games__normal">
                    {[1, 2, 3, 4, 1, 2, 3, 4].map( (_elem, index) => (
                        <GamesNormalItem key={index} />
                    ))}
                </div>
                <MatchSchedule/>
            </div>
    );
};

export default MatchesBlock;