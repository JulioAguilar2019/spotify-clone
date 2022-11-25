import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../store/authSlices';
import {
  ArtistI,
  NewReleases,
  PlayList,
  Search,
  RecentlyI,
  TracksI,
  DevicesI,
  PlayListTracksI,
} from '../Interfaces';
import { getToken } from '../auth/hooks/useSpotifyAuth';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../store';

// const useToken = () => {
//   const [token, setToken] = useState();

//   useEffect(() => {
//     getToken().then((token) => {
//       setToken(token);
//       console.log(token);
//     });
//   }, []);

//   return token;
// };

interface StateTracks {
  trackPlayList: string;
  deviceId: string;
  position_ms: number;
  position: number;
}

// const token = getToken().then((token) => token);
// console.log(token);
const token =
<<<<<<< HEAD
  'BQDNmwHkQeozNrMTSJCxCdqnA5IePHMV7g7AuLBTtWO6pb97-4W1GajH3HmM3OjlP9S0asQw5EBIoEe87eGpX1uqOFYXPYUZMs5AxFRiGh1h6HYYX9Tcl_ywYDcaEp_LRvFhqbXdt2hoz1EQHBq3cVW9AGObA3KkIh7GxU1GfMftilxDbi9VC4CJpAvIGuV6BoTqLOr60_wNUJ9i7r_AKBYu5f6xWO8VnV5Tyw6oGTzOB0wP3AgNZV6LHdyKeSj11foCjz5ZdsdV17bggLJNhNJZlozPDMfrlfwMLybil42IrHDmAZExFPXJ8w';
=======
  'BQBU34-0MBGIL6PukdGmUconKyfzTuMM92ULPyITquI4vBpr5vE9iQU2cdaZu2yxnIOB_aF1rd-vqRSE24wbOYbV8jsc2xSc5z-yuz37e3EudfHXm6erQPfUEmYv1uzCN74bX0JIk9nPHcYcLJEchYTk1HBnUisXXkSeFdgcSSitC2vwPFJccplwdrDhm2kGQDPql_WyBmzX-Q3b5uM7mHx4SwhAR2LsUqYCRQFKUUfe83ULHknStazqW1jGYAsiC7pecdcLMtZqo_zdUyuZxR2vhrEZMVkRFziVL3whwW7rNKOWESOEXA';
>>>>>>> 0a5ab7e2fcadebc71d47d749160db8df18dd4790

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
    headers: { Authorization: `Bearer ${token}` },
  }),
  endpoints: (builder) => ({
    getNewReleases: builder.query<NewReleases, number>({
      query: (limit: number) => `/browse/new-releases?limit=${limit}`,
    }),
    getSearch: builder.query<Search, string>({
      query: (searchTerm: string) =>
        `/search?q=${searchTerm}&type=album,artist,playlist,track`,
    }),
    getMyPlaylists: builder.query<PlayList, void>({
      query: () => `/me/playlists`,
    }),
    getUserData: builder.query<User, void>({
      query: () => `/me`,
    }),
    getArtists: builder.query<ArtistI, string>({
      query: (ids: string) => `/artists/?ids=${ids}`,
    }),
    getRecentlyPlayed: builder.query<RecentlyI, void>({
      query: () => `/me/player/recently-played`,
    }),
    getPlayListTracks: builder.query<PlayListTracksI, String>({
      query: (id: string) => `/playlists/${id}/tracks`,
    }),
    getTracks: builder.query<TracksI, string>({
      query: (ids: string) => `/tracks/?ids=${ids}`,
    }),
    getAvailableDevices: builder.query<void, void>({
      query: () => `/me/player/devices`,
    }),
    getPlayer: builder.query<void, void>({
      query: () => `/me/player`,
    }),
    getCurrentlyPlaying: builder.query<void, void>({
      query: () => `/me/player/currently-playing`,
    }),
    nextTrack: builder.mutation<void, void>({
      query: () => ({
        url: `/me/player/next`,
        method: 'POST',
      }),
    }),
    previousTrack: builder.mutation<void, void>({
      query: () => ({
        url: `/me/player/previous`,
        method: 'POST',
      }),
    }),
    pause: builder.mutation<void, void>({
      query: () => ({
        url: `/me/player/pause`,
        method: 'PUT',
      }),
    }),
    playSong: builder.mutation<DevicesI, StateTracks>({
      query: (payload: StateTracks) => ({
        url: `/me/player/play?device_id=${payload.deviceId}`,
        method: 'PUT',
        body: {
          context_uri: payload.trackPlayList,
          offset: {
            position: payload.position,
          },
          position_ms: payload.position_ms,
        },
      }),
    }),
  }),
});

export const {
  useGetNewReleasesQuery,
  useGetSearchQuery,
  useGetMyPlaylistsQuery,
  useGetUserDataQuery,
  useGetArtistsQuery,
  useGetRecentlyPlayedQuery,
  useGetTracksQuery,
  useGetAvailableDevicesQuery,
  useGetPlayerQuery,
  useGetPlayListTracksQuery,
  useLazyGetCurrentlyPlayingQuery,
  usePlaySongMutation,
  usePauseMutation,
  useNextTrackMutation,
  usePreviousTrackMutation,
  useLazyGetPlayerQuery,
  useLazyGetTracksQuery,
  useLazyGetSearchQuery,
} = spotifyApi;
