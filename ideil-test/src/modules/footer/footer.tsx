import NewsSection from "../news-section/news-section.tsx";
import SubscribeSection from "../subscribe-section/subscribe-section.tsx";
import FooterNav from "../../components/footer-nav/footer-nav.tsx";

const Footer = () => {
    return (
        <footer className="footer">
            <NewsSection />
            <SubscribeSection />
            <FooterNav />
        </footer>
    );
};

export default Footer;