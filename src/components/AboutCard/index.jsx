import "./aboutcard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import enAbout from "../../locales/en/aboutcard.json";
import ptAbout from "../../locales/pt/aboutcard.json";

function AboutCard() {
  const { i18n } = useTranslation();
  const about = i18n.language === "en" ? enAbout : ptAbout;

  const pillarIcons = {
    1: "🎯", // missão
    2: "🧠", // estrategia
    3: "⚖️", // principios
  };

  const fadeInAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
      }}
      className="pillars-swiper"
    >
      {about.map((post) => (
        <SwiperSlide key={post.id}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
            className="pillar-card"
            whileHover={{ y: -10 }}
          >
            <div className="pillar-icon">{pillarIcons[post.id]}</div>
            <h2>{post.title}</h2>
            <p>{post.paragraph}</p>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default AboutCard;
