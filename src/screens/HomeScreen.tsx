import { Text, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '../components';
import { ArtistCard, PlayListCard } from '../Spotify/components';
import { useSpotifyAuth } from '../auth/hooks/useSpotifyAuth';
import { useGetMyPlaylistsQuery, useGetUserDataQuery } from '../api/spotifyApi';
import { useAppDispatch, useAppSelector } from '../store';
import { login } from '../store/authSlices/authSlice';
import { TrackCard } from '../Spotify/components/TrackCard';



export const HomeScreen = () => {

    // const { data, status } = useGetNewReleasesQuery();
    // console.log(data)
    // console.log(status)
    // const { promptAsync } = useSpotifyAuth()

    // const { data } = useGetMyPlaylistsQuery();
    // console.log()

    // const algo = useAppSelector(state => state.spotifyApi)
    // console.log(algo)

    const { data: userData, isLoading: userIsLoading, isError: userIsError } = useGetUserDataQuery()
    const { data: playListData } = useGetMyPlaylistsQuery()



    return (
        <Container>
            <ScrollView>
                <Text className='text-4xl my-2 '>Hello {userData?.display_name}</Text>
                <Text className='text-gray-500 mb-3'>Lets listen to something cool today</Text>
                <Text className='text-xl mb-3'>Artists</Text>
                <ArtistCard />
                <Text className='text-xl mb-3'>Recently played</Text>

                <TrackCard />

                <Text className='text-xl my-3'>PlayLists</Text>

                <PlayListCard data={playListData} />
            </ScrollView>
        </Container>
    )
}
