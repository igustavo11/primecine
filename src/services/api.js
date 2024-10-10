import axios from "axios";

//base api:https://api.themoviedb.org/3/
//url api:https://api.themoviedb.org/3/movie/now_playing?api_key=c0a4e00d599e197ca91f933bad4bfa3e&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;