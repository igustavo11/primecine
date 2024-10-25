import './about.css';
import AboutCard from '../../components/AboutCard';
import { motion } from 'framer-motion';
import AboutDescription from '../../components/AboutDescription';

function About() {
  
  const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } }
  };


  const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } }
  };

  return (
    <>
      <div className="home-container">
        <div className="content-center">
          <h3 className="home-title">Our passion for real estate is</h3>
          <h3 className="home-title">the secret to your success</h3>
        </div>
      </div>

      <section className="transition-paragraph">
        <h1>Nossos Pilares</h1>
        <AboutCard />
      </section>

      <section>
      <AboutDescription></AboutDescription>
      </section>
    {/*
      <motion.section
        className="description-about1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
        variants={leftAnimation}
      >
        <div className="paragraph">
          <h1>{Id1.title}</h1>
          <h3>{Id1.subtitle}</h3>
          <p>{Id1.paragraph1}<br />{Id1.paragraph2}</p>
        </div>
        <img src={Id1.photo} alt={Id1.title} />
      </motion.section>

      <motion.section
        className="description-about2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={rightAnimation}
      >
        <img src={Id2.photo} alt={Id2.title} />
        <div className="paragraph">
          <h1>{Id2.title}</h1>
          <h3>{Id2.subtitle}</h3>
          <p>{Id2.paragraph1}<br />{Id2.paragraph2}</p>
        </div>
      </motion.section>
      
      <motion.section
        className="description-about1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
        variants={leftAnimation}
      >
        <div className="paragraph">
          <h1>{Id1.title}</h1>
          <h3>{Id1.subtitle}</h3>
          <p>{Id1.paragraph1}<br />{Id1.paragraph2}</p>
        </div>
        <img src={Id1.photo} alt={Id1.title} />
      </motion.section>


      */}

      <section className="values">
        <h1>VALUES</h1>
        <p>Our core values are deeply ingrained principles that guide all of Shape Equity’s actions; they serve as our cultural cornerstones. We believe these are crucial for the success of the business, all stakeholders, and the communities we are a part of.<br />Accountability • Trust • Integrity • Excellence • Teamwork</p>
      </section>
    </>
  );
}

export default About;
