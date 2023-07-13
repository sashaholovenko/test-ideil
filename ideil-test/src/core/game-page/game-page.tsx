import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";

import "./index.css"
import GameSection from "../../modules/game-section/game-section.tsx";
import {useEffect, useState} from "react";
import SubscribeSection from "../../modules/subscribe-section/subscribe-section.tsx";
import GamesPredictions from "../../modules/games-predictions/games-predictions.tsx";
import {Match} from "../../modules/types.ts";
import {Helmet} from "react-helmet";

import GamePageFilters from "../../components/game-page-filters/game-page-filters.tsx";
import {useParams} from "react-router-dom";
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

    // TODO: add players to other teams to make dynamic game page

    // @ts-ignore
    const [game, setGame] = useState<Match>({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        fetch(`http://localhost:1337/api/matches/${id}?populate=teams.players`)
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
                <GamePageFilters />
                <GameSection game={game}/>
            </main>
            <GamesPredictions />
            <SubscribeSection />
        </>
    );
};

export default GamePage;