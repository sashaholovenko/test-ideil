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
                <img src={frameSVG} alt="frame" className="frame__logo" />
                <nav className="header__nav-panel">
                    <a href="">
                        <h3>СТАВКИ НА СПОРТ</h3>
                    </a>
                    <a href="">
                        <h3> ИГРЫ</h3>
                    </a>
                    <a href="">
                        <h3>ТУРНИРЫ</h3>
                    </a>
                    <a href="">
                        <h3>КОМАНДЫ</h3>
                    </a>
                    <a href="">
                        <h3>ИГРОКИ</h3>
                    </a>
                    <a href="">
                        <h3>ЕЩЁ...</h3>
                    </a>
                </nav>

                <img src={searchSVG} alt="search-logo" className="header__search-logo"/>
                <div className="header__language-selection">
                    <h3>RU</h3>
                </div>
            </header>
            <div className="header__url"><p>Home</p> <img src={headerVectorSVG} alt="" className="header__vector" style={{marginLeft: 5, marginRight: 5}}/> Киберспортивные матчи <img src={headerVectorSVG} alt="" style={{marginLeft: 5, marginRight: 5}}/> Матчи CS:GO</div>
        </>
    );
};

export default Header;