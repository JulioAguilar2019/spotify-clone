import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../auth/hooks/useSpotifyAuth';
import { User } from '../store/authSlices';
import {
  ArtistElement,
  ArtistI,
  NewReleases,
  PlayList,
  Search,
  Tracks,
  TracksItem,
} from '../Interfaces';

// const getToken2 = async () => {
//   const token = await getToken();
//   return token;
// };

// getToken2();

const token =
  'BQCrDHj04Jr5NEMpYYjPiVqzJQTtx45yzuBjUDMV5s7hKcpCevx2Ois1Hzj3BrsGiYOQqRoRZV5D_bQ19NQmfPLbrhyQPOOnvk26El9sCDdnkb0u-5qUuIS4zvYi4a9a_DlZWeCVRN_xNJ7eE-YvgsleNoDJUBfHFruAg8s0wR-Z_os4A-0-XQ';
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
    getArtists: builder.query<ArtistElement, string>({
      query: (ids: string) => `/artists/?ids=${ids}`,
    }),
    getRecentlyPlayed: builder.query<Tracks, void>({
      query: () => `/me/player/recently-played`,
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
} = spotifyApi;
