import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { Container } from '../../components'
import { useSpotifyAuth } from '../hooks/useSpotifyAuth';
import AnimatedLottieView from 'lottie-react-native';
import spotifyJson from '../../../assets/images/spotify.json'



export const LoginScreen = () => {

    const { promptAsync } = useSpotifyAuth()


    return (
        <Container>
            <View className='flex items-center justify-center h-screen '>
                <AnimatedLottieView style={{ width: 350 }} autoPlay source={spotifyJson} loop />

                <TouchableOpacity onPress={() => promptAsync()} className='w-10/12 p-4 bg-[#1DB954] rounded-xl'><Text className='text-center font-bold text-lg'>Login </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

