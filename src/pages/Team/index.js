import './team.css';
import TeamCard from '../../components/TeamCard';
import { motion } from 'framer-motion';

function Team() {
    return (
        <>
            <div className="home-container">
                <div className="content-center">
                    <h3 className="home-title">Welcome to Prosperium</h3>
                    <p>aaaafafaafafafafafafafafa</p>
                </div>
            </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
        >
        

            <div className="Team">
                <TeamCard />
            </div>
        </motion.div>

        </>
    );
}

export default Team;
