import csgoSVG from "../../assets/csgo-logo.svg";
import pugbSVG from "../../assets/pugb-logo.svg";
import apexSVG from "../../assets/apex-logo.svg";
import rainbowSVG from "../../assets/rainbow6-logo.svg";
import valorantSVG from "../../assets/valorant-logo.svg";
import dotaSVG from "../../assets/dota2-logo.svg";
import filterDrop from "../../assets/filter-drop.svg";
import filterUp from "../../assets/filter-up.svg";
import "../../core/main-page/index.css"

const MainFilters = () => {
    return (
        <div className="main-filters">
            <div className="game-filters">
                <div className="game-filters-item">
                    <img src={csgoSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">CS:GO</b>
                </div>
                <div className="game-filters-item">
                    <img src={pugbSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">PUGB</b>
                </div>
                <div className="game-filters-item">
                    <img src={apexSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">Apex Legends</b>
                </div>
                <div className="game-filters-item">
                    <img src={rainbowSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">Rainbow Six</b>
                </div>
                <div className="game-filters-item">
                    <img src={valorantSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">Valorant</b>
                </div>
                <div className="game-filters-item">
                    <img src={dotaSVG} alt="" className="game-filters-item__logo"/>
                    <b className="game-filters-item__text">Dota2</b>
                </div>
            </div>
            <div className="side-filters">
                <div className="time-status-filters">
                    <span>Текущие</span><span>Завершенные</span><span className="timezone">Предстоящие</span>
                </div>
                <div className="matches-filters">
                    <div style={{width: "50%", display: "flex", gap: 8}}>
                        <p>Команды</p>
                        <img src={filterDrop} alt=""/>
                    </div>

                    <div className="matches-filters-item choosen">
                        <p>Турниры</p>
                        <img src={filterUp} alt="" style={{maxWidth: 16}}/>
                    </div>
                    <div style={{width: "50%", display: "flex", gap: 8}}>
                        <p>Дата</p>
                        <img src={filterDrop} alt=""/>
                    </div>
                    <div style={{width: "50%", display: "flex", gap: 8}}>
                        <p>Тир</p>
                        <img src={filterDrop} alt=""/>
                    </div>
                </div>
            </div>

            <div style={{
                width: 125,
                height: 5,
                background: 'black',
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                marginLeft: 280
            }} className="line"/>
            <div style={{width: '100%', height: '100%', opacity: 0.05, border: '0.50px black solid'}}
                 className="picked__line"></div>
        </div>
    );
};

export default MainFilters;