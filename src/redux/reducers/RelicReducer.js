const initialState = {
    relics: [],
    requesting: false
}

const RelicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_RELICS_REQUEST":
            return {
                ...state,
                relics: [...state.relics],
                requesting: true
            }
        case "GET_RELICS":
            return {
                ...state,
                relics: action.relics,
                requesting: false
            }
        default:
            return state;
    }
}

export default RelicReducer;