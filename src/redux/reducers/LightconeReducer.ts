import { createSlice } from "@reduxjs/toolkit"
import { fetchLightcones } from "../actions/fetch"
import { LightconeData } from "../../types/lightcone/LightconeData"

export interface LightconeState {
    loading: boolean,
    lightcones: LightconeData[]
}

const initialState: LightconeState = {
    loading: false,
    lightcones: []
}

export const LightconeSlice = createSlice({
    name: "get_lightcones",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchLightcones.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchLightcones.fulfilled, (state, action) => {
            state.lightcones = action.payload.sort((a, b) => a.name.localeCompare(b.name))
            state.loading = false
        })
        builder.addCase(fetchLightcones.rejected, (state) => {
            state.loading = false
        })
    }
})

export default LightconeSlice.reducer