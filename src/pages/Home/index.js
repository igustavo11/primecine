import { useEffect, useState} from 'react';
import api from '../../services/api';
import { Link} from 'react-router-dom';
import './home.css';

//url api:https://api.themoviedb.org/3/movie/now_playing?api_key=c0a4e00d599e197ca91f933bad4bfa3e&language=pt-BR
function Home(){

    const [filmes,setFilmes] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key:"c0a4e00d599e197ca91f933bad4bfa3e",
                    language:"pt-BR",
                    page:1,
                }
            })

            setFilmes(response.data.results.slice(0,10))
            setLoading(false);

        }

        loadFilmes();

        
    }, [])


    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes..</h2>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title}></img>
                            <Link to ={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}

            </div>
            
        </div>
    
    )

}
export default Home;
