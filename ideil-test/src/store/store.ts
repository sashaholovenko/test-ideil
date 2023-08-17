import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {matchesApi} from "./matchesApi.ts";
import filtersReducer from "./reducers/filter-slice.ts"

const rootReducer = combineReducers({
    filtersReducer,
    [matchesApi.reducerPath]: matchesApi.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(matchesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch