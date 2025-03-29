import "./portfoliocard.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MapPin } from "lucide-react";

function PortfolioCard({ properties }) {
  const { t } = useTranslation('portfolio');

  const openGoogleMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="portfolio-cards">
      {properties.map((property) => (
        <motion.div
          key={property.id}
          className="portfolio-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false }}
        >
          <div className="portfolio-card-image">
            <img src={property.image} alt={property.address} />
          </div>
          <div className="portfolio-card-info">
            <button 
              className="address-btn" 
              onClick={() => openGoogleMaps(property.address)}
              title={property.address}
            >
              <span>{t('address')}</span>
              <MapPin size={16} color="#fff" strokeWidth={2.5} />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default PortfolioCard; 