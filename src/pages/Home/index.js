
import './home.css';
import {Link} from 'react-router-dom'
import napkinSelection from '../../napkin-selection.png'; 
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

                <div className="icon2">
                    <img src={napkinSelection} alt="Icon" />
                </div>
            
        </section>
        <section className="section">
            <div className="container">
                <div className="icon">
                    <img src='https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/f1f178da-65cf-4217-be39-5d6176a1d421/10.png?format=500w' alt="Icon" />
                </div>
                <div className="content">
                    <h2 className="title">section</h2>
                    <p className="descriptionHome">
                        teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                    </p>
                    <p className="descriptionHome">
                            teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                    </p>
                    <p className="descriptionHome">
                            teste testeteste testeteste testeteste testeteste testeteste testeteste testeteste teste
                    </p>
                    <Link className="contactHome" to="/team">About</Link>
                </div>
            </div>
        </section>

        </>
    );
}

export default Home;
