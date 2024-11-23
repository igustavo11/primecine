import './home.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeCard from '../../components/HomeCard';
import home2 from '../../img/home.jpg'
import homeImg from '../../img/home2.jpg'


function Home() {
    const { t } = useTranslation('home');  

    return (
        <>
            <div className="home-container1">
                <div className="content-center">
                    <h3 className="home-title">{t('title')}</h3>
                    <Link className="contactHome" to="/contact">{t('learnMore')}</Link>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="icon">
                        <img src={home2} alt="Icon" />
                    </div>
                    <div className="content">
                        <h2 className="title">{t('prosperiumTitle')}</h2>
                        <p className="descriptionHome">{t('description')}</p>

                    </div>
                </div>
            </section>

        <section className="experience-section">
                <div className="experience-content">
                <img 
                src={homeImg}
                alt="icon" 
                className="experience-image" 
                />
                <div className="experience-text">
                <h2>Lorem <span>Lorem</span></h2>
                <p>
                    Exclusividade com o toque humano que você precisa. 
                    Conte com um Carbon Partner e um assessor de investimentos.
                </p>
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
