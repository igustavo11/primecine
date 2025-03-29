/* eslint-disable */
import "./about.css";
import AboutCard from "../../components/AboutCard";
import forcabuilderslogo from "../../img/logoforcabuilders.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("about");
  const { i18n } = useTranslation();

  const isPortuguese = i18n.language === "pt" || i18n.language === "pt-BR";

  const pillarsSectionTitle = {
    pt: "Nossos Pilares",
    en: "Our Pillars",
  };

  const partnerText = {
    title: {
      pt: "Força Builders",
      en: "Força Builders",
    },
    description: {
      pt: "Na Força Builders, somos especializados na construção de edifícios residenciais, comerciais e de uso misto. Entendemos que um lar é mais do que apenas uma estrutura; representa conforto, estabilidade, segurança e memórias preciosas. Por mais de uma década, nos dedicamos a transformar casas em lares para nossos clientes. Desde renovações até novas construções, sentimos orgulho em fazer parte dessa experiência significativa.",
      en: "At Força Builders, we specialize in the construction of residential, commercial, and mixed-use buildings. We understand that a home is more than just a structure; it represents comfort, stability, safety, and cherished memories. For over a decade, we have dedicated ourselves to transforming houses into homes for our valued clients. From renovations to new home constructions, we take pride in being part of such a significant experience.",
    },
    button: {
      pt: "Visitar site",
      en: "Visit website",
    },
  };

  const featureTexts = {
    feature1: {
      pt: "Resultados comprovados",
      en: "Proven Results",
    },
    feature2: {
      pt: "Crescimento sustentável",
      en: "Sustainable Growth",
    },
    feature3: {
      pt: "Investimentos seguros",
      en: "Secure Investments",
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideFromLeft = (delay) => ({
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: delay,
        duration: 0.8,
      },
    },
  });

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <div className="home-container">
        <div className="content-center">
          <motion.h3
            className="home-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {t("hometitle1") || "Transformando"}
            <br />
            {t("hometitle2") || "Investimentos Imobiliários"}
          </motion.h3>
        </div>
      </div>

      <section className="transition-paragraph">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {isPortuguese ? pillarsSectionTitle.pt : pillarsSectionTitle.en}
        </motion.h1>
        <AboutCard />
      </section>

      <section className="values">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("investingTitle")}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("investingDescription")}
        </motion.p>

        <div className="key-features">
          <motion.div
            className="feature"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideFromLeft(0)}
          >
            <div className="feature-icon">✓</div>
            <p>
              {isPortuguese
                ? featureTexts.feature1.pt
                : featureTexts.feature1.en}
            </p>
          </motion.div>

          <motion.div
            className="feature"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideFromLeft(0.3)}
          >
            <div className="feature-icon">📈</div>
            <p>
              {isPortuguese
                ? featureTexts.feature2.pt
                : featureTexts.feature2.en}
            </p>
          </motion.div>

          <motion.div
            className="feature"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideFromLeft(0.6)}
          >
            <div className="feature-icon">🛡️</div>
            <p>
              {isPortuguese
                ? featureTexts.feature3.pt
                : featureTexts.feature3.en}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="info-cards-container">
        <motion.section
          className="info-cards-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="info-card" variants={fadeInUp}>
            <div className="card-header">
              <span className="card-icon">💼</span>
              <h2>{t("dreamBigTitle1")}</h2>
            </div>
            <h3>{t("dreamBigSubtitle1")}</h3>
            <p>{t("dreamBigParagraph1")}</p>
          </motion.div>

          <motion.div className="info-card" variants={fadeInUp}>
            <div className="card-header">
              <span className="card-icon">📊</span>
              <h2>{t("dreamBigTitle2")}</h2>
            </div>
            <h3>{t("dreamBigSubtitle2")}</h3>
            <p>{t("dreamBigParagraph2")}</p>
          </motion.div>
        </motion.section>

        <motion.section
          className="info-cards-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="info-card" variants={fadeInUp}>
            <div className="card-header">
              <span className="card-icon">🔍</span>
              <h2>{t("dreamBigTitle3")}</h2>
            </div>
            <h3>{t("dreamBigSubtitle3")}</h3>
            <p>{t("dreamBigParagraph3")}</p>
          </motion.div>

          <motion.div className="info-card" variants={fadeInUp}>
            <div className="card-header">
              <span className="card-icon">💬</span>
              <h2>{t("dreamBigTitle4")}</h2>
            </div>
            <h3>{t("dreamBigSubtitle4")}</h3>
            <p>{t("dreamBigParagraph4")}</p>
          </motion.div>
        </motion.section>
      </div>

      <section className="values advantage-section">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("valuesTitle")}
        </motion.h1>
        <motion.div
          className="advantage-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className="advantage-text" variants={fadeInUp}>
            <p>{t("valuesDescription")}</p>
          </motion.div>
          <motion.div
            className="advantage-circle"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <div className="circle-content">
              <span>Prosperum</span>
              <small>Excelência em investimentos</small>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="partners">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {t("partnersTitle")}
        </motion.h1>
        <motion.div
          className="partners-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.img
            src={forcabuilderslogo}
            alt="Força Builders"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div className="paragraph" variants={fadeInUp}>
            <h2>{partnerText.title[isPortuguese ? "pt" : "en"]}</h2>
            <p>{partnerText.description[isPortuguese ? "pt" : "en"]}</p>
            <motion.div
              className="partner-button-container"
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="https://www.forcabuilders.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="partner-link"
              >
                {partnerText.button[isPortuguese ? "pt" : "en"]}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default About;
