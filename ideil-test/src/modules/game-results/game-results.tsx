import "./index.css"
import g2Logo from "../../assets/G2.svg"
import naviLogo from "../../assets/navi-logo.svg"
import PlayersStats from "../../components/players-stats/players-stats.tsx";
import firstpic from "../../assets/first-team-round.svg"
import secondpic from "../../assets/second-team-round.svg"
import smallNavi from "../../assets/navi-stats-logo.svg"
import smallG2 from "../../assets/g2-stats-logo.svg"
import {Match} from "../types.ts";
import {FC} from "react";

interface GameResultProps {
    game: Match

}

const GameResults: FC<GameResultProps> = ({game}) => {

    const first =  <div style={{width: 30, height: 30, background: "rgba(44,116,179,1)", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}}><img src={firstpic} alt=""/></div>
    const second =  <div style={{width: 30, height: 30, background: "rgba(255,125,2,1)", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto"}}><img src={secondpic} alt=""/></div>


    return (
        <div>
            <h1>Результаты матча</h1>
            <div className="game-results-header">
                <div><h2>Карта Mirage</h2></div>
                <div className="game-results-header__score ">
                    <div className="game-results-header__team-logo">
                        <img src={g2Logo} alt="ogLogo" style={{width: 57, height: 40}}/>
                    </div>
                    <div className="game-results-header__score-count"><p>9 - 16</p></div>
                    <div className="game-results-header__team-logo">
                        <img src={naviLogo} alt="naviLogo" style={{width: 57, height: 40}}/>
                    </div>
                </div>
                <div className="game-results-header__maps-tab">
                    <p>9-6 / 7-3</p>
                </div>
            </div>
            <table className="game-results-rounds">
                <tbody>
                <tr>
                    <td>+</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td><img src={smallNavi} alt=""/></td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{first}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                    <td>{first}</td>
                </tr>
                <tr>
                    <td><img src={smallG2} alt=""/></td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td></td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td>{second}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                </tbody>
            </table>
            <h3 style={{fontSize: 22, marginTop: 20}}>Статистика за карту</h3>
            <PlayersStats game={game} img={false}/>
            <div className="game-results-header">
                <div><h2>Карта Mirage</h2></div>
                <div className="game-results-header__score ">
                    <div className="game-results-header__team-logo">
                        <img src={g2Logo} alt="ogLogo" style={{width: 57, height: 40}}/>
                    </div>
                    <div className="game-results-header__score-count"><p>9 - 16</p></div>
                    <div className="game-results-header__team-logo">
                        <img src={naviLogo} alt="naviLogo" style={{width: 57, height: 40}}/>
                    </div>
                </div>
                <div className="game-results-header__maps-tab">
                    <p>9-6 / 7-3</p>
                </div>
            </div>
            <div className="game-results-header">
                <div><h2>Карта Mirage</h2></div>
                <div className="game-results-header__score ">
                    <div className="game-results-header__team-logo">
                        <img src={g2Logo} alt="ogLogo" style={{width: 57, height: 40}}/>
                    </div>
                    <div className="game-results-header__score-count"><p>9 - 16</p></div>
                    <div className="game-results-header__team-logo">
                        <img src={naviLogo} alt="naviLogo" style={{width: 57, height: 40}}/>
                    </div>
                </div>
                <div className="game-results-header__maps-tab">
                    <p>9-6 / 7-3</p>
                </div>
            </div>
        </div>
    );
};

export default GameResults;