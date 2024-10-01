import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type JokesApi = {
  total: number;
  result: {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
  }[];
};

export const jokesApi = createApi({
  reducerPath: "jokesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.chucknorris.io",
  }),
  endpoints: (builder) => ({
    getJokes: builder.query<JokesApi, string>({
      query: (searchString) => `jokes/search?query=${searchString}`,
    }),
  }),
});

export const { useGetJokesQuery } = jokesApi;
