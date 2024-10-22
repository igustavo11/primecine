import './team.css';
import TeamCard from '../../components/TeamCard';
import { motion } from 'framer-motion';

function Team() {
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
                        <h3>Welcome to Prosperium</h3>
                        <p>aaaafafaafafafafafafafafa</p>
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
