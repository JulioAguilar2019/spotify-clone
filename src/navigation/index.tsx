/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { View } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps, RootPublicStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { BottomTabNavigation } from './BottomTabNavigation';
import { PlayerScreen, PlayListScreen } from '../screens';
import { useSpotifyAuth, getToken } from '../auth/hooks/useSpotifyAuth';
import { useEffect, useState } from 'react';
import { useAppSelector, RootState, useAppDispatch } from '../store/store';
import { LoginScreen } from '../auth/screens/LoginScreen';
import { setToken } from '../store/authSlices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetUserDataQuery } from '../api/spotifyApi';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {


  const { error } = useGetUserDataQuery()

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      {
        error ? <PublicStack /> : <RootNavigator />
      }
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */


const stackPublic = createNativeStackNavigator<RootPublicStackParamList>();

function PublicStack() {
  return (
    <stackPublic.Navigator
      initialRouteName='Login'>
      <stackPublic.Screen

        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </stackPublic.Navigator>
  )
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigation} options={{ headerShown: false }} />
      {/* <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} /> */}
      <Stack.Group screenOptions={{ presentation: 'modal', animation: 'fade_from_bottom', headerShown: false }}>
        <Stack.Screen name="PlayerScreen" component={PlayerScreen} />
        <Stack.Screen name="PlayListScreen" component={PlayListScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"

      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,

      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),

        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
