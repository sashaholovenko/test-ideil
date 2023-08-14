import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const matchesApi = createApi({
    reducerPath: "matches",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:1337/api"}),
    endpoints: ( build ) => ({
        getAllMatches: build.query({
            query: () => ({
                url: "/matches",
                params: {
                    sort: "matchDate:asc",
                    populate: "*"
                }
            })
        }),
        getOneMatch: build.query({
            query: ( id ) => ({
                url: `matches/${id}`,
                params: {
                    populate: "teams.players"
                }
            })
        })
    })
})