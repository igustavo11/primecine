import "./homecard.css";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import enHomeCard from '../../locales/en/homecard.json';
import ptHomeCard from '../../locales/pt/homecard.json';

function HomeCard() {
    const { i18n } = useTranslation();
    const homecardData = i18n.language === 'en' ? enHomeCard : ptHomeCard;

    return (
        <div className="homecards">
            {homecardData.map(post => (
                <motion.div
                    key={post.id}
                    className="homecards-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false }}
                >
                    <img src={post.photo} className="image" alt={post.title} />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.paragraph}</p>
                        <p>{post.paragraph2}</p>
                        <p>{post.paragraph3}</p>
                        {post.paragraph4 && <p>{post.paragraph4}</p>}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default HomeCard;
