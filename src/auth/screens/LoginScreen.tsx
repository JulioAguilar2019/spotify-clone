import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { Container } from '../../components'

import { useSpotifyAuth } from '../hooks/useSpotifyAuth';


export const LoginScreen = () => {

    const { promptAsync } = useSpotifyAuth()


    return (
        <Container>
            <View>
                <Text className='text-center font-bold text-lg'>Hello Again</Text>
                <Text className='text-center font-bold text-lg'>Welcome back you've been miseed!</Text>
                <TouchableOpacity onPress={() => promptAsync()} className='p-5 bg-orange-300'><Text className='text-center'>Login </Text></TouchableOpacity>
            </View>
        </Container>
    )
}

