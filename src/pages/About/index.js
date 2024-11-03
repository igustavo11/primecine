import './about.css';
import AboutCard from '../../components/AboutCard';
import { motion } from 'framer-motion';
import forcabuilderslogo from "../../img/logoforcabuilders.png";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa6";


function About() {
  const description = [
    {
      id: 1,
      photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title: 'Sonho Grande',
      subtitle: 'Ser referência fazendo o certo da forma certa!',
      paragraph1: 'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
      paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
    {
      id: 2,
      photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title: 'Sonho Grande',
      subtitle: 'Ser referência fazendo o certo da forma certa!',
      paragraph1: 'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
      paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
  ];

  
  const leftAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } }
  };


  const rightAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.3 } }
  };

  const Id1 = description.find(item => item.id === 1);
  const Id2 = description.find(item => item.id === 2);

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

      <section className="values">
        <h1>VALUES</h1>
        <p>Our core values are deeply ingrained principles that guide all of Shape Equity’s actions; they serve as our cultural cornerstones. We believe these are crucial for the success of the business, all stakeholders, and the communities we are a part of.<br />Accountability • Trust • Integrity • Excellence • Teamwork</p>
      </section>

   
      <section className='partners'>
        <h1>OUR INVESTORS</h1>
          <div className='partners-content'>
            <img src={forcabuilderslogo}/>
            <div className='paragraph'>
              <h2>Força Builders</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris faucibus lorem eu tortor porta, id consequat risus viverra. Suspendisse elementum at erat et interdum. Donec fermentum dapibus erat, quis sagittis sem dapibus porttitor</p>
              <IconContext.Provider value={{color: "#32583a", size:"20px"}}>
                  <div className='social-icons-content'>
                    <FaLink/>
                    <a href="https://www.forcabuilders.com/" target='_blank'>https://www.forcabuilders.com/</a>
                  </div>
              </IconContext.Provider>
              
            </div>
          </div>
      </section>
      

    </>
  );
}

export default About;