import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";
import twitterLogo from "../../assets/twitter-logo-small.svg"
import facebookLogo from "../../assets/facebook-logo-small.svg"
import "./index.css"
import GameSection from "../../modules/game-section/game-section.tsx";
import {useEffect, useState} from "react";
import SubscribeSection from "../../modules/subscribe-section/subscribe-section.tsx";
import GamesPredictions from "../../modules/games-predictions/games-predictions.tsx";
import {Match} from "../../modules/types.ts";
import {Helmet} from "react-helmet";
// import {teams} from "../../modules/types.ts";

// interface gameProps {
//     data: {
//         id: number
//         attributes: {
//             formatOfMatch: string
//             matchDate: string
//             score: string
//             stageOfMatch: string
//             teams: teams
//         }
//     }
//
// }

const GamePage = () => {
    const filters = ["Общая информация", "Стрим", "Команды и составы", "Результаты матча", "Предстоящие матчи", "Частые вопросы"]

    // @ts-ignore
    const [game, setGame] = useState<Match>({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch("http://localhost:1337/api/matches/2?populate=teams.players")
            .then( responce => {
                if (responce.ok) {
                    return responce.json() as Promise<Match>
                }
                throw responce
            })
            .then( data => {
                setGame(data.data)
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) return (
        <div style={{width: "100%", height: 700, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Loading....</h1>
        </div>
    );
    if (error) return "Error!";

    return (
        <>
            <Helmet>
                <meta
                    name="describtion"
                    content={`Page of the game between ${game.attributes.teams.data[0].attributes.name} and ${game.attributes.teams.data[1].attributes.name}`}
                />
                <title>{`${game.attributes.teams.data[0].attributes.name} vs ${game.attributes.teams.data[1].attributes.name}. Stats, Face to Face Games, Results`}</title>
            </Helmet>
            <main>
                <PageSectionHeader value={"Матч " + `${game.attributes.teams.data[0].attributes.name}` + " - " + `${game.attributes.teams.data[1].attributes.name}` + " завершен"} fontSize={30}/>
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
                <GameSection game={game}/>
            </main>
            <GamesPredictions />
            <SubscribeSection />
        </>
    );
};

export default GamePage;