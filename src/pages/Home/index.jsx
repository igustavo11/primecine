/* eslint-disable */
import "./home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HomeCard from "../../components/HomeCard";
import homeImg from "../../img/home2.jpg";

function Home() {
  const { t } = useTranslation("home");
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = [
    t("typingText1", "Imóveis"),
    t("typingText2", "Investimentos"),
    t("typingText3", "Sucesso"),
  ];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      } else {
        setTypingSpeed(isDeleting ? 80 : 150);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <div className="home-wrapper">
      <section className="hero-about-section">
        <div className="about-container">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              {t("title").split(" nossa paixão por ")[0]}
              <span className="typing-text"> {text}</span>
              {t("title").includes(" nossa paixão por ")
                ? t("title").split(" nossa paixão por ")[1]
                : t("title").includes(" our passion for ")
                ? t("title").split(" our passion for ")[1]
                : ""}
            </h1>
            <p className="hero-subtitle">
              {t(
                "subtitle",
                "Transformando investimentos em oportunidades reais"
              )}
            </p>
            <Link className="primary-button" to="/contact">
              {t("learnMore")}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-container">
          <motion.div
            className="experience-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="experience-text">
              <h2>
                {t("experienceTitle").split(" Premium")[0]}{" "}
                <span>{t("experienceHighlight")}</span>
              </h2>
              <p>{t("experienceText")}</p>
              <Link className="inverted-button" to="/team">
                {t("about")}
              </Link>
            </div>
            <div className="experience-image-container">
              <img
                src={homeImg}
                alt={t("experienceTitle")}
                className="experience-image"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("servicesTitle", "Nossos Serviços")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              "servicesSubtitle",
              "Conheça nossas soluções para potencializar seus investimentos"
            )}
          </motion.p>
        </div>
        <HomeCard />
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("ctaTitle", "Pronto para investir no seu futuro?")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t(
              "ctaSubtitle",
              "Entre em contato conosco e descubra como podemos ajudar a transformar seus objetivos em realidade."
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link className="cta-button" to="/contact">
              {t("contactUs", "Entre em contato")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
