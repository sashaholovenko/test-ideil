import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface filterState {
    filterBy: string
    chosenTeam: string | null
    chosenTournament: string | null
}

const initialState: filterState = {
    filterBy: 'noFilter',
    chosenTeam: null,
    chosenTournament: null
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setFilterBy(state, action: PayloadAction<string>) {
            state.filterBy = action.payload
        },
        setChosenTeam(state, action: PayloadAction<string>) {
            state.chosenTeam = action.payload
        },
        setChosenTournament(state, action: PayloadAction<string>) {
            state.chosenTournament = action.payload
        }
    }
})

export default filtersSlice.reducer;