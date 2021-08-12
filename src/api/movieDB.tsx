import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a107289d3d7555b5c58803b7e7a23db9',
        language: 'en-EN'
    }
});


export default movieDB;
