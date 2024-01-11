import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-api7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      // console.log('KEY::',import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY)
      headers.set(
        'X-RapidAPI-Key',
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY,
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSongByGenre: builder.query({
      query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}&limit=30`,
    }),
    getSongRecommend: builder.query({ query: (id) => '' }),
  }),
});

export const { useGetSongByGenreQuery } = shazamCoreApi;
