import "./index.css"
import MainFilters from "../../components/main-filters/main-filters.tsx";
import TournamentsFilters from "../../components/tournaments-filters/tournaments-filters.tsx";
import MatchesBlock from "../../modules/matches-block/matches-block.tsx";
import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";


const Main = () => {

    return (
        <main style={{width: "100%"}}>
            <PageSectionHeader value="Матчи CS:GO"/>
            <MainFilters />
            <TournamentsFilters />
            <MatchesBlock />
        </main>
    );
};

export default Main;