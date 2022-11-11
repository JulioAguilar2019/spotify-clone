import { View, Image, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import img from '../../../assets/images/bb.jpg'

export const ArtistCard = () => {

    return (
        <TouchableOpacity className="w-1/4 max-h-40 mx-2">
            <Image source={img} className="w-24 h-24 rounded-full" />
            <Text className='text-center' numberOfLines={1}>Bad Bunny</Text>
        </TouchableOpacity >
    )
}


