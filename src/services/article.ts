import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
interface SummaryResponse {
  summary: string;
}
interface GetSummaryParams {
  articleUrl: string;
}

const rapidApiKeys = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: headers => {
      headers.set("X-RapidAPI-Key", rapidApiKeys);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),
  endpoints: builder => ({
    getSummary: builder.query<SummaryResponse, GetSummaryParams>({
      query: params =>
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
