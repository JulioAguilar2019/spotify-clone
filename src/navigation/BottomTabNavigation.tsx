import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MyLibraryScreen, SearchScreen } from '../screens';
import { Spotifytheme } from '../theme/Spotifytheme';
import { FontAwesome } from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();

export const BottomTabNavigation = () => {


    return (

        <TabNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: Spotifytheme.colors.primary,
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