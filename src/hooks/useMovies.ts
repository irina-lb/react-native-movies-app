import React, {useState, useEffect} from 'react'
import movieDB from '../api/movieDB'
import { MovieDBNowPlaying, Result } from '../interfaces/movieInterface'

interface MovieState{
    nowPlaying: Result[];
    popular: Result[];
    topRated: Result[];
    upcoming: Result[];
}


const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState<MovieState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    })

    const getMovies = async()=>{
        const nowPlayingPromise = movieDB.get<MovieDBNowPlaying>('/now_playing');
        const popularPromise    = movieDB.get<MovieDBNowPlaying>('/popular');
        const topRatedPromise   = movieDB.get<MovieDBNowPlaying>('/top_rated');
        const upcomingPromise   = movieDB.get<MovieDBNowPlaying>('/upcoming');

        const resps = await Promise.all([ 
            nowPlayingPromise, 
            popularPromise, 
            topRatedPromise, 
            upcomingPromise 
        ]);

        setMovies({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcoming: resps[3].data.results,
        })
        setIsLoading(false)
    }

    useEffect(()=>{
        getMovies()
    },[])

    return {...movies, isLoading}
}

export default useMovies
