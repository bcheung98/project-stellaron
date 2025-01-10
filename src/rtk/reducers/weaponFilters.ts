import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "rtk/store";
import { Path, Rarity } from "types/_common";
import { CalyxMaterial, CommonMaterial } from "types/materials";

export interface WeaponFilterState {
    path: Path[];
    rarity: Rarity[];
    calyxMat: CalyxMaterial[];
    commonMat: CommonMaterial[];
}

const initialState: WeaponFilterState = {
    path: [],
    rarity: [],
    calyxMat: [],
    commonMat: [],
};

export const weaponFilterSlice = createSlice({
    name: "characterFilters",
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<Path[]>) => {
            state.path = action.payload;
        },
        setRarity: (state, action: PayloadAction<Rarity[]>) => {
            state.rarity = action.payload;
        },
        setCalyxMat: (state, action: PayloadAction<CalyxMaterial[]>) => {
            state.calyxMat = action.payload;
        },
        setCommonMat: (state, action: PayloadAction<CommonMaterial[]>) => {
            state.commonMat = action.payload;
        },
        clearFilters: (
            state,
            action: PayloadAction<keyof WeaponFilterState | undefined>
        ) => {
            if (!action.payload) {
                return initialState;
            } else {
                state[action.payload] = [];
            }
        },
    },
});

export const { setPath, setRarity, setCalyxMat, setCommonMat, clearFilters } =
    weaponFilterSlice.actions;

export const selectWeaponFilters = (state: RootState): WeaponFilterState =>
    state.weaponFilters;
export const activeWeaponFilters = (state: RootState): boolean =>
    Object.keys(state.weaponFilters).filter(
        (filter) =>
            state.weaponFilters[filter as keyof WeaponFilterState].length
    ).length > 0;

export default weaponFilterSlice.reducer;
