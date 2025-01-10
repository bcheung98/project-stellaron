import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { objectKeys } from "helpers/utils";
import { RootState } from "rtk/store";
import { Element, Rarity, Path, World } from "types/_common";
import {
    BossMaterial,
    CalyxMaterial,
    CommonMaterial,
    WeeklyBossMaterial,
} from "types/materials";

export interface CharacterFilterState {
    element: Element[];
    path: Path[];
    rarity: Rarity[];
    calyxMat: CalyxMaterial[];
    commonMat: CommonMaterial[];
    bossMat: BossMaterial[];
    weeklyBossMat: WeeklyBossMaterial[];
    world: World[];
}

const initialState: CharacterFilterState = {
    element: [],
    path: [],
    rarity: [],
    calyxMat: [],
    commonMat: [],
    bossMat: [],
    weeklyBossMat: [],
    world: [],
};

export const characterFilterSlice = createSlice({
    name: "characterFilters",
    initialState,
    reducers: {
        setElement: (state, action: PayloadAction<Element[]>) => {
            state.element = action.payload;
        },
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
        setBossMat: (state, action: PayloadAction<BossMaterial[]>) => {
            state.bossMat = action.payload;
        },
        setWeeklyBossMat: (
            state,
            action: PayloadAction<WeeklyBossMaterial[]>
        ) => {
            state.weeklyBossMat = action.payload;
        },
        setWorld: (state, action: PayloadAction<World[]>) => {
            state.world = action.payload;
        },
        clearFilters: (
            state,
            action: PayloadAction<keyof CharacterFilterState | undefined>
        ) => {
            if (!action.payload) {
                return initialState;
            } else {
                state[action.payload] = [];
            }
        },
    },
});

export const {
    setElement,
    setPath,
    setRarity,
    setCalyxMat,
    setCommonMat,
    setBossMat,
    setWeeklyBossMat,
    setWorld,
    clearFilters,
} = characterFilterSlice.actions;

export const selectCharacterFilters = (
    state: RootState
): CharacterFilterState => state.characterFilters;
export const activeCharacterFilters = (state: RootState): boolean =>
    objectKeys(state.characterFilters).filter(
        (filter) => state.characterFilters[filter].length
    ).length > 0;

export default characterFilterSlice.reducer;
