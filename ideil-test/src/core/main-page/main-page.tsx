import "./index.css"
import MainFilters from "../../components/main-filters/main-filters.tsx";
import TournamentsFilters from "../../components/tournaments-filters/tournaments-filters.tsx";
import MatchesBlock from "../../modules/matches-block/matches-block.tsx";
import PageSectionHeader from "../../components/UI/page-section-header/page-section-header.tsx";
import NewsSection from "../../modules/news-section/news-section.tsx";


const MainPage = () => {



    return (
        <>
            <main>
                <PageSectionHeader value="Матчи CS:GO" fontSize={40}/>
                <MainFilters />
                <TournamentsFilters />
                <MatchesBlock />
            </main>
            <NewsSection />

        </>
    );
};

export default MainPage;
//@ts-ignore