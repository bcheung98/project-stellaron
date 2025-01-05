import { createSlice } from "@reduxjs/toolkit";
import { startAppListening } from "helpers/hooks";
import { fetchRelics, LoadingStatus } from "rtk/fetchData";
import { RootState } from "rtk/store";
import { Relic } from "types/relic";

export interface RelicState {
    status: LoadingStatus;
    cavernRelics: Relic[];
    planarOrnaments: Relic[];
}

const storedRelics = localStorage.getItem("data/relics/cavern") || "null";

const initialState: RelicState = {
    status: "idle",
    cavernRelics: [],
    planarOrnaments: [],
};

export const relicSlice = createSlice({
    name: "getRelics",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRelics.pending, (state) => {
            state.status = "pending";
        });
        builder.addCase(fetchRelics.fulfilled, (state, action) => {
            if (JSON.stringify(action.payload) !== storedRelics) {
                state.cavernRelics = action.payload.cavernRelics;
                state.planarOrnaments = action.payload.planarOrnaments;
            }
            state.status = "success";
        });
        builder.addCase(fetchRelics.rejected, (state) => {
            state.status = "error";
        });
    },
});

export const selectRelics = (state: RootState): Relic[] => [
    ...state.relics.cavernRelics,
    ...state.relics.planarOrnaments,
];
export const selectCavernRelics = (state: RootState): Relic[] =>
    state.relics.cavernRelics;
export const selectPlanarRelics = (state: RootState): Relic[] =>
    state.relics.planarOrnaments;

export default relicSlice.reducer;

startAppListening({
    actionCreator: fetchRelics.fulfilled,
    effect: (action) => {
        const data = JSON.stringify(action.payload);
        if (data !== storedRelics) {
            localStorage.setItem("data/relics/", data);
        }
    },
});
