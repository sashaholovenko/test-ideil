import "./index.css"
import g2Logo from "../../assets/G2.svg"
import naviLogo from "../../assets/navi-logo.svg"
import PlayersStats from "../../components/players-stats/players-stats.tsx";



const GameResults = () => {
    return (
        <div>
            <h1>Результаты матча</h1>
            <div className="game__results__header">
                <div><h2>Карта Mirage</h2></div>
                <div className="game__results__score ">
                    <div className="game__results__team__logo">
                        <img src={g2Logo} alt="ogLogo" style={{width: 57, height: 40}}/>
                    </div>
                    <div className="game__results__score__elem"><p>9 - 16</p></div>
                    <div className="game__results__team__logo">
                        <img src={naviLogo} alt="naviLogo" style={{width: 57, height: 40}}/>

                    </div>
                </div>
                <div className="game__results__maps__tab">
                    <p>9-6 / 7-3</p>
                </div>
            </div>
            <PlayersStats><b>Статистика игроков</b></PlayersStats>
        </div>
    );
};

export default GameResults;