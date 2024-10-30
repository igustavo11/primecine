import './teamcards.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import enTeam from '../../locales/en/team.json';
import ptTeam from '../../locales/pt/team.json';

import jefersonImage from '../../img/jeferson.png';


const images = {
    'jeferson.png': jefersonImage
};

function TeamCard() {
    const { i18n } = useTranslation();
    
    
    const teamData = i18n.language === 'en' ? enTeam : ptTeam;

    return (
        <div className="cards">
            {teamData.map(post => (
                <motion.div
                    key={post.id}
                    className="card"
                    initial={{ opacity: 0, y: 40 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 40 }} 
                    transition={{ duration: 1.5 }}
                    viewport={{ once: false }} 
                >
                    <h1>{post.name}</h1>
                    <h3>{post.position}</h3>
                    <hr className="line" />
                    <div className="card-content">
                        <img src={post.photo} alt={post.name} />
                        <div>
                            <p>{post.biograph1}</p>
                            <p>{post.biograph2}</p>
                            <p>{post.biograph3}</p>
                            {post.biograph4 && <p>{post.biograph4}</p>}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default TeamCard;
