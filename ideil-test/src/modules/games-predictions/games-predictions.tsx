import GamesPredictionsItem from "../../components/games-predictions-item/games-predictions-item.tsx";
import "./index.css"

const GamesPredictions = () => {
    return (
        <aside className="games__predictions">
            <h1>ДРУГИЕ ПРОГНОЗЫ CS GO</h1>
            <div className="games__predictions-wrapper">
                <GamesPredictionsItem/>
                <GamesPredictionsItem/>
                <GamesPredictionsItem/>
                <GamesPredictionsItem/>
            </div>
        </aside>
    );
};

export default GamesPredictions;