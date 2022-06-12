import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://farsicalendar.com" }),
  reducerPath: "service",
  endpoints: () => ({}),
});

export default service;
