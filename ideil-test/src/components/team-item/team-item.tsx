import "./index.css"
import simplePic from "../../assets/s1mple.png"
import {FC} from "react";

interface TeamItemProps {
    img: string;
    team: string[]
}

const TeamItem: FC<TeamItemProps> = ({img, team}) => {


    return (
        <div className="team__section__player">
            <div className="team__section__header">
                <div className="team__section__icon__wrapper">
                    <img src={img} alt="" style={{height: 21, width: 30}}/>
                </div>
                <div>
                <p>{team[0]}</p>
                </div>
            </div>
            <div style={{width: '100%', height: '2px', background: "#E8E8E8", marginTop: 10}}></div>
            <div>
                {[1,2,3,4,5].map( _elem => (
                    <div className="player__item">
                        <div className="player__item__photo">
                            <img src={simplePic} alt=""/>
                        </div>
                        <div className="player__item__name">
                           <b><p>NiKo</p></b>
                            <p>Nikola Kovac</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamItem;