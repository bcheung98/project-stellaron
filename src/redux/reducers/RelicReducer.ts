import { createSlice } from "@reduxjs/toolkit"
import { fetchRelics } from "../actions/fetch"
import { RelicData } from "../../types/relic/RelicData"

export interface RelicState {
    loading: boolean,
    relics: RelicData[]
}

const initialState: RelicState = {
    loading: false,
    relics: []
}

export const RelicSlice = createSlice({
    name: "get_relics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRelics.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRelics.fulfilled, (state, action) => {
            state.relics = action.payload.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
            state.loading = false
        })
        builder.addCase(fetchRelics.rejected, (state) => {
            state.loading = false
        })
    }
})

export default RelicSlice.reducer