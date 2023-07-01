import frameSVG from "../../assets/Frame.svg"
import unionSVG from "../../assets/Union.svg"
import searchSVG from "../../assets/Searchlogo.svg"
import headerVectorSVG from "../../assets/header-vector.svg"
import "./index.css"

const Header = () => {
    return (
        <>
            <header className="header">
                <img src={unionSVG} alt="union"  className="union__logo"/>
                <img src={frameSVG} alt="frame" className="frame__logo"/>
                <nav className="nav__panel">
                    <h3>СТАВКИ НА СПОРТ</h3>
                    <h3> ИГРЫ</h3>
                    <h3>ТУРНИРЫ</h3>
                    <h3>КОМАНДЫ</h3>
                    <h3>ИГРОКИ</h3>
                    <h3>ЕЩЁ...</h3>
                </nav>

                <img src={searchSVG} alt="search-logo" className="search__logo"/>
                <div className="language__selection">
                    <h3>RU</h3>
                </div>
            </header>
            <div style={{width: '100%', height: '100%', opacity: 0.10, border: '0.50px black solid'}}></div>
            <div className="header__url"><p>Home</p> <img src={headerVectorSVG} alt="" className="header__vector" style={{marginLeft: 5, marginRight: 5}}/> Киберспортивные матчи <img src={headerVectorSVG} alt="" style={{marginLeft: 5, marginRight: 5}}/> Матчи CS:GO</div>
        </>
    );
};

export default Header;