import './teamcards.css';

function TeamCard(){
    const state = 
    [
        {
            id: 1,
            name: 'Lorenzo Sargenti',
            position: 'Director & Investment Committee',
            biograph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam erat ante, egestas ac justo eu, convallis auctor justo. Quisque vestibulum, lacus id venenatis malesuada, lectus mi pharetra leo, id cursus odio nunc ut nulla. Suspendisse et dui tempus turpis mollis mollis. Nullam in sapien sed nisl venenatis dignissim sit amet at magna. Etiam varius erat eu libero porttitor lacinia. Nulla ante sem, gravida vel lectus ac, egestas mattis mauris. Donec dignissim ipsum sed diam aliquet, at imperdiet libero semper.',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/ab940540-5cb9-463f-88d6-c409772dc2ab/Lorenzo+Sargenti+Shape+Equity+Headshot.jpg?format=500w',

        },

        {
            id: 2,
            name: 'Mark Hvidsten',
            position: 'Founder',
            biograph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue nisl, feugiat non nibh vehicula, molestie sodales nibh. Pellentesque condimentum, mi non lobortis pulvinar, urna tellus laoreet mi, et condimentum ante tellus a odio',
            photo: 'https://images.squarespace-cdn.com/content/v1/631349e6c645d416c5f05d60/2c66ac29-70e3-4b96-ab3a-ef7f9e311b64/MPE_9500PrintDMDKR.jpg?format=1500w',

        },
    ]
    return(

        <div className="cards">
        {state.map(post => (
            <div key={post.id}>
                <h1>{post.name}</h1>
                <h3>{post.position}</h3>
                <div className="card-content">
                <img src={post.photo}/>
                <p>{post.biograph}</p>
            </div>
            </div>
        ))}
        </div>


    );

};
export default TeamCard;