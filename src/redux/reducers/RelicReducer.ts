import { createSlice } from "@reduxjs/toolkit"
import { fetchRelics } from "../actions/fetch"
import { Relic } from "../../types/relic/relic"

export interface RelicState {
    loading: boolean,
    cavernRelics: Relic[],
    planarOrnaments: Relic[]
}

const initialState: RelicState = {
    loading: false,
    cavernRelics: [],
    planarOrnaments: []
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
            state.cavernRelics = action.payload.cavernRelics.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
            state.planarOrnaments = action.payload.planarOrnaments.sort((a, b) => b.rarity - a.rarity || a.name.localeCompare(b.name))
            state.loading = false
        })
        builder.addCase(fetchRelics.rejected, (state) => {
            state.loading = false
        })
    }
})

export default RelicSlice.reducer