import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useGetRecentlyPlayedQuery, useGetTracksQuery } from '../../api/spotifyApi';



export const TrackCard = () => {
    const navigation = useNavigation()
    const { data: RecentlyData, isError } = useGetRecentlyPlayedQuery(undefined, { refetchOnMountOrArgChange: true })
    const ids = RecentlyData?.items.map(item => item?.track?.id).toString().replace(/,/gi, ',')
    const { data: tracksData } = useGetTracksQuery(ids)


    return (
        <FlatList
            data={tracksData?.tracks}
            renderItem={({ item: dataTrack }) => (
                <View className='min-w-[180] max-w-[180] max-h-[230]  bg-cover mx-2'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PlayerScreen', dataTrack)}
                    >
                        <Image source={{ uri: dataTrack?.album?.images[0].url }} className='w-full min-h-[85%] rounded-lg bg-cover' />
                        <Text className='text-center capitalize text-xs' numberOfLines={2}>{dataTrack?.name} - {dataTrack?.artists[0]?.name}</Text>
                    </TouchableOpacity>
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
        </FlatList>


    )
}




