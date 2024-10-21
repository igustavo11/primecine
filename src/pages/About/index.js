
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
          <div className="description-about">
            <img src="https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/c3275070-4b71-4551-a0d4-7a3162726d68/image-asset.png?format=1000w"/>
            <div className='paragraph'>
              <h1>Delivering Impact for all Stakeholders</h1>
              <p>We are pioneering a new way of thinking and design with high quality, efficient architecture and materials that maximizes natural light, outdoor space and energy efficiency.<br/>We are at the intersection of technology, climate sensitive real estate and resilient investing. Our proprietary algorithm is unique to the industry, informing our due-diligence process.</p>
            </div>
          </div>
          <div className='paragraph'>
              <h1>Why does this matter?</h1>
              <p>The construction industry plays a significant role on the environment, generating 30% of total greenhouse emissions and utilizing 32% of the world’s natural resources. <br/>We believe that only ESG-sensitive businesses will thrive within the construction industry and can positively impact our environment in the years to come.</p>
          </div>

        </div>
    
    )
}



export default About;
