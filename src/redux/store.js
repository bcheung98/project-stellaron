import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import CharacterReducer from "./reducers/CharacterReducer";
import CharacterFilterReducer from "./reducers/CharacterFilterReducer";
import LightconeReducer from "./reducers/LightconeReducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
    lightcones: LightconeReducer,
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)