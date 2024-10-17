import './teamcards.css';

function TeamCard(){
    const state = 
    [
        {
            id: 1,
            name: 'Lorenzo Sargenti',
            position: 'Director & Investment Committee',
            biograph1: 'Lorenzo Sargenti is the Founder of Shape Equity Partners. With 15+ years of experience, he began his career in consultative and business development roles, focusing on strategic initiatives and development investments. Lorenzo has worked with global clients and industry leaders in developing and executing strategies with an unrelenting focus to achieve positive outcomes for both stakeholders and society.',
            biograph2: 'Lorenzo began his career in Switzerland in the banking sector, followed by numerous advisory and relationship management roles for the bank’s corporate, institutional and high-net-worth clients. He went on to lead client and market development for RMS in their North America, Latin America and Asia Pacific regions.',  
            biograph3: 'Lorenzo is a frequent speaker at industry conferences and management retreats, where he discusses topics around growth, climate change, advanced analytics, transformative innovations and human capital. He serves on the board of several early-stage start ups and not-for-profit organizations.',  
            biograph4: 'Lorenzo is a Harvard Business School Alum (PLD 2018). He also holds a BSc and MSc from the London School of Economics and Political Science. Lorenzo is originally from Switzerland and currently lives in New York City.',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/ab940540-5cb9-463f-88d6-c409772dc2ab/Lorenzo+Sargenti+Shape+Equity+Headshot.jpg?format=500w',

        },

        {
            id: 2,
            name: 'Mark Hvidsten',
            position: 'Founder',
            biograph1: 'Mark has 30+ years of experience in insurance, finance and capital markets. He is an experienced, results-driven, innovative visionary and global leader with significant business and financial acumen, known for pioneering approaches to delivering institutional value. ',
            biograph2: 'Formerly at Willis Towers Watson where he served as Deputy Chairman of Willis Reinsurance since 2014, holding a number of other executive positions, including Chairman of Willis Reinsurance Alternative Strategies and Director of Strategy & Transformation at Willis Reinsurance.',
            biograph3: 'Prior to joining Shape, Mark was CEO of Willis Capital markets from 2006 to 2009 and CEO of Willis Analytics from 2001 to 2005.',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/2c66ac29-70e3-4b96-ab3a-ef7f9e311b64/MPE_9500PrintDMDKR.jpg?format=1500w',

        },

        {
            id: 3,
            name: 'Federico Guglielmone',
            position: 'Investment Committee',
            biograph1: 'Federico is an accomplished financial services professional with a deep entrepreneurial experience investing in early and growth stage corporations. A Swiss native, Federico studied humanities at the University of Milan before becoming a financial operator at Bocconi University in Milan. He worked in Swiss private banking from 1999 to 2014, carving a path that led him to develop deep connections with valuable customers moving on to asset management, and finally the complete management of the institution.',
            biograph2: 'Federico founded Effegi Iniziative Sagl in 2014, a Swiss company that provides financial advisory services, including recovery and renovation of historic buildings in the Canton of Ticino. As a result, he began to develop a deep understanding, knowledge and passion for the real estate industry. In 2019, Guglielmone founded Recentor SA, a Swiss company that aims to structure and develop new architectures by introducing proprietary interior designs and innovative architectures.',
            biograph3: 'Federico has been developing ideas throughout his career and remains an active investor in startup companies including Timerepublik, Artvisor and Finless Foods. In his private life, Federico is a sports enthusiast, completing a Gigathlon, a Marathon des Sables and some Ultratrails.',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/f2f34e84-de75-4ff9-a9ac-22f759943d60/MPE_9582PrintDM.jpg?format=1500w',

        },

        {
            id: 4,
            name: 'Victoria alin',
            position: 'Head, Shape Designs',
            biograph1: 'Shape Designs. Victoria began her career as a creative, writing and art directing public relations materials. She then moved into advertising, working on packaged goods accounts including Procter & Gamble, H.J. Heinz, and Nabisco New Products.  She was heavily involved in the agency’s future-focussed, strategic group where she managed Victoria’s Secret initiatives and the development of travel marketing prospects, winning the British Virgin Islands account along the way.',
            biograph2: 'She then joined a fragrance house, directing worldwide fragrance activities for Procter & Gamble Fine Fragrances. She created a new capability—Insight and Innovation— presented widely in Europe and Asia, and contributed to the Color Marketing Group.',
            biograph3: 'Victoria went on to form a business conducting multi-sensory olfactory research. More recently, she co-developed a new venture—Coffee House 1420–which is now a successful operation.',
            biograph4:'Victoria was raised in Switzerland, Belgium, and Italy. She attended Wellesley College, La Sorbonne and McGill University, Canada where she received a degree in Marketing and Communications. Victoria is fascinated by world cultures music, dance and textiles.  She loves animals and volunteers at a dog rescue shelter.',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/c7f00538-5d92-4f2b-85a9-718bb63e938d/MPN_4224Print.jpg?format=1500w',

        },

    ]

    return(

        <div className="cards">
        {state.map(post => (
            <div key={post.id}>
                <h1>{post.name}</h1>
                <h3>{post.position}</h3>
                <hr className="line"/>
                <div className="card-content">
                <img src={post.photo}/>
                <div>
                    <p>{post.biograph1}</p>
                    <p>{post.biograph2}</p>
                    <p>{post.biograph3}</p>
                    <p>{post.biograph4}</p>
                </div>
            </div>
            </div>
        ))}
        </div>


    );

};
export default TeamCard;