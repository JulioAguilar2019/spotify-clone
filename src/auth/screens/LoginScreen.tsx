import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { Container } from '../../components'
import { useAppDispatch } from '../../store';
import { useEffect } from 'react';
import { setUserData } from '../../store/authSlices';
import { useGetUserDataQuery } from '../../api/spotifyApi';
import { getToken, useSpotifyAuth } from '../hooks/useSpotifyAuth';

export const LoginScreen = () => {

    const { promptAsync } = useSpotifyAuth()

    useEffect(() => {
        const setToken = async () => {
            const token = await getToken()
            console.log(token)
        }
        setToken()

    }, [])


    return (
        <Container>
            <View>
                <Text className='text-center'>Hello Again</Text>
                <Text className='text-center'>Welcome back you've been miseed!</Text>
                <TouchableOpacity onPress={() => promptAsync()}><Text> Login xd</Text></TouchableOpacity>
            </View>
        </Container>
    )
}

