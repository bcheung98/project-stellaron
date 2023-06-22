import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import CharacterReducer from "./reducers/CharacterReducer";
import CharacterFilterReducer from "./reducers/CharacterFilterReducer";
import LightconeReducer from "./reducers/LightconeReducer";
import LightconeFilterReducer from "./reducers/LightconeFilterReducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
    lightcones: LightconeReducer,
    lightconeFilters: LightconeFilterReducer,
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)