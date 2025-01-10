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

const storedCavernRelics = localStorage.getItem("data/relics/cavern") || "null";
const storedPlanarRelics = localStorage.getItem("data/relics/planar") || "null";

const initialState: RelicState = {
    status: "idle",
    cavernRelics:
        storedCavernRelics !== "null" ? JSON.parse(storedCavernRelics) : [],
    planarOrnaments:
        storedPlanarRelics !== "null" ? JSON.parse(storedPlanarRelics) : [],
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
            if (JSON.stringify(action.payload) !== storedCavernRelics) {
                state.cavernRelics = action.payload.cavernRelics;
            }
            if (JSON.stringify(action.payload) !== storedPlanarRelics) {
                state.planarOrnaments = action.payload.planarOrnaments;
            }
            state.status = "success";
        });
        builder.addCase(fetchRelics.rejected, (state) => {
            state.status = "error";
        });
    },
});

export const selectCavernRelics = (state: RootState): Relic[] =>
    state.relics.cavernRelics;
export const selectPlanarRelics = (state: RootState): Relic[] =>
    state.relics.planarOrnaments;

export default relicSlice.reducer;

startAppListening({
    actionCreator: fetchRelics.fulfilled,
    effect: (action) => {
        const dataCavernRelics = JSON.stringify(action.payload.cavernRelics);
        if (dataCavernRelics !== storedCavernRelics) {
            localStorage.setItem("data/relics/cavern", dataCavernRelics);
        }
        const dataPlanarRelics = JSON.stringify(action.payload.planarOrnaments);
        if (dataPlanarRelics !== storedCavernRelics) {
            localStorage.setItem("data/relics/planar", dataPlanarRelics);
        }
    },
});
