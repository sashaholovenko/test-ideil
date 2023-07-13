import twitterLogo from "../../assets/twitter-logo-small.svg";
import facebookLogo from "../../assets/facebook-logo-small.svg";

const GamePageFilters = () => {

    const filters = ["Общая информация", "Стрим", "Команды и составы", "Результаты матча", "Предстоящие матчи", "Частые вопросы"]


    return (
        <>
            <div className="under__header__info">
                <div>
                    <time dateTime="04-07-2020">Jun 4, 2020</time>
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
                    {filters.map( (filter, index) => (
                        <span key={index}>{filter}</span>
                    ))}
                </div>

            </div>
            <div className="line__game"/>
            <div style={{width: '100%', height: '100%', opacity: 0.05, border: '0.50px black solid'}}
                 className="picked__line"></div>
        </>
    );
};

export default GamePageFilters;