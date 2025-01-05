import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";

import layoutReducer from "reducers/layout";
import settingsReducer from "reducers/settings";
import characterReducer from "reducers/character";
import characterFilterReducer from "reducers/characterFilters";
import weaponReducer from "reducers/weapon";
import weaponFilterReducer from "reducers/weaponFilters";
import relicReducer from "reducers/relic";
import plannerReducer from "reducers/planner";
import bannerReducer from "reducers/banner";
const rootReducer = combineReducers({
    layout: layoutReducer,
    settings: settingsReducer,
    characters: characterReducer,
    characterFilters: characterFilterReducer,
    weapons: weaponReducer,
    weaponFilters: weaponFilterReducer,
    relics: relicReducer,
    planner: plannerReducer,
    banners: bannerReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
