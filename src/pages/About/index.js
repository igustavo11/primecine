
import './about.css';
import AboutCard from '../../components/AboutCard';



function About(){
    return(
        <div className="about-container">
          <div className="transition-paragraph">
            <p>Shape Equity Partners is a boutique investment firm founded in 2016. We identify, fund and execute efficient real estate development projects. We have consistently demonstrated our ability to identify unique opportunities and successfully execute our strategies in spite of ever-changing market conditions on a local and global scale.</p>
            <hr/>
          </div>
          <AboutCard></AboutCard>

        </div>
    
    )
}



export default About;
