import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface TraceStats {
    [key: string]: number
}

const initialState: TraceStats = {}

export const CharacterTraceStat = createSlice({
    name: "character_traces",
    initialState,
    reducers: {
        addStat: (state, action: PayloadAction<{ type: keyof TraceStats, description: string }>) => {
            let value = action.payload.description.split(" ")[action.payload.description.split(" ").length - 1]
            if (!state[action.payload.type]) {
                state[action.payload.type] = parseFloat(value)
            }
            else {
                state[action.payload.type] += parseFloat(value)
            }
        }
    }
})

export const { addStat } = CharacterTraceStat.actions
export default CharacterTraceStat.reducer