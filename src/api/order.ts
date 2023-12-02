import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: "orderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080",
    }),
    tagTypes: ["Sales"],
    endpoints: (builder) => ({
        getAllOrders: builder.query<{ data: any[] }, any>({
            query: (params) => ({ url: "/api/orders", params }),
        }),
        newOrder: builder.mutation<{ data: any }, any>({
            query: (data) => ({ url: "/api/orders", method: "POST", body: data }),
        }),
    }),
});

export const { useGetAllOrdersQuery, useNewOrderMutation } = orderApi;
export default orderApi;
