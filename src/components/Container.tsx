import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    children: React.ReactNode
}

export const Container = ({ children }: Props) => {
    const { top } = useSafeAreaInsets()
    return (
        <View style={{ marginTop: top }}>
            {children}
        </View>

    )
}

