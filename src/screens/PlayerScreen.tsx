import { View, ImageBackground, } from 'react-native';
import React from 'react'
import img from '../../assets/images/bb.jpg'
import { BottomBarPlayer, TopBarPlayer } from '../Spotify/components';


export const PlayerScreen = () => {

    return (
        <ImageBackground
            source={img}
            className='w-full h-full'
        >
            <View className='w-full h-full bg-black opacity-75'>
                <TopBarPlayer />
                <BottomBarPlayer />
            </View>
        </ImageBackground>
    )
}

