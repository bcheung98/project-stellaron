import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface CharacterFilterState {
    element: string[],
    path: string[],
    rarity: number[],
    calyxMat: string[],
    commonMat: string[],
    bossMat: string[],
    weeklyBossMat: string[],
    world: string[],
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
}

export const CharacterFilterSlice = createSlice({
    name: "character_filters",
    initialState,
    reducers: {
        setElement: (state, action: PayloadAction<string>) => {
            !state.element.includes(action.payload) ? state.element.push(action.payload) : state.element.splice(state.element.indexOf(action.payload), 1)
        },
        setPath: (state, action: PayloadAction<string>) => {
            !state.path.includes(action.payload) ? state.path.push(action.payload) : state.path.splice(state.path.indexOf(action.payload), 1)
        },
        setRarity: (state, action: PayloadAction<number>) => {
            !state.rarity.includes(action.payload) ? state.rarity.push((action.payload)) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
        },
        setCalyxMats: (state, action: PayloadAction<string>) => {
            !state.calyxMat.includes(action.payload) ? state.calyxMat.push(action.payload) : state.calyxMat.splice(state.calyxMat.indexOf(action.payload), 1)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
        },
        setBossMats: (state, action: PayloadAction<string>) => {
            !state.bossMat.includes(action.payload) ? state.bossMat.push(action.payload) : state.bossMat.splice(state.bossMat.indexOf(action.payload), 1)
        },
        setWeeklyBossMats: (state, action: PayloadAction<string>) => {
            !state.weeklyBossMat.includes(action.payload) ? state.weeklyBossMat.push(action.payload) : state.weeklyBossMat.splice(state.weeklyBossMat.indexOf(action.payload), 1)
        },
        setWorld: (state, action: PayloadAction<string>) => {
            !state.world.includes(action.payload) ? state.world.push(action.payload) : state.world.splice(state.world.indexOf(action.payload), 1)
        }
    }
})

export const { setElement, setPath, setRarity, setCalyxMats, setCommonMats, setBossMats, setWeeklyBossMats, setWorld } = CharacterFilterSlice.actions
export default CharacterFilterSlice.reducer