import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../components';
import { ArtistCard, SongCard } from '../Spotify/components';



export const HomeScreen = () => {

    return (
        <Container>
            <View>
                <Text className='text-4xl my-2 '>Hello Julio!</Text>
                <Text className='text-gray-500 mb-3'>Lets listen to something cool today</Text>
                <Text className='text-xl mb-3'>Artists</Text>
                <View style={{ flexDirection: 'row' }}>
                    <ArtistCard />
                    <ArtistCard />
                </View>
                <Text className='text-xl my-3'>Songs</Text>

                <View style={{ flexDirection: 'row' }}>
                    <SongCard />
                    <SongCard />
                </View>
                <Text className='text-xl mb-3'>Songs</Text>

                <View style={{ flexDirection: 'row' }}>
                    <SongCard />
                    <SongCard />
                </View>
            </View>
        </Container>
    )
}
