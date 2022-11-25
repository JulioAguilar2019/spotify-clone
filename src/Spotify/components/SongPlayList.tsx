import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { PlayListTracksI } from '../../Interfaces'
import { useGetPlayListTracksQuery } from '../../api/spotifyApi'
import { useNavigation } from '@react-navigation/native';


interface Props {
    playListId: string | undefined
}

export const SongPlayList = ({ playListId }: Props) => {

    const { data } = useGetPlayListTracksQuery(playListId)
    const navigation = useNavigation()


    return (
        <FlatList
            data={data?.items}
            renderItem={({ item: dataPlayList }) => (
                <TouchableOpacity className='w-full max-h-[80]'
                    onPress={() => navigation.navigate('PlayerScreen', dataPlayList.track)}
                >
                    <View className='flex flex-row align-middl'>
                        <Image source={{ uri: dataPlayList.track.album.images[0].url }} className='w-12 h-12 rounded-lg my-2 ml-2' />
                        <View className='flex flex-col justify-center ml-4'>
                            <Text className='text-white font-bold capitalize'>{dataPlayList?.track.name}</Text>
                            <Text className='text-white  capitalize'>{dataPlayList?.track.artists[0].name}</Text>
                        </View>
                        <TouchableOpacity className='justify-self-end self-center ml-auto mr-3'>
                            <Entypo name="dots-three-vertical" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            )}
        >

        </FlatList>
    )
}

