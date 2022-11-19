import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Container } from '../components';
import { ArtistCard, PlayListCard } from '../Spotify/components';
import { useSpotifyAuth } from '../auth/hooks/useSpotifyAuth';
import { useGetArtistsQuery, useGetMyPlaylistsQuery, useGetNewReleasesQuery, useGetRecentlyPlayedQuery, useGetUserDataQuery } from '../api/spotifyApi';
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

    // console.log(data?.albums.items.map(item => item.artists.map(artist => artist.id)))
    // console.log(data?.albums.items.map(item => item.images[0]))
    // const { data: ReleasesData, isLoading: ReleaseIsLoading, isError: ReleasesIsError } = useGetNewReleasesQuery(10)

    // const artistIds = ReleasesData?.albums.items.map(item => item.artists.map(artist => artist.id))
    // const ids = artistIds?.toString().replace(/,/gi, ',')
    // const { data: ArtistData, isLoading: ArtistIsLoading, isError: ArtistIsError } = useGetArtistsQuery(ids)
    // console.log(ArtistData)


    const { data: userData, isLoading: userIsLoading, isError: userIsError } = useGetUserDataQuery()
    const { data: playListData } = useGetMyPlaylistsQuery()
    const { data: trackData } = useGetRecentlyPlayedQuery()


    return (
        <Container>
            <View>
                <Text className='text-4xl my-2 '>Hello {userData?.display_name}</Text>
                <Text className='text-gray-500 mb-3'>Lets listen to something cool today</Text>
                <Text className='text-xl mb-3'>Artists</Text>
                <ArtistCard />
                <Text className='text-xl mb-3'>Recently played</Text>

                <TrackCard data={trackData} />

                <Text className='text-xl my-3'>PlayLists</Text>

                <PlayListCard data={playListData} />



            </View>
        </Container>
    )
}
