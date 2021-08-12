import React from 'react'
import { View, Image,StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Result } from '../interfaces/movieInterface'
import { useNavigation } from '@react-navigation/core';

interface Props{
    movie: Result;
    height?: number;
    width?: number;
} 

const MoviePosters = ({movie, height=420, width=300}: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    const navigation: any = useNavigation();

    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('DetailsScreen', movie )}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal:8,
                paddingBottom:20,
                paddingHorizontal:7
            }}
        >
            <View style={ styles.imageContainer }>
                <Image source={{uri: uri}} style={styles.image}/>
                <Text>{movie.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MoviePosters

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
})
