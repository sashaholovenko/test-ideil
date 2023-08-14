import {configureStore} from "@reduxjs/toolkit";
import {matchesApi} from "./matchesApi.ts";


export const store = configureStore({
    reducer: {
        [matchesApi.reducerPath]: matchesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchesApi.middleware)
})

