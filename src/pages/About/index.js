
import './about.css';
import AboutCard from '../../components/AboutCard';



function About(){
    return(
        <>
          <section className="transition-paragraph">
            <p>Shape Equity Partners is a boutique investment firm founded in 2016. We identify, fund and execute efficient real estate development projects. We have consistently demonstrated our ability to identify unique opportunities and successfully execute our strategies in spite of ever-changing market conditions on a local and global scale.</p>
            <hr/>
          </section>
          <AboutCard></AboutCard>
          <section className="description-about">
            <img src="https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/c3275070-4b71-4551-a0d4-7a3162726d68/image-asset.png?format=1000w"/>
            <div className='paragraph'>
              <h1>Delivering Impact for all Stakeholders</h1>
              <p>We are pioneering a new way of thinking and design with high quality, efficient architecture and materials that maximizes natural light, outdoor space and energy efficiency.<br/>We are at the intersection of technology, climate sensitive real estate and resilient investing. Our proprietary algorithm is unique to the industry, informing our due-diligence process.</p>
            </div>
          </section>
          <section className='paragraph'>
              <h1>Why does this matter?</h1>
              <p>The construction industry plays a significant role on the environment, generating 30% of total greenhouse emissions and utilizing 32% of the world’s natural resources. <br/>We believe that only ESG-sensitive businesses will thrive within the construction industry and can positively impact our environment in the years to come.</p>
          </section>
          <section className="values">
            <img src="https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/92820167-6bd7-4724-a08e-d6e16bad987a/Colorful+Business+Growth+Percentage+Graph+%2810+%C3%97+10+in%29.png?format=500w"/>
            <h1>VALUES</h1>
            <p>Our core values are deeply ingrained principles that guide all of Shape Equity’s actions; they serve as our cultural cornerstones. We believe these are crucial for the success of the business, all stakeholders and the communities we are a part of.<br/>Accountability   •   Trust   •   Integrity   •   Excellence   •   Teamwork</p>
          </section>

        </>
    
    )
}



export default About;
