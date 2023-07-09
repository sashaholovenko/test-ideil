import "./index.css"
import naviLogo from "../../assets/navi-logo.svg"
import {FC, JSX} from "react";

interface PlayersStatsProps {
    children: JSX.Element
    img: boolean
}

const PlayersStats: FC<PlayersStatsProps> = ({children, img}) => {
    // TODO: make props with arrays of th and td tags

    return (
        <div className="roasters">
            <table >
                <thead>
                <tr>
                    {img ?
                        <th style={{width: "30%"}}><div className="roasters-team">
                            <img src={naviLogo} alt=""/>
                            {children}
                        </div></th>
                        :
                        <th style={{width: "30%", textAlign: "start", fontSize: 18}}>
                            {children}
                        </th>
                    }

                    <th>Maps</th>
                    <th>K(HS)</th>
                    <th>A(F)</th>
                    <th>D</th>
                    <th>KD Diff</th>
                    <th>KAST</th>
                    <th>ADR</th>
                    <th>FK Diff</th>
                </tr>
                </thead>
                <tbody>
                {[1,2,3,4,5].map( _elem => (
                    <tr>
                        <td>s1mple</td>
                        <td>3</td>
                        <td>63 (20)</td>
                        <td>22 (6)</td>
                        <td>46</td>
                        <td>+17</td>
                        <td>73.4%</td>
                        <td>79.7</td>
                        <td>+7</td>
                    </tr>
                ))}

                </tbody>
            </table>

        </div>


    );
};

export default PlayersStats;