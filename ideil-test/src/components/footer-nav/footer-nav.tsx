import "./index.css"
import languageSVG from "../../assets/language.svg"

const FooterNav = () => {

    const mainLinks = ["Ставки на спорт", "Игры", "Турниры", "Команды", "Игроки", "Дисциплины", "НОВОСТИ КИБЕРСПОРТА"]
    const sideLinks = ["Игры", "Обзоры", "Прогнозы", "Интервью", "Советы", "Цифры", "Киберспорт", "Слухи", "Туториалы"]

    // TODO - replace <a> tags with <Link> tags from React Router

    return (
        <>
            <div className="footer-links">
                <div className="footer-links__main">
                    {mainLinks.map((link, index) => (
                        <div className="footer-links__main-item" key={index}>
                            <a href="">
                                <p>{link}</p>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="footer-links__side">
                    {sideLinks.map((link, index) => (
                        <div className="footer-links__side-item" key={index}>
                            <a href="">
                                <p>{link}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-author-rights">
                <p>Все права защищены. Проект компании Eska8 LTD (номер компании 12050114), Великобритания.
                    Использование материалов разрешается путем предоставления ссылки (для онлайн - публикаций –
                    гиперссылки) на Signs FM.</p>
            </div>
            <div className="footer-end">
                <div className="footer-end__water-mark">
                    <b>©</b><p>2021 SIGNNNS.FM </p>
                </div>
                <div className="footer-end__docs">
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
        </>
    );
};

export default FooterNav;
// @ts-ignore
