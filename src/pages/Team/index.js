import './team.css';
import TeamCard from '../../components/TeamCard';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import enTeam from '../../locales/en/team.json';
import ptTeam from '../../locales/pt/team.json';

function Team() {
    const { t } = useTranslation(); 

    return (
        <>
            <div className="home-container">
                <div className="content-center">
                    <motion.h3
                        className="home-title"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: -20 }} 
                        transition={{ duration: 0.5 }} 
                    >
                        <h3>{t('welcomeMessage')}</h3> 
                        <p>{t('team')}</p>
                    </motion.h3>
                </div>
            </div>

            <motion.div
                className="Team"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                exit={{ opacity: 0 }} 
                transition={{ duration: 0.5 }} 
            >
                <TeamCard />
            </motion.div>
        </>
    );
}

export default Team;
