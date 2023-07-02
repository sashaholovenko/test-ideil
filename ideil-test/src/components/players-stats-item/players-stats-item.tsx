import "./index.css"

const PlayersStatsItem = () => {
    return (
        <div className="player__stats__item">
            <div className="player__stats__item__name">
                <p>s1mple</p>
            </div>
            <div className="player__stats__item__stats">
                <div className="pstis"><p>3</p></div>
                <div className="pstis"><p>63(20)</p></div>
                <div className="pstis"><p>22(6)</p></div>
                <div className="pstis"><p>46</p></div>
                <div className="pstis"><p>+17</p></div>
                <div className="pstis"><p>73.4%</p></div>
                <div className="pstis"><p>79.7</p></div>
                <div className="pstis"><p>+7</p></div>
            </div>
        </div>
    );
};

export default PlayersStatsItem;