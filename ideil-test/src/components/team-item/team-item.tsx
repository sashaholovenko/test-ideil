import "./index.css"
import {FC} from "react";
import {Team} from "../../modules/types.ts";
import logo from "../../assets/EG.svg"


interface TeamItemProps {
    teams: Team[]
}

// @ts-ignore
const TeamItem: FC<TeamItemProps> = ({ teams}) => {

    console.log(teams[0].attributes.players.data[0].attributes.name)



    return (
        <div  className="team-squads__item">
            <table>
                <thead>
                <tr>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: 10, fontSize: "24px", fontWeight: 700}}>
                                <img src={"src/assets/" + `${teams[0].attributes.shortName}` + ".svg"} alt="first team logo" style={{width: 48, height: 30}}/>
                                <b style={{fontSize: 22}}>
                                    {teams[0].attributes.name}
                                </b>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={"src/assets/" + `${teams[1].attributes.shortName}` + ".svg"} alt="first team logo" style={{width: 48, height: 30}}/>
                                <b style={{fontSize: 22}}>
                                    {teams[1].attributes.name}

                                </b>
                            </div>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>

                { [1, 2, 3 ,4 ,5].map((_elem, index) => (
                    <tr>
                        <td>
                            <div style={{display:"flex"}}>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <img src={"src/assets/" + `${teams[0].attributes.players.data[index].attributes.nickname}` + ".png"} alt=""/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <b>{teams[0].attributes.players.data[index].attributes.nickname}</b>
                                    <p>{teams[0].attributes.players.data[index].attributes.name}</p>
                                </div>
                            </div>

                        </td>
                        <td>
                            <div style={{display:"flex"}}>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <img src={"src/assets/" + `${teams[1].attributes.players.data[index].attributes.nickname}` + ".png"} alt=""/>
                                </div>
                                <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <b>{teams[1].attributes.players.data[index].attributes.nickname}</b>
                                    <p>{teams[1].attributes.players.data[index].attributes.name}</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))
                }


                </tbody>
            </table>
        </div>


    );
};

export default TeamItem;