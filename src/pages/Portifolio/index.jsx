import React from 'react';
import './portifolio.css';
import PortfolioCard from '../../components/PortfolioCard';
import { useTranslation } from 'react-i18next';

// Import house images
import house1 from '../../img/715-Evans-St-Paramus-Boro.jpeg';
import house2 from '../../img/28-Heron-Rd-Livingston-Twp.webp';
import house3 from '../../img/198-W-Hobart-Gap-Rd-Livingston-Twp.webp';
import house4 from '../../img/9-countryside-drive-Livingston.webp';
import house5 from '../../img/7-Dorothy-Ave-Livingston.webp';
import house6 from '../../img/2E-Cedar-St-Livingston-Twp.webp';

const properties = [
    {
        id: 1,
        address: '715 Evans St, Paramus Boro, NJ',
        image: house1,
        description: 'Luxury home with modern amenities'
    },
    {
        id: 2,
        address: '28 Heron Rd, Livingston Twp, NJ',
        image: house2,
        description: 'Beautiful family home with spacious yard'
    },
    {
        id: 3,
        address: '198 W Hobart Gap Rd, Livingston, NJ',
        image: house3,
        description: 'Elegant residential property'
    },
    {
        id: 4,
        address: '9 Countryside Drive, Livingston, NJ',
        image: house4,
        description: 'Modern suburban home'
    },
    {
        id: 5,
        address: '7 Dorothy Ave, Livingston, NJ',
        image: house5,
        description: 'Charming family residence'
    },
    {
        id: 6,
        address: '2E Cedar St, Livingston Twp, NJ',
        image: house6,
        description: 'Contemporary home with premium features'
    }
];

const Portifolio = () => {
    const { t } = useTranslation('portfolio');
    
    return (
        <div style={{ margin: 0, padding: 0 }}>
            <div className="portfolio-banner" style={{ marginTop: 0 }}></div>
            
            <div className="portfolio-container">
                <h1 className="portfolio-title">{t('portfolio')}</h1>
                <PortfolioCard properties={properties} />
            </div>
        </div>
    );
};

export default Portifolio;