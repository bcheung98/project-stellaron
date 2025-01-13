import { createSlice } from "@reduxjs/toolkit";
import { isUnreleasedContent } from "helpers/utils";
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

const storedSettings = localStorage.getItem("settings") || "{}";
const { unreleasedContent = false } = JSON.parse(storedSettings);

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
            let payloadCavern = action.payload.cavernRelics;
            let payloadPlanar = action.payload.planarOrnaments;
            if (!unreleasedContent) {
                payloadCavern = payloadCavern.filter((item) =>
                    isUnreleasedContent(item.release.version)
                );
                payloadPlanar = payloadPlanar.filter((item) =>
                    isUnreleasedContent(item.release.version)
                );
            }
            if (JSON.stringify(payloadCavern) !== storedCavernRelics) {
                state.cavernRelics = payloadCavern;
            }
            if (JSON.stringify(payloadPlanar) !== storedPlanarRelics) {
                state.planarOrnaments = payloadPlanar;
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
        let payloadCavern = action.payload.cavernRelics;
        let payloadPlanar = action.payload.planarOrnaments;
        if (!unreleasedContent) {
            payloadCavern = payloadCavern.filter((item) =>
                isUnreleasedContent(item.release.version)
            );
            payloadPlanar = payloadPlanar.filter((item) =>
                isUnreleasedContent(item.release.version)
            );
        }
        const dataCavernRelics = JSON.stringify(payloadCavern);
        if (dataCavernRelics !== storedCavernRelics) {
            localStorage.setItem("data/relics/cavern", dataCavernRelics);
        }
        const dataPlanarRelics = JSON.stringify(payloadPlanar);
        if (dataPlanarRelics !== storedCavernRelics) {
            localStorage.setItem("data/relics/planar", dataPlanarRelics);
        }
    },
});
