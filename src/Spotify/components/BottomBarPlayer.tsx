import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFormatTime } from '../hooks/useFormatTime';


interface Props {
    trackName: string | undefined
    artistName: string | undefined
    duration: number | undefined
}


export const BottomBarPlayer = ({ trackName, artistName, duration }: Props) => {

    const finalDuration = useFormatTime(duration)


    return (
        <View className='flex flex-col w-full h-2/6 absolute bottom-0 left-0 right-0 p-5'>
            <View className='mb-2'>
                <Text className='font-bold text-white'>{trackName}</Text>
                <Text className='text-white'>{artistName}</Text>
            </View>
            <View>
                <Text className='text-center text-white'>Aqui debe ir el slider</Text>
                <View className='flex flex-row justify-between'>
                    <Text className='text-white'>0:00</Text>
                    <Text className='text-white'>{finalDuration}</Text>
                </View>
            </View>
            <View>
                <View className='flex flex-row justify-around mt-5 p-4 items-center'>
                    <TouchableOpacity>
                        <FontAwesome name="random" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="stepbackward" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="play" size={60} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name="stepforward" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="repeat" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

