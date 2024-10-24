import { createSlice } from "@reduxjs/toolkit"
import { fetchCharacterBanners, fetchLightconeBanners } from "../actions/fetch"
import { BannerData } from "../../types/banner/BannerData"

export interface BannerState {
    loading: boolean,
    characterBanners: BannerData[],
    lightconeBanners: BannerData[],
}

const initialState: BannerState = {
    loading: false,
    characterBanners: [],
    lightconeBanners: [],
}

export const BannerSlice = createSlice({
    name: "get_banners",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCharacterBanners.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCharacterBanners.fulfilled, (state, action) => {
            state.characterBanners = action.payload
            state.loading = false
        })
        builder.addCase(fetchCharacterBanners.rejected, (state) => {
            state.loading = false
        })
        builder.addCase(fetchLightconeBanners.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchLightconeBanners.fulfilled, (state, action) => {
            state.lightconeBanners = action.payload
            state.loading = false
        })
        builder.addCase(fetchLightconeBanners.rejected, (state) => {
            state.loading = false
        })
    }
})

export default BannerSlice.reducer