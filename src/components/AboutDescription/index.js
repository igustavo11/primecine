import './aboutdescription.css';

function AboutDescription(){
    const description = [
        {
          id: 1,
          photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
          title: 'Sonho Grande',
          subtitle: 'Ser referência fazendo o certo da forma certa!',
          paragraph1: 'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
          paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
        },
        {
          id: 2,
          photo: 'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
          title: 'Sonho Grande',
          subtitle: 'Ser referência fazendo o certo da forma certa!',
          paragraph1: 'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
          paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
        },
    ];

    return(
        <div className='description-about'>
             {description.map((post, index) => (
            <div key={index} 
            className={`post ${index % 2 === 0 ? 'left' : 'right'} ${index % 2 === 0 ? 'default-bg' : 'green-bg'}`}>
            <div className="paragraph">
                <h1>{post.title}</h1>
                <h3>{post.subtitle}</h3>
                <p>{post.paragraph1}<br />{post.paragraph2}</p>
             </div>
             <img src={post.photo} alt={post.title} />
             </div>
             ))}
        </div>
    
    )
}

export default AboutDescription;