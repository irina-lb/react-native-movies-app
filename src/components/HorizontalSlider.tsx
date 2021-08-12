import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Result } from '../interfaces/movieInterface';
import MoviePosters from './MoviePosters';


interface Props {
    title?: string;
    movies: Result[]
}


const HorizontalSlider = ({ title, movies }: Props) => {
    

    return (
        <View style={{ 
            height: ( title ) ? 260 : 220
        }}>

            {
                title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 10 }}>{ title }</Text>
            }

            <FlatList
                data={ movies }
                renderItem={ ({ item }: any) => (
                    <MoviePosters movie={ item } width={ 140 } height={ 200 } />
                )}
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />

        </View>
    )
}

export default HorizontalSlider