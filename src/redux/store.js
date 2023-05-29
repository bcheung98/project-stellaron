import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";

import CharacterReducer from "./reducers/CharacterReducer";
import CharacterFilterReducer from "./reducers/CharacterFilterReducer";

const rootReducer = combineReducers({
    characters: CharacterReducer,
    characterFilters: CharacterFilterReducer,
})

const composedEnhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(
    rootReducer,
    composedEnhancer
)