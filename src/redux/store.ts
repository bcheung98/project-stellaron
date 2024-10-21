import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { combineReducers } from "redux"

import CharacterReducer from "./reducers/CharacterReducer"
import CharacterFilterReducer from "./reducers/CharacterFilterReducer"
import LightconeReducer from "./reducers/LightconeReducer"
import LightconeFilterReducer from "./reducers/LightconeFilterReducer"
import RelicReducer from "./reducers/RelicReducer"
import AscensionPlannerReducer from "./reducers/AscensionPlannerReducer"
import BannerReducer from "./reducers/BannerReducer"
import CharacterTraceStatReducer from "./reducers/CharacterTraceStatReducer"

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
    lightcones: LightconeReducer,
    lightconeFilters: LightconeFilterReducer,
    relics: RelicReducer,
    ascensionPlanner: AscensionPlannerReducer,
    banners: BannerReducer,
    traceStats: CharacterTraceStatReducer
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store