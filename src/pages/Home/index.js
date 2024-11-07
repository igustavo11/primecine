import './home.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import napkinSelection from '../../napkin-selection.png'; 
import HomeCard from '../../components/HomeCard';

function Home() {
    const { t } = useTranslation('home');  

    return (
        <>
            <div className="home-container1">
                <div className="content-center">
                    <h1 className="home-title">{t('title')}</h1>
                    <Link className="contactHome" to="/contact">{t('learnMore')}</Link>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="icon">
                        <img src="https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/f1f178da-65cf-4217-be39-5d6176a1d421/10.png?format=500w" alt="Icon" />
                    </div>
                    <div className="content">
                        <h2 className="title">{t('prosperiumTitle')}</h2>
                        <p className="descriptionHome">{t('description')}</p>
                        <Link className="contactHome" to="/team">{t('about')}</Link>
                    </div>
                </div>
            </section>

            <section>
                <HomeCard />
            </section>
        </>
    );
}

export default Home;
