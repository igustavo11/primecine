/* eslint-disable */
import "./homecard.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import enHomeCard from "../../locales/en/homecard.json";
import ptHomeCard from "../../locales/pt/homecard.json";

function HomeCard() {
  const { i18n } = useTranslation();
  const homecardData = i18n.language === "en" ? enHomeCard : ptHomeCard;
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  useEffect(() => {
    setIsEnglish(i18n.language === "en");
  }, [i18n.language]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: isEnglish ? i * 0.3 : 0,
        duration: isEnglish ? 0.8 : 0.6,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -15,
      boxShadow: "0 15px 40px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hover: {
      color: "var(--color-primary)",
      transition: {
        duration: 0.2,
      },
    },
  };

  const formatParagraph = (text) => {
    if (!text) return null;
    return text.includes(": ") ? (
      <div className="card-item">
        <strong>{text.split(": ")[0]}:</strong> {text.split(": ")[1]}
      </div>
    ) : (
      <p>{text}</p>
    );
  };

  return (
    <div className="homecards">
      {homecardData.map((post, index) => (
        <motion.div
          key={post.id}
          className="homecards-content"
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          custom={index}
          viewport={{ once: false, margin: "-50px" }}
          variants={cardVariants}
        >
          <motion.div className="image-container">
            <motion.img
              src={post.photo}
              className="image"
              alt={post.title}
              variants={imageVariants}
            />
          </motion.div>
          <div className="content">
            <motion.h2 variants={titleVariants}>{post.title}</motion.h2>
            <p>{post.paragraph}</p>
            {formatParagraph(post.paragraph2)}
            {formatParagraph(post.paragraph3)}
            {post.paragraph4 && formatParagraph(post.paragraph4)}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default HomeCard;
