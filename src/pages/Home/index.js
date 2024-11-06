
import './home.css';
import {Link} from 'react-router-dom'
import napkinSelection from '../../napkin-selection.png'; 
import HomeCard from '../../components/HomeCard';
function Home() {
    return (
        <>
        <div className="home-container1">
            <div className="content-center">
                <h1 className="home-title">Welcome to Prosperium</h1>
                <Link className="contactHome" to="/contact" >Learn more</Link>
            </div>
        </div>

       
        <section className="section">
            <div className="container">
                <div className="icon">
                    <img src='https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/f1f178da-65cf-4217-be39-5d6176a1d421/10.png?format=500w' alt="Icon" />
                </div>
                <div className="content">
                    <h2 className="title">Prosperium</h2>
                    <p className="descriptionHome">
                    Prosperum Investment Partners is a dynamic real estate investment and development firm with a strategic focus on identifying, acquiring, and developing high-value real estate projects. Our primary expertise lies in multi-family residential properties, where we combine innovative design with sustainable construction methods. By employing cutting-edge materials and modern techniques, we ensure that every project we develop meets the highest standards of quality and performance.

                    </p>
                   
                    <Link className="contactHome" to="/team">About</Link>
                </div>
            </div>
        </section>
        
        <section>
            <HomeCard></HomeCard>
        </section>

        </>
    );
}

export default Home;
