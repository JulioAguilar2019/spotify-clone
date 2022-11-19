import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Tracks } from '../../Interfaces';

interface Props {
    data: Tracks | undefined
}

export const TrackCard = ({ data }: Props) => {
    const navigation = useNavigation()
    console.log(data?.items)
    // console.log(data?.items.map(item => item?.album?.images[0].url))

    return (
        <FlatList
            data={data?.items}
            renderItem={({ item: dataTrack }) => (
                <View className='min-w-[180] max-h-[200]  bg-cover mx-2 bg-orange-100'>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PlayListScreen')}
                    >
                        <Image source={{ uri: dataTrack?.album?.images[0].url }} className='w-full h-[90%] rounded-lg bg-cover' />
                        <Text className='text-center' numberOfLines={2}>{dataTrack?.name}</Text>
                    </TouchableOpacity>
                </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
        >
        </FlatList>

    )
}




