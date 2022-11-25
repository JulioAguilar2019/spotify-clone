import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFormatTime } from '../hooks/useFormatTime';
import { TrackPlayList } from '../../Interfaces';
import { useGetAvailableDevicesQuery, useLazyGetPlayerQuery, useNextTrackMutation, usePauseMutation, usePlayTrackMutation, usePreviousTrackMutation } from '../../api/spotifyApi';
import { useState, useEffect } from 'react';


interface Props {
    data: TrackPlayList | undefined
}

export const BottomBarPlayer = ({ data }: Props) => {

    const finalDuration = useFormatTime(data!.duration_ms)
    const { data: devicesData } = useGetAvailableDevicesQuery()
    console.log(devicesData)
    // handlePlay(handleplayData)

    const [fetchPlayer, { data: playerData }] = useLazyGetPlayerQuery()
    const [isPlaying, setIsPlaying] = useState<Boolean>(playerData?.is_playing)

    useEffect(() => {
        fetchPlayer()
    }, [isPlaying])

    const [handlePlay, { error, data: dataPlay }] = usePlayTrackMutation()
    console.log({error})

    const handleplayData =
    {
        deviceId: devicesData?.devices[0]?.id,
        trackId: data?.uri,
        position_ms: playerData?.progress_ms

    }
    const [handlePause] = usePauseMutation()
    const [handleNext] = useNextTrackMutation()
    const [handlePrevious] = usePreviousTrackMutation()

    const togglePLayer = () => {
        isPlaying ? handlePause() : handlePlay(handleplayData)
        setIsPlaying(!isPlaying)
    }
    // console.log(playerData.is_playing)



    return (
        <View className='flex flex-col w-full h-2/6 absolute bottom-0 left-0 right-0 p-5'>
            <View className='mb-2'>
                <Text className='font-bold text-white'>{data?.name}</Text>
                <Text className='text-white'>{data?.artists[0].name}</Text>
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
                    <TouchableOpacity
                        onPress={() => handlePrevious()}
                    >
                        <AntDesign name="stepbackward" size={30} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => togglePLayer()}
                    // disabled={isFetching}
                    >
                        <AntDesign name="play" size={60} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleNext()}
                    >
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

