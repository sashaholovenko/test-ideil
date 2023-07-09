import "./index.css"
import NewsItem from "../../components/news-item/news-item.tsx";
import PointerActive from "../../assets/news-pointer-active.svg"
import PointerInactive from "../../assets/news-pinter-inactive.svg"
import SubscribeSection from "../subscribe-section/subscribe-section.tsx";

const NewsSection = () => {

    const news: number[] = [1, 2, 3, 4]

    return (
        <aside>
            <div className="news">
                <div className="news__header">
                    <h1 className="news__header__text">Новости</h1>
                    <div className="news__header__pointers">
                        <img src={PointerInactive} alt=""/>
                        <img src={PointerActive} alt=""/>
                    </div>
                </div>
                <div className="news__section">
                    {news.map((_el, index) => (
                        <NewsItem key={index}/>
                    ))}
                </div>
                <div className="open__more">
                    <b className="open__more__button">ВСЕ НОВОСТИ</b>
                </div>
            </div>
            <SubscribeSection />
        </aside>


    );
};

export default NewsSection;