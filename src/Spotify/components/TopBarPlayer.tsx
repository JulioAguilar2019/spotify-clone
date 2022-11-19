import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface Props {
    name: string | undefined
}

export const TopBarPlayer = ({ name }: Props) => {

    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    return (

        <View className='flex flex-row justify-between w-full px-5 ' style={{ marginTop: top + 15 }}>
            <TouchableOpacity>
                <AntDesign name="down" size={24} color="white"
                    onPress={() => navigation.goBack()}
                />
            </TouchableOpacity>
            <View>
                <Text className='text-white text-center text-sm'>Playing</Text>
                <Text className='text-white text-center text-sm'>{name}</Text>
            </View>
            <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={24} color="white" />
            </TouchableOpacity>
        </View>

    )
}

