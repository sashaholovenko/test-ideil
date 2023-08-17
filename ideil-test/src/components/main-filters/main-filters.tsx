import csgoSVG from "../../assets/csgo-logo.svg";
import pugbSVG from "../../assets/pugb-logo.svg";
import apexSVG from "../../assets/apex-logo.svg";
import rainbowSVG from "../../assets/rainbow6-logo.svg";
import valorantSVG from "../../assets/valorant-logo.svg";
import dotaSVG from "../../assets/dota2-logo.svg";
import "../../core/main-page/index.css"
import  {Dispatch, FC, SetStateAction } from "react";
import {useAppDispatch} from "../../store/hooks.ts";
import {filtersSlice} from "../../store/reducers/filter-slice.ts";

interface MainFiltersProps {
    filterBy: string,
    setFilterBy: Dispatch<SetStateAction<string>>
}


const MainFilters: FC<MainFiltersProps> = () => {

    const { setFilterBy, setChosenTeam, setChosenTournament} = filtersSlice.actions
    const dispatch = useAppDispatch()

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
                    <div>
                        <select name="teams-filter" id=""
                                className="teams-filter-select"
                                defaultValue="Команды" onChange={(e) => {
                            dispatch(setFilterBy("Teams"))
                            dispatch(setChosenTeam(e.currentTarget.value))
                        }}>
                            <option value="all">Команды</option>
                            <option value="Natus Vincere">Natus Vincere</option>
                            <option value="Liquid">Liquid</option>
                            <option value="mouz">mouz</option>
                            <option value="Virtus Pro">Virtus Pro</option>
                            <option value="BIG">BIG</option>
                            <option value="Gambit">Gambit</option>
                            <option value="G2 Esports">G2 Esports</option>
                            <option value="Evil Geniuses">Evil Geniuses</option>
                        </select>
                    </div>

                    <div>
                        <select name="tournaments-filter" id="" defaultValue="Турниры" className="tournaments-filters-select"
                                onChange={(e) => {
                                    dispatch(setFilterBy("Tournaments"))
                                    dispatch(setChosenTournament(e.currentTarget.value))
                                }}
                        >
                            <option value="all">Tournaments</option>
                            <option value="Major Rio 2022">Major Rio 2022</option>
                            <option value="International 2023">International 2023</option>
                            <option value="Malta 2022">Malta 2022</option>
                            <option value="IEM Katowice">IEM Katowice</option>
                        </select>
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