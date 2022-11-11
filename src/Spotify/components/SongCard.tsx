import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import img from '../../../assets/images/bb.jpg'
import { RootStackScreenProps } from '../../../types';
import { useNavigation } from '@react-navigation/native';




export const SongCard = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            className='w-2/5 max-h-48 mx-1 my-2'
            onPress={() => navigation.navigate('PlayerScreen')}
        >
            <Image source={img} className='w-11/12 h-5/6 rounded-lg' />
            <Text numberOfLines={2}>Your tops songs 2021</Text>
        </TouchableOpacity>

    )
}

