import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  makeRedirectUri,
  useAuthRequest,
  ResponseType,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export function useSpotifyAuth() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '17309fbac6b5495d9e07303b6554d587',
      clientSecret: '6bd15a3ccd6f4746876ac8695268cd1d',
      scopes: [
        'user-read-email',
        'user-read-private',
        'user-read-recently-played',
        'user-top-read',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'user-library-read',
        'user-library-modify',
        'playlist-read-private',
        'playlist-read-collaborative',
        'playlist-modify-public',
        'playlist-modify-private',
        'streaming',
        'app-remote-control',
        'user-follow-read',
        'user-follow-modify',
      ],
      usePKCE: false,
      redirectUri: 'exp://192.168.0.4:19000',
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      // storeData(access_token);
      console.log(response);
    }
  }, [response]);

  const storeData = async (token: string) => {
    try {
      await AsyncStorage.setItem('@access_token', token);
    } catch (e) {
      console.error('Error saving data', e);
    }
  };

  return { request, promptAsync };
}

export const getToken = async () => {
  try {
    const token = (await AsyncStorage.getItem('@access_token')) || null;
    return token;
  } catch (e) {
    console.error('Error retrieving data', e);
  }
};
