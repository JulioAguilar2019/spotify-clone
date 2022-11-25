import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from 'react'
import { Container } from '../components/Container';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { SongPlayList } from '../Spotify/components';


interface Props extends NativeStackScreenProps<RootStackParamList, 'PlayListScreen'> {

}

export const PlayListScreen = ({ route }: Props) => {
    // console.log(route.params)

    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()



    return (
        <View className='flex-1'>
            <ImageBackground
                className='w-full min-h-[400]'
                source={{ uri: route.params?.images[0].url }}
            >
                <View className='flex flex-row justify-between w-full px-5 ' style={{ marginTop: top + 15 }}>
                    <TouchableOpacity>
                        <AntDesign name="left" size={24} color="white"
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Entypo name="dots-three-vertical" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            <View className='mx-4 flex flex-row py-2 items-center justify-between'>
                <Text className='text-white-500 font-bold '>{route.params?.name} </Text>
                <Entypo name="dot-single" size={20} color="white" />
                <Text className='text-white-500 capitalize'>{route.params?.owner.display_name}</Text>
                <Entypo name="dot-single" size={20} color="white" />
                <Text className='text-white-500 '>{route.params?.tracks.total} Songs</Text>
            </View>
            <SongPlayList playListId={route.params?.id} />



        </View>
    )
}

