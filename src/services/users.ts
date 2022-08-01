import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { add } from "../features/list/listSlice";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:8082/", }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (query) => query,
            async onQueryStarted(arg, {dispatch, queryFulfilled, getState}) {
                const {data} = (await queryFulfilled).data;
                console.log(getState());
                data.map((e: any) => {
                    dispatch(add({title: e.name, completed: true}))
                })
            }
        }),
        getUserMutation: builder.mutation<any, any>({
            query: () => "data"
        })
    })
})

export const { useGetUsersQuery, useGetUserMutationMutation } = userApi;