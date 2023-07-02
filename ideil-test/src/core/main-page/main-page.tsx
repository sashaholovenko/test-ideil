import "./index.css"
import MainFilters from "../../components/main-filters/main-filters.tsx";
import TournamentsFilters from "../../components/tournaments-filters/tournaments-filters.tsx";
import MatchesBlock from "../../modules/matches-block/matches-block.tsx";
import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";


const MainPage = () => {



    return (
        <main style={{width: "100%"}}>
            <PageSectionHeader value="Матчи CS:GO" fontSize={40}/>
            <MainFilters />
            <TournamentsFilters />
            <MatchesBlock />
        </main>
    );
};

export default MainPage;
//@ts-ignore