import { View, Text } from 'react-native'
import React from 'react'
import spotifyJson from '../../assets/images/99132-spotify.json'
import AnimatedLottieView from 'lottie-react-native'

export const Loader = () => {
    return (
        <View >
            <AnimatedLottieView style={{ width: 400 }} autoPlay source={spotifyJson} loop />
            <Text className={'text-2xl text-center'}>Cargando...</Text>
        </View>
    )
}

