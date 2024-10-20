import './aboutcard.css'

function AboutCard(){
    const about = [
        {
            id: 1,
            photo:'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/eeabbe03-e99b-4aac-bb15-7cc65ad61e69/3.png?format=750w',
            title:'MISSION',
            paragraph:'Generate attractive returns on equity for our partners and investors based on asset appreciation, all with a mindset of climate awareness through efficiency.',
        },
        {
            id:2,
            photo:'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/e5d10360-aaf6-4aa6-bb80-a53ecdcbd2b4/4.png?format=750w',
            title:'STRATEGY',
            paragraph:'Create homes with sophisticated, modern designs and processes. We leverage materials and products that have demonstrated energy efficiency and durability.',
        },
    ]

    return(
        <div className="aboutcards">
         {about.map(post => (
            <div key={post.id}>
                <img src={post.photo}/>
                <h2>{post.title}</h2>
                <p>{post.paragraph}</p>
            </div>
        ))}

        </div>
    );
};
export default AboutCard;