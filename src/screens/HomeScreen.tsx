import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../components';
import { ArtistCard, SongCard } from '../Spotify/components';



export const HomeScreen = () => {

    return (
        <Container>
            <View>
                <Text>HomeScreen</Text>
                <View style={{ flexDirection: 'row' }}>
                    <ArtistCard />
                    <ArtistCard />
                </View>
                <SongCard />
            </View>
        </Container>
    )
}
