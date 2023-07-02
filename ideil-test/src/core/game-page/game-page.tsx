import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";
import twitterLogo from "../../assets/twitter-logo-small.svg"
import facebookLogo from "../../assets/facebook-logo-small.svg"
import "./index.css"
import GameSection from "../../modules/game-section/game-section.tsx";

const GamePage = () => {

    const filters = ["Общая информация", "Стрим", "Команды и составы", "Результаты матча", "Предстоящие матчи", "Частые вопросы"]

    return (
        <div>
            <PageSectionHeader value="Матч G2 Esports - Natus Vincere (завершен)" fontSize={30}/>
            <div className="under__header__info">
                <div>
                    <p>Jun 4, 2020</p>
                </div>
                <div className="under__header__social">
                    <div className="social__item">
                        <img src={twitterLogo} alt=""/>
                        <p>Share</p>
                    </div>
                    <div className="social__item">
                        <img src={facebookLogo} alt=""/>
                        <p>Tweet</p>
                    </div>
                </div>
            </div>
            <div className="timezones__filters">
                <div className="matches__timezone">
                    {filters.map( filter => (
                        <span>{filter}</span>
                    ))}
                </div>

            </div>
            <div className="line__game"/>
            <div style={{width: '100%', height: '100%', opacity: 0.05, border: '0.50px black solid'}}
                 className="picked__line"></div>
            <GameSection />
        </div>
    );
};

export default GamePage;