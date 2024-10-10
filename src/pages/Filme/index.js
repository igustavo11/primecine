import { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import './filme-info.css';
import api from '../../services/api';
import {toast} from 'react-toastify'

function Filme(){
    const { id } = useParams();

    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading,setLoading] = useState(true);



    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key:"c0a4e00d599e197ca91f933bad4bfa3e",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                navigate("/", { replace:true});
                return;

            })

        }

        loadFilme();

        return () =>{

        }
    }, [navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primecine");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmesSalvos.some( (filmesSalvo)=> filmesSalvo.id === filme.id)

        if(hasFilmes){
            toast.warn("Esse filme esta na sua lista")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primecine", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!!")
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>CARREGANDO DETALHES</h1>

            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt ={filme.title}></img>

           <h3>Sinopse</h3>
           <span>{filme.overview}</span>
           <strong>Avaliação: {filme.vote_average} /10</strong>
           <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
                <a target="blank" rel="external" href={`https://youtube.com/results?serach_query= ${filme.title} trailer`}>
                    Trailer
                </a>
            </button>
        
           </div>
        </div>
    
    )

}
export default Filme;
