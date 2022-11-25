import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useFormatTime } from '../hooks/useFormatTime';
import { TrackPlayList } from '../../Interfaces';
import { useGetAvailableDevicesQuery, useLazyGetPlayerQuery, useNextTrackMutation, usePauseMutation, usePlaySongMutation, usePreviousTrackMutation, useLazyGetCurrentlyPlayingQuery } from '../../api/spotifyApi';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../store';


interface Props {
    data: TrackPlayList | undefined
}

interface CurrentSong {
    name: string
    artist: string
    image: string
    duration: number
    uri: string
    position: number

}

export const BottomBarPlayer = ({ data }: Props) => {

    const initialState = {
        name: data?.name,
        artist: data?.artists[0].name,
        image: data?.album.images[0].url,
        duration: useFormatTime(data?.duration_ms),
        uri: data?.album.uri,
        position: data?.track_number
    }

    const { data: devicesData } = useGetAvailableDevicesQuery()
    const [fetchPlayer, { data: playerData }] = useLazyGetPlayerQuery()
    const [fetchCurrently, { data: currentlyData }] = useLazyGetCurrentlyPlayingQuery()


    const [isPlaying, setIsPlaying] = useState<Boolean>(playerData?.is_playing)
    const [currentSong, setCurrentSong] = useState<CurrentSong>(initialState)
    const [time, setTime] = useState<number>(playerData?.progress_ms)

    useEffect(() => {
        fetchPlayer()
        // console.log(playerData)
    }, [isPlaying])

    useEffect(() => {
        fetchCurrently()
    }, [currentSong])

    const [handlePlay] = usePlaySongMutation()
    const handleplayData =
    {
        deviceId: devicesData?.devices[0]?.id,
        trackPlayList: currentSong.uri,
        position: currentSong.position - 1,
        position_ms: time
    }

    const [handlePause] = usePauseMutation()
    const [triggerNext] = useNextTrackMutation()
    const [triggerPrevious] = usePreviousTrackMutation()

    const handleNextSong = () => {
        triggerNext()
        fetchCurrently()
        setTime(0)
        const nextSong = {
            name: currentlyData?.item?.name,
            artist: currentlyData?.item?.artists[0].name,
            image: currentlyData?.item?.album?.images[0].url,
            duration: useFormatTime(currentlyData?.item?.duration_ms),
            uri: currentlyData?.item?.album?.uri,
            position: currentlyData?.item?.track_number

        }
        setCurrentSong(nextSong)
    }

    const togglePLayer = () => {

        setTime(useFormatTime(playerData?.progress_ms))
        isPlaying ? handlePause() : handlePlay(handleplayData)
        setIsPlaying(!isPlaying)
    }




    return (
        <View className='flex flex-col w-full h-2/6 absolute bottom-0 left-0 right-0 p-5'>
            <View className='mb-2'>
                <Text className='font-bold text-white'>{currentSong?.name}</Text>
                <Text className='text-white'>{currentSong?.artist}</Text>
            </View>
            <View>
                <Text className='text-center text-white'>Aqui debe ir el slider</Text>
                <View className='flex flex-row justify-between'>
                    <Text className='text-white'>{time}</Text>
                    <Text className='text-white'>{currentSong.duration}</Text>
                </View>
            </View>
            <View>
                <View className='flex flex-row justify-around mt-5 p-4 items-center'>
                    <TouchableOpacity>
                        <FontAwesome name="random" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => triggerPrevious()}
                    >
                        <AntDesign name="stepbackward" size={30} color="white" />
                    </TouchableOpacity>




                    <TouchableOpacity
                        onPress={() => togglePLayer()}
                    >
                        {
                            isPlaying ?
                                <AntDesign name="pausecircle" size={60} color="white" />
                                :
                                <AntDesign name="play" size={60} color="white" />


                        }

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => handleNextSong()}
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

