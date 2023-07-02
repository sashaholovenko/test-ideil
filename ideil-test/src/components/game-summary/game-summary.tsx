import "./index.css"
import G2logo from "../../assets/G2.svg"
import NaviLogo from "../../assets/navi-logo.svg"
import ScoreLine from "../../assets/score-line.svg"

const GameSummary = () => {
    return (
        <div className="game__summary">
            <div className="game__summary__info">
                <b><p>D2CL 2021 S4</p></b>
                <p>Jan 19, 17-50 GMT-3</p>
            </div>
            <div className="game__summary__main">
                <div className="summary__first">
                    <div className="summary__winner"><p>W</p></div>
                    <div className="summary__team__photo"><img src={G2logo} alt=""/></div>
                    <div className="summary__team__name"><p>G2</p></div>
                    <div className="summary__team__last__matches">
                        <div className="round green"></div>
                        <div className="round red"></div>
                        <div className="round red"></div>
                        <div className="round green"></div>
                        <div className="round green"></div>
                    </div>
                </div>
                <div className="summary__score">
                    <div className="summary__score__count"><p>2-0</p></div>
                    <div className="summary__score__result"><p>Победа G2</p></div>
                    <div className="summary__score__line"><img src={ScoreLine} alt="" style={{width: '100%'}}/></div>

                </div>
                <div className="summary__second looser">
                    <div className="summary__winner"><p>W</p></div>
                    <div className="summary__team__photo"><img src={NaviLogo} alt="" style={{width: 133, height: 93}}/></div>
                    <div className="summary__team__name"><p>NaVi</p></div>
                    <div className="summary__team__last__matches">
                        <div className="round green"></div>
                        <div className="round red"></div>
                        <div className="round red"></div>
                        <div className="round green"></div>
                        <div className="round green"></div>
                    </div>
                </div>
            </div>
            <div className="game__summary__tournament">
                <div className="summary__tournament__item"><h2>IEM XVI Кельн</h2><p>Турнир</p></div>
                <div className="summary__tournament__item middle"><h2>1 000 000</h2><p>Призовой фонд</p></div>
                <div className="summary__tournament__item"><h2>8</h2><p>Команд соревновалось</p></div>
            </div>
        </div>
    );
};

export default GameSummary;