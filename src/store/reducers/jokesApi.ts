import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type JokesApi = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io",
  }),
  endpoints: (builder) => ({
    getJokes: builder.query<JokesApi, string>({
      query: (searchString) => `jokes/${searchString}`,
    }),
  }),
});

export const { useGetJokesQuery } = jokesApi;
