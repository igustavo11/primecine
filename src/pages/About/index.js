import './about.css';
import AboutCard from '../../components/AboutCard';
import { motion } from 'framer-motion';
import forcabuilderslogo from "../../img/logoforcabuilders.png";
import { IconContext } from "react-icons";
import { FaLink } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

function About() {
  const description = [
    {
      id: 1,
      photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title: 'dreamBigTitle1',
      paragraph1: 'dreamBigParagraph1',
    },
    {
      id: 2,
      photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title: 'dreamBigTitle2',
      paragraph1: 'dreamBigParagraph2',
    },
    {
      id: 3,
      photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title: 'dreamBigTitle3',
      paragraph1: 'dreamBigParagraph3',
    },
    {
      id: 4,
      photo: 'https://i.imgur.com/fvZPPFa.jpeg',
      title: 'dreamBigTitle4',
      paragraph1: 'dreamBigParagraph4',
    },
  ];
  
  const { t } = useTranslation('about');
  
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
  const Id3 = description.find(item => item.id === 3);
  const Id4 = description.find(item => item.id === 4);

  return (
    <>
      <div className="home-container">
        <div className="content-center">
          <h3 className="home-title">{t('hometitle1')}</h3>
          <h3 className="home-title">{t('hometitle2')}</h3>
        </div>
      </div>

      <section className="transition-paragraph">
        <h1>{t("pillarsTitle")}</h1>
        <AboutCard />
      </section>

      <section className="values">
        <h1>{t('investingTitle')}</h1>
        <p>{t('investingDescription')}</p>
      </section>
     
      <motion.section
        className="description-about1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} 
        variants={leftAnimation}
      >
        <div className="paragraph">
          <h1>{t(Id1.title)}</h1>
          <h3>{t(Id1.subtitle)}</h3>
          <p>{t(Id1.paragraph1)}<br />{t(Id1.paragraph2)}</p>
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
          <h1>{t(Id2.title)}</h1>
          <h3>{t(Id2.subtitle)}</h3>
          <p>{t(Id2.paragraph1)}<br />{t(Id2.paragraph2)}</p>
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
          <h1>{t(Id3.title)}</h1>
          <h3>{t(Id3.subtitle)}</h3>
          <p>{t(Id3.paragraph1)}<br />{t(Id3.paragraph2)}</p>
        </div>
        <img src={Id3.photo} alt={Id3.title} />
      </motion.section>

      <motion.section
        className="description-about2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={rightAnimation}
      >
        <img src={Id4.photo} alt={Id4.title} />
        <div className="paragraph">
          <h1>{t(Id4.title)}</h1>
          <h3>{t(Id4.subtitle)}</h3>
          <p>{t(Id4.paragraph1)}<br />{t(Id4.paragraph2)}</p>
        </div>
      </motion.section>

      <section className="values">
        <h1>{t('valuesTitle')}</h1>
        <p>{t('valuesDescription')}</p>
      </section>

      <section className='partners'>
        <h1>{t('partnersTitle')}</h1>
        <div className='partners-content'>
          <img src={forcabuilderslogo} alt="Força Builders"/>
          <div className='paragraph'>
            <h2>Força Builders</h2>
            <p>{t('partnersDescription')}</p>
            <IconContext.Provider value={{color: "#32583a", size:"20px"}}>
                <div className='social-icons-content'>
                  <FaLink/>
                  <a href="https://www.forcabuilders.com/" target='_blank' rel="noopener noreferrer">
                    https://www.forcabuilders.com/
                  </a>
                </div>
            </IconContext.Provider>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
