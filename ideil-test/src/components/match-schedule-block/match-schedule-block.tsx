import MatchScheduleItem from "../match-schedule-item/match-schedule-item.tsx";

const MatchScheduleBlock = () => {
    const matches = [1, 2 , 3]

    return (
        <div className="match__schedule__block">
            <div style={{width: '100%', color: 'black', fontSize: 24, fontFamily: 'Formular', fontWeight: '700', wordWrap: 'break-word', marginBottom: 8, marginTop: 20}}>Пятница 30 июля 2021</div>
            { matches.map( match => (
                <MatchScheduleItem lastElem={matches[matches.length - 1] === match}/>
            ))}
        </div>
    );
};

export default MatchScheduleBlock;