import "./index.css"
import {FC, useContext} from "react";
import {matchesApi} from "../../store/matchesApi.ts";
import {GameContext} from "../../core/game-page/game-page.tsx";


interface TeamItemProps {
}

const TeamItem: FC<TeamItemProps> = ( ) => {

    const id = useContext(GameContext)
    const { data } = matchesApi.useGetOneMatchQuery(id).data
    const teams = data.attributes.teams.data


    return (
        <div  className="team-squads__item">
            <table>
                <thead>
                <tr>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center", marginBottom: 10, fontSize: "24px", fontWeight: 700}}>
                                <img src={"/src/assets/" + `${teams[0].attributes.shortName}` + ".svg"} alt="first team logo" style={{width: 48, height: 30}}/>
                                <b style={{fontSize: 22}}>
                                    {teams[0].attributes.name}
                                </b>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <img src={"/src/assets/" + `${teams[1].attributes.shortName}` + ".svg"} alt="first team logo" style={{width: 48, height: 30}}/>
                                <b style={{fontSize: 22}}>
                                    {teams[1].attributes.name}

                                </b>
                            </div>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>

                { [1, 2, 3 ,4 ,5].map((elem, index) => (
                    <tr key={elem}>
                        <td>
                            <div style={{display:"flex"}}>
                                <div style={{display: "flex", alignItems: "end"}}>
                                    <img src={"/src/assets/" + `${teams[0].attributes.players.data[index].attributes.nickname}` + ".png"} alt=""/>
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
                                    <img src={"/src/assets/" + `${teams[1].attributes.players.data[index].attributes.nickname}` + ".png"} alt=""/>
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