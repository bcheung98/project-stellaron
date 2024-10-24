import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface LightconeFilterState {
    path: string[],
    rarity: number[],
    calyxMat: string[],
    commonMat: string[]
}

const initialState: LightconeFilterState = {
    path: [],
    rarity: [],
    calyxMat: [],
    commonMat: []
}

export const LightconeFilterSlice = createSlice({
    name: "lightcone_filters",
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<string>) => {
            !state.path.includes(action.payload) ? state.path.push(action.payload) : state.path.splice(state.path.indexOf(action.payload), 1)
        },
        setRarity: (state, action: PayloadAction<number>) => {
            !state.rarity.includes(action.payload) ? state.rarity.push(action.payload) : state.rarity.splice(state.rarity.indexOf(action.payload), 1)
        },
        setCalyxMats: (state, action: PayloadAction<string>) => {
            !state.calyxMat.includes(action.payload) ? state.calyxMat.push(action.payload) : state.calyxMat.splice(state.calyxMat.indexOf(action.payload), 1)
        },
        setCommonMats: (state, action: PayloadAction<string>) => {
            !state.commonMat.includes(action.payload) ? state.commonMat.push(action.payload) : state.commonMat.splice(state.commonMat.indexOf(action.payload), 1)
        }
    }
})

export const { setPath, setRarity, setCalyxMats, setCommonMats } = LightconeFilterSlice.actions
export default LightconeFilterSlice.reducer