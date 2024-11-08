import './aboutcard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import enAbout from '../../locales/en/aboutcard.json';
import ptAbout from '../../locales/pt/aboutcard.json';

function AboutCard() {
    const { i18n } = useTranslation();
    const about = i18n.language === 'en' ? enAbout : ptAbout;

    const slideAnimation = (index) => ({
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration:2.2, 
                delay: index * 0.3
            } 
        }
    });

    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
            }}
        >
            <div className="aboutcards">
                {about.map((post, index) => (
                    <SwiperSlide key={post.id}>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={slideAnimation(index)}
                        >
                            <img src={post.photo} alt={post.title} />
                            <h2>{post.title}</h2>
                            <p>{post.paragraph}</p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </div>
        </Swiper>
    );
}

export default AboutCard;
