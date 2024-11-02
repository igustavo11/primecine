import "./homecard.css"

function HomeCard(){
    const homecard = [
        {
            id: 1,
            photo: '',
            title: 'Assessoria digital',
            paragraph: 'Aqui, nós temos as soluções mais eficientes para guiá-lo na sua jornada de investimentos.',
        },
        {
            id: 2,
            photo: '',
            title: 'Assessoria digital',
            paragraph: 'Aqui, nós temos as soluções mais eficientes para guiá-lo na sua jornada de investimentos.',
        }
    ]
    return(
        <>
        <div className="homecards">
        {homecard.map(post =>(
            <div className="homecards-content" key={post.id}>
                <img src={post.photo} className="image"/>
                <div className="content">
                    <h2>{post.title}</h2>
                    <p>{post.paragraph}</p>
                </div>

            </div>

        ))}
        </div>
        </>
    );

}
export default HomeCard;