import NaviLogo1 from "../../assets/navinah.png";
import OGlogo from "../../assets/og-logo.svg";
import MaltaTour from "../../assets/malta-tournament.png";
import "./index.css"

const GamesNormalItem = () => {
    return (
        <div className="games__normal__item">
            <div className="game__format"><p>bo1</p></div>
            <div className="game__status">
                <div className="game__status__logo">+</div>
                <p>идет вторая карта</p>
            </div>
            <div className="game__score"><p>1 - 0</p></div>
            <div className="game__teams">
                <div className="team__info">
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "white",
                        borderRadius: "60px",
                        borderLeft: "0.50px #F6F6FA solid",
                        borderTop: "0.50px #F6F6FA solid",
                        borderRight: "0.50px #F6F6FA solid",
                        borderBottom: "0.50px #F6F6FA solid",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={OGlogo} alt=""/>
                    </div>
                    <p>OG</p>
                </div>
                <div className="team__info">
                    <div style={{
                        width: "60px",
                        height: "60px",
                        background: "white",
                        borderRadius: "60px",
                        borderLeft: "0.50px #F6F6FA solid",
                        borderTop: "0.50px #F6F6FA solid",
                        borderRight: "0.50px #F6F6FA solid",
                        borderBottom: "0.50px #F6F6FA solid",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <img src={NaviLogo1} alt=""/>
                    </div>
                    <p>NaVi</p>
                </div>
            </div>

            <div className="game__status__text"><p className="red__text">LIVE</p></div>
            <div className="tournament__info">
                <img src={MaltaTour} alt=""/>
                <p>International 2023</p>
            </div>
        </div>
    );
};

export default GamesNormalItem;