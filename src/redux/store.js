import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import CharacterReducer from "./reducers/CharacterReducer";
import CharacterFilterReducer from "./reducers/CharacterFilterReducer";
import LightconeReducer from "./reducers/LightconeReducer";
import LightconeFilterReducer from "./reducers/LightconeFilterReducer";
import AscensionPlannerReducer from "./reducers/AscensionPlannerReducer";
import BannerReducer from "./reducers/BannerReducer";
import CharacterTraceStatReducer from "./reducers/CharacterTraceStatReducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
    lightcones: LightconeReducer,
    lightconeFilters: LightconeFilterReducer,
    ascensionPlanner: AscensionPlannerReducer,
    banners: BannerReducer,
    traceStats: CharacterTraceStatReducer
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)