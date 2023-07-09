import "./index.css"
import simplePic from "../../assets/s1mple.png"
import {FC} from "react";

interface TeamItemProps {
    img: string;
    team: string[]
}

// TODO: add images and dynamic values and fix classname
// @ts-ignore
const TeamItem: FC<TeamItemProps> = ({img, team}) => {


    return (
        <div  className="team__item">
            <table>
                <thead>
                <tr>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={"src/assets/" + "EG" + ".svg"} alt="first team logo"/>
                                <b style={{fontSize: 22}}>
                                    {team[0]}

                                </b>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={"src/assets/" + "EG" + ".svg"} alt="first team logo"/>
                                <b style={{fontSize: 22}}>
                                    {team[0]}

                                </b>
                            </div>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                {[1, 2, 3, 4, 5].map(_elem => (
                    <tr>
                        <td>
                            <div style={{display:"flex"}}>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <img src={simplePic} alt=""/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <b>s1mple</b>
                                    <p>Александр Костылев</p>
                                </div>
                            </div>

                        </td>
                        <td>
                            <div style={{display:"flex"}}>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <img src={simplePic} alt=""/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <b>s1mple</b>
                                    <p>Александр Костылев</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>
        </div>



    );
};

export default TeamItem;