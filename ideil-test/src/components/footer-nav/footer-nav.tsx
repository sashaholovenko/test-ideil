import "./index.css"
import languageSVG from "../../assets/language.svg"

const FooterNav = () => {

    const mainLinks = ["Ставки на спорт", "Игры", "Турниры", "Команды", "Игроки", "Дисциплины", "НОВОСТИ КИБЕРСПОРТА"]
    const sideLinks = ["Игры", "Обзоры", "Прогнозы", "Интервью", "Советы", "Цифры", "Киберспорт", "Слухи", "Туториалы"]

    return (
        <div className="footer__nav">
            <div className="footer__links">
                <div className="footer__main__links">
                    {mainLinks.map((link, index) => (
                        <div className="main__link" key={index}>
                            <p>{link}</p>
                        </div>
                    ))}
                </div>
                <div className="footer__side__links">
                    {sideLinks.map((link, index) => (
                        <div className="side__link" key={index}>
                            <p>{link}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer__author__rights">
                <p>Все права защищены. Проект компании Eska8 LTD (номер компании 12050114), Великобритания.
                    Использование материалов разрешается путем предоставления ссылки (для онлайн - публикаций –
                    гиперссылки) на Signs FM.</p>
            </div>
            <div className="footer__end">
                <div className="water__mark">
                    <b>©</b><p>2021 SIGNNNS.FM </p>
                </div>
                <div className="footer__end__docs">
                    <div style={{display: "flex", alignItems: "center", gap: 10}}>
                        <img src={languageSVG} alt=""/>
                        <p>US - Browser Language</p>
                    </div>
                    <div>
                        <p>Политика конфиденциальности</p>
                    </div>
                    <div>
                        <p>Пользовательское соглашение</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNav;
// @ts-ignore
