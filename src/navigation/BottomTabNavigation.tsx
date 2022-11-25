import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyLibraryScreen, SearchScreen } from '../screens';
import { FontAwesome } from '@expo/vector-icons';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { LoginScreen } from '../auth/screens/LoginScreen';


const TabNavigator = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    const colorScheme = useColorScheme();


    return (

        <TabNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarHideOnKeyboard: true,

            }}
        >
            <TabNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
                }}
            />
            <TabNavigator.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
                }}
            />
            <TabNavigator.Screen

                name="MyLibraryScreen"
                component={MyLibraryScreen}
                options={{
                    title: 'My Library',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <TabBarIcon name="bookmark-o" color={color} />,
                }}
            />
        </TabNavigator.Navigator>

    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}