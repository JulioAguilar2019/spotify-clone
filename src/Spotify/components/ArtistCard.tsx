import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'
import { useGetArtistsQuery, useGetNewReleasesQuery } from '../../api/spotifyApi';




export const ArtistCard = () => {

    const { data: ReleasesData, isLoading: ReleaseIsLoading, isError: ReleasesIsError } = useGetNewReleasesQuery(10)
    const artistIds = ReleasesData?.albums.items.map(item => item.artists.map(artist => artist.id))
    const ids = artistIds?.toString().replace(/,/gi, ',')
    // console.log(ids)
    const { data: ArtistData, isLoading: ArtistIsLoading, isError: ArtistIsError } = useGetArtistsQuery(ids)

    return (
        <FlatList
            data={ArtistData?.artists}
            renderItem={({ item: artist }) => (

                <View className='mx-1'>
                    <TouchableOpacity className="flex w-full max-h-40 mx-2">
                        <Image source={{ uri: artist?.images[0].url }} className="w-24 h-24 rounded-full self-center" />
                        <Text className='text-center font-bold py-2' numberOfLines={1}>{artist?.name}</Text>
                    </TouchableOpacity >
                </View>

            )}
            // keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}

        >
        </FlatList>
    )
}


