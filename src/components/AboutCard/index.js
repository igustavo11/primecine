import './aboutcard.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';

function AboutCard() {
    const about = [
        {
            id: 1,
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/eeabbe03-e99b-4aac-bb15-7cc65ad61e69/3.png?format=750w',
            title: 'MISSION',
            paragraph: 'Generate attractive returns on equity for our partners and investors based on asset appreciation, all with a mindset of climate awareness through efficiency.',
        },
        {
            id: 2,
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/e5d10360-aaf6-4aa6-bb80-a53ecdcbd2b4/4.png?format=750w',
            title: 'STRATEGY',
            paragraph: 'Create homes with sophisticated, modern designs and processes. We leverage materials and products that have demonstrated energy efficiency and durability.',
        },
        {
            id: 3,
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/e5d10360-aaf6-4aa6-bb80-a53ecdcbd2b4/4.png?format=750w',
            title: 'STRATEGY',
            paragraph: 'Create homes with sophisticated, modern designs and processes. We leverage materials and products that have demonstrated energy efficiency and durability.',
        },
    ];

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
