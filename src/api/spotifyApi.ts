import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from '../auth/hooks/useSpotifyAuth';
import { User } from '../store/authSlices';
import {
  ArtistI,
  NewReleases,
  PlayList,
  Search,
  RecentlyI,
  TracksI,
} from '../Interfaces';

// const getToken2 = async () => {
//   const token = await getToken();
//   return token;
// };

// getToken2();

const token =
  'BQC6o6vNnREoojvYh0lmf6Ubl1dMQ1ZK3pmUNU81ce1ebCMZ8KyWyOqVT7ESVni_QFZG4Vx9IVS_rKfMnfjIMhCn88_vQzCIq_7rKG-X9yODCov6Z0GSjoBsAzW1VLYEJeyhHwfhZ4UYT2WmM2dz8WuZlMrvGk6A_U-aStRV7sW8nwGQWKGTDw';
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
    getTracks: builder.query<TracksI, string>({
      query: (ids: string) => `/tracks/?ids=${ids}`,
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
} = spotifyApi;
