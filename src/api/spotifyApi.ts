import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token =
  'BQAGDirzHvE6Imb-f-_Gv27Lpy3ouNvkzKxgFHy68VE_nQ6Hzxe1pFxAjtYxa56pgCvlaJ3MHx0PRY9m_juD4ubofi5NnDmkS2FrmvFbsr31RhU_YAFLpbDlFQzUhd7qMSXelnHZ4AiN4HPwqE6Y3jsDhn8ZX-qXuegLpuR_3EjdMZhm';
export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1',
    headers: { Authorization: `Bearer ${token}` },
  }),

  endpoints: (builder) => ({
    getNewReleases: builder.query({
      query: () => `/browse/new-releases`,
    }),
    
  }),
});

export const { useGetNewReleasesQuery } = spotifyApi;
