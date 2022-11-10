import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export const SongCard = () => {
    return (
        <View style={styles.container}>
            <Text> text</Text>
        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    img: {
        height: '80%',
        width: 130,
    }
})


