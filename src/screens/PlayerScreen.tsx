import { View, ImageBackground, } from 'react-native';
import React from 'react'
import img from '../../assets/images/bb.jpg'
import { BottomBarPlayer, TopBarPlayer } from '../Spotify/components';
import { TrackPlayList } from '../Interfaces';
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



interface Props extends NativeStackScreenProps<RootStackParamList, 'PlayerScreen'> {

}

export const PlayerScreen = ({ route }: Props) => {

    const { params } = route

    return (
        <ImageBackground
            source={{ uri: params?.album?.images[0]?.url }}
            className='w-full h-full bg-cover'
        >
            <View className='w-full h-full bg-black opacity-75'>
                <TopBarPlayer name={params?.artists[0]?.name} />
                <BottomBarPlayer data={route.params} />
            </View>
        </ImageBackground>
    )
}

