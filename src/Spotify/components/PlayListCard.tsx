import { PlayList } from '../../Interfaces';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'

interface Props {
    data: PlayList | undefined
}

export const PlayListCard = ({ data }: Props) => {
    const navigation = useNavigation()
    // data?.items.map((item) => {
    //     console.log(item)
    // })


    return (
        <FlatList
            data={data?.items}
            renderItem={({ item: dataPlayList }) => (
                <View className='min-w-[180] max-h-[200] bg-cover mx-2 '>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PlayListScreen', dataPlayList)}
                    >
                        <Image source={{ uri: dataPlayList?.images[0].url }} className='w-full h-[90%] rounded-lg bg-cover' />
                        <Text className='text-center' numberOfLines={1}>{dataPlayList?.name}</Text>
                    </TouchableOpacity>
                </View>
            )}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
        >
        </FlatList>

    )
}

