import { View, Text } from 'react-native'
import React from 'react'
import { Container } from '../components'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { useState } from 'react';


export const SearchScreen = () => {

    const [search, setSearch] = useState<string>('')

    return (

        <Container>
            <View className={'p-0 flex flex-row items-center bg-gray-50/40 border border-gray-300/20 rounded-lg mb-5 mx-3 mt-2 shadow-md'}>
                <AntDesign name="search1" size={24} color="white" className={'flex-none mx-3'} />
                <TextInput onChangeText={(text: string) => { setSearch(text) }} className={'text-white flex-auto p-3 pl-0'} numberOfLines={1} multiline={false} clearButtonMode="always" placeholderTextColor="white" placeholder='Buscar...' />
            </View>
        </Container>

    )
}
