import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";
import "./index.css"
import GameSection from "../../modules/game-section/game-section.tsx";
import {createContext,  useState} from "react";
import SubscribeSection from "../../modules/subscribe-section/subscribe-section.tsx";
import GamesPredictions from "../../modules/games-predictions/games-predictions.tsx";
import {Helmet} from "react-helmet";

import GamePageFilters from "../../components/game-page-filters/game-page-filters.tsx";
import {useLocation} from "react-router-dom";
import {matchesApi} from "../../store/matchesApi.ts";

export const GameContext = createContext(10)

const GamePage = () => {

    const location = useLocation();
    const [contextId, _setContextId] = useState(location.state.id)

    // @ts-ignore
    const {data, isLoading, isError} = matchesApi.useGetOneMatchQuery(location.state.id)

    if (isLoading) return (
        <div style={{width: "100%", height: 700, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Loading....</h1>
        </div>
    );

    if (isError) return (
        <div style={{width: "100%", height: 700, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <h1>Error....</h1>
        </div>
    );


    return (
        <>
            <Helmet>
                <meta
                    name="describtion"

                    content={`Page of the game between ${data.data.attributes.teams.data[0].attributes.name} and ${data.data.attributes.teams.data[1].attributes.name}`}
                />
                <title>{`${data.data.attributes.teams.data[0].attributes.name} vs ${data.data.attributes.teams.data[1].attributes.name}. Stats, Face to Face Games, Results`}</title>
            </Helmet>
            <GameContext.Provider value={contextId}>
                <main>
                    <PageSectionHeader
                        value={"Матч " + `${data.data.attributes.teams.data[0].attributes.name}` + " - " + `${data.data.attributes.teams.data[1].attributes.name}` + " завершен"}
                        fontSize={30}/>
                    <GamePageFilters/>
                    <GameSection/>
                </main>
                <GamesPredictions/>
                <SubscribeSection/>
            </GameContext.Provider>
        </>
    );
};

export default GamePage;