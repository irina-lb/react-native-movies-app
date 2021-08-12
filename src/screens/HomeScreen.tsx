import React, {useContext, useEffect} from 'react'
import { View,  ActivityIndicator, Dimensions } from 'react-native'
import useMovies from '../hooks/useMovies'
import MoviePosters from '../components/MoviePosters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'
import { ScrollView } from 'react-native-gesture-handler'
import HorizontalSlider from '../components/HorizontalSlider'
import { GradientContext } from '../context/GradientContext'
import { getImageColors } from '../helpers/getColors'


const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const {top} = useSafeAreaInsets();
    const { setMainColors } = useContext( GradientContext )

    const getPosterColor = async(index: number)=>{
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
        const [ primary = 'green', secondary = 'orange' ] = await getImageColors( uri );
        setMainColors({ primary, secondary })
    }

    useEffect(()=>{
        if(nowPlaying.length>0){
            getPosterColor(0)
        }
    },[nowPlaying])


    if(isLoading){
        return(
            <View style = {{flex:1, justifyContent:'center', alignContent:'center'}}>
                <ActivityIndicator color='red' size={100}/>
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{marginTop: top+20}}>
                <Carousel
                        data={nowPlaying}
                        renderItem={({item}: any)=><MoviePosters movie={item}/>}    
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                        onSnapToItem={index=>getPosterColor(index)}
                />
            </View>

            <HorizontalSlider title="Popular" movies={ popular } />
            <HorizontalSlider title="Top Rated" movies={ topRated } />
            <HorizontalSlider title="Upcoming" movies={ upcoming } />

        </ScrollView>
    )
}

export default HomeScreen
