import "./index.css"

const SubscribeSection = () => {
    return (

        <aside className="subscribe">
            <div className="subscribe__text"><b><p>Esport odds in your inbox</p></b></div>
            <div className="subscribe__input">
                <input type="email" id="email"
                       pattern=".+@globex\.com" className="subscribe__input__elem" placeholder="email@email.com" required/>
            </div>
            <div className="subscribe__button"><b>ПОДПИСАТЬСЯ</b></div>
        </aside>
    );
};

export default SubscribeSection;