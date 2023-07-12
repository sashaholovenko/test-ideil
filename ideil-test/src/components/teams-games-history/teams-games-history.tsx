import GamesHistoryItem from "../games-history-item/games-history-item.tsx";
import "./index.css"
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";

const TeamsGamesHistory = () => {
    return (
        <div className="games-history">
            <h2>История встреч между G2 и NaVi</h2>
            <div className="game-history-wrapper">
                {[1,2,3].map( _elem => (
                        <GamesHistoryItem/>
                    )
                    )}
            </div>
            <ShowMoreButton />
        </div>
    );
};

export default TeamsGamesHistory;