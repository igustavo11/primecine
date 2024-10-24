
import './about.css';
import AboutCard from '../../components/AboutCard';



function About(){
  const description = [
    {
        id: 1,
        photo:'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
        title:'Sonho Grande',
        subtitle:'Ser referência fazendo o certo da forma certa!',
        paragraph1:'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
        paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
    {
      id: 2,
      photo:'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title:'Sonho Grande',
      subtitle:'Ser referência fazendo o certo da forma certa!',
      paragraph1:'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
      paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
    {
      id: 3,
      photo:'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title:'Sonho Grande',
      subtitle:'Ser referência fazendo o certo da forma certa!',
      paragraph1:'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
      paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
    {
      id: 4,
      photo:'https://web.xpi.com.br/xp-new/wp-content/uploads/sites/18/2022/12/FII-bloco-1-1.png?w=1200&h=undefined&q=75',
      title:'Sonho Grande',
      subtitle:'Ser referência fazendo o certo da forma certa!',
      paragraph1:'Chegamos até aqui buscando o impossível. Procuramos desafios além das nossas capacidades e não nos conformamos com o status quo.',
      paragraph2: 'Seremos liderança global nas questões ESG, transformando problemas socioambientais em oportunidades de negócio, inspirando empresas e pessoas a construir um futuro melhor e posicionando-se como empresa que se responsabiliza pelo seu legado.',
    },
    ]

    const Id1 = description.find(item => item.id === 1);
    const Id2 = description.find(item => item.id === 2);
    const Id3 = description.find(item => item.id === 3);
    const Id4 = description.find(item => item.id === 4);

    return(
        <>

        <div className="home-container">
                    <div className="content-center">
                        <h3 className="home-title">Our passion for real estate is </h3>
                        <h3 className="home-title">the secret to your sucess</h3>
                    </div>
                </div>

          <section className="transition-paragraph">
            <h1>Nossos Pilares</h1>
            <AboutCard></AboutCard>
          </section>
          
          <section className="description-about1">
            <div className='paragraph'>
              <h1>{Id1.title}</h1>
              <h3>{Id1.subtitle}</h3>
              <p>{Id1.paragraph1}<br/>{Id1.paragraph2}</p>
            </div>
            <img src={Id1.photo}/>
          </section>

          <section className="description-about2">
            <img src={Id2.photo}/>
            <div className='paragraph'>
              <h1>{Id2.title}</h1>
              <h3>{Id2.subtitle}</h3>
              <p>{Id2.paragraph1}<br/>{Id2.paragraph2}</p>
            </div>
          </section>

          <section className="description-about1">
            <div className='paragraph'>
              <h1>{Id3.title}</h1>
              <h3>{Id3.subtitle}</h3>
              <p>{Id3.paragraph1}<br/>{Id3.paragraph2}</p>
            </div>
            <img src={Id3.photo}/>
          </section>

          <section className="description-about2">
            <img src={Id4.photo}/>
            <div className='paragraph'>
              <h1>{Id4.title}</h1>
              <h3>{Id4.subtitle}</h3>
              <p>{Id4.paragraph1}<br/>{Id4.paragraph2}</p>
            </div>
          </section>

          <section className="values">
            <h1>VALUES</h1>
            <p>Our core values are deeply ingrained principles that guide all of Shape Equity’s actions; they serve as our cultural cornerstones. We believe these are crucial for the success of the business, all stakeholders and the communities we are a part of.<br/>Accountability   •   Trust   •   Integrity   •   Excellence   •   Teamwork</p>
          </section>

        </>
    
    )
}



export default About;
