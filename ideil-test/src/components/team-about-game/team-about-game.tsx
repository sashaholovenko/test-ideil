import "./index.css"
import ShowMoreButton from "../../UI/show-more-button/show-more-button.tsx";
import plus from "../../assets/plus-logo.svg"

const TeamAboutGame = () => {
    return (
        <div className="team__games_about">
            <h1 style={{fontSize: 42}}>О матче G2 Esports - Natus Vincere на Blast Premier Fall финал 2021</h1>
            <div style={{marginTop: 20}}>

                <p>Начало 2018 года для Na’Vi выдалось не самым лучшим. Из Dota-состава ушли два саппорта: RodjER и
                    SoNNeikO. Заменившие их новички в лице Lil и LeBron не смогли внести достаточного импакта для того,
                    чтобы команда смогли выйти на нужный игровой уровень. После того, как коллектив потерпел тяжелое
                    поражение в открытой на The International 2018, было принято решение о в инактив всех действующих
                    игроков.</p>
            </div>

            <div className="teams__games-expand">
            <b className="teams__games-expand-button">РАЗВЕРНУТЬ</b>
            </div>



            <div className="teams__games__about-questions">
                <h2>Частые вопросы</h2>
                <div className="teams__games-questions">
                    <span><b>Кто играет за Natus Vincere</b></span>
                    <img src={plus} alt=""/>
                </div>
                <div className="teams__games-questions">
                    <span><b>Какой ближайший матч NaVi CS:GO</b></span>
                    <img src={plus} alt=""/>
                </div>
                <div className="teams__games-questions">
                    <span><b>Какой ближайший турнир с участием NaVi CS:GO</b></span>
                    <img src={plus} alt=""/>
                </div>

                <ShowMoreButton/>

            </div>

        </div>
    );
};
// @ts-ignore
export default TeamAboutGame;