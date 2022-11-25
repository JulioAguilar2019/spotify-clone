import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container } from '../components'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native'
import { useState } from 'react';
import { useLazyGetSearchQuery } from '../api/spotifyApi';
import { Loader } from '../components/Loader';


export const SearchScreen = () => {
    const navigation = useNavigation()

    const [search, setSearch] = useState<string>('')

    const [getSearch, { data, error, isFetching }] = useLazyGetSearchQuery()

    const onSearchSubmit = () => {
        if (search != undefined || search != '') {
            getSearch(search)
        }
    }

    return (

        <Container>
            <View className={'p-0 flex flex-row items-center bg-gray-50/40 border border-gray-300/20 rounded-lg mb-5 mx-3 mt-2 shadow-md'}>
                <AntDesign name="search1" size={24} color="white" className={'flex-none mx-3'} />
                <TextInput onChangeText={(text: string) => { setSearch(text) }} onSubmitEditing={onSearchSubmit} className={'text-white flex-auto p-3 pl-0'} numberOfLines={1} multiline={false} clearButtonMode="always" placeholderTextColor="white" placeholder='Buscar...' />
            </View>

            {
                isFetching ? <Loader></Loader> :
                <View>
                    <View className={'flex flex-col'}>
                        <Text className={'text-2xl font-bold mb-3'}>Artists</Text>
                        <FlatList
                            data={data?.artists?.items}
                            renderItem={({ item: artist }) => (

                                <View className='mx-1'>
                                    <TouchableOpacity className="flex w-full max-h-40 mx-2">
                                        <Image source={{ uri: artist?.images[0]?.url }} className="w-24 h-24 rounded-full self-center" />
                                        <Text className='text-center font-bold py-2' numberOfLines={1}>{artist?.name}</Text>
                                    </TouchableOpacity >
                                </View>

                            )}
                            // keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}

                        >
                        </FlatList>
                    </View>

                    <View className={'flex flex-col'}>
                        <Text className={'text-2xl font-bold mb-3'}>Tracks</Text>
                        <FlatList
                            data={data?.tracks?.items}
                            renderItem={({ item }) => (
                                <View className='min-w-[180] max-w-[180] max-h-[230]  bg-cover mx-2'>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('PlayerScreen', item)}
                                    >
                                        <Image source={{ uri: item?.album?.images[0]?.url }} className='w-full min-h-[85%] rounded-lg bg-cover' />
                                        <Text className='text-center capitalize text-xs' numberOfLines={2}>{item?.name} - {item?.artists[0]?.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            horizontal
                            showsHorizontalScrollIndicator={false}>
                        </FlatList>
                    </View>
                </View>
            }



        </Container>

    )
}
