import DateEvent from "../../models/DateEvent.model";
import service from "./";

const dateEventService = service.injectEndpoints({
  endpoints: (builder) => ({
    getDateEvents: builder.query<
      { type: string; values: DateEvent[] },
      { day: number; month: number; category?: string }
    >({
      query: ({ day, month, category }) => ({
        url: `api/sh/${day}/${month}`,
        params: { category },
      }),
    }),
  }),
});

export const { useGetDateEventsQuery } = dateEventService;
