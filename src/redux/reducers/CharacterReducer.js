const initialState = {
    characters: [],
    requesting: false
}

const CharacterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_CHARS_REQUEST":
            return {
                ...state,
                characters: [...state.characters],
                requesting: true
            }
        case "GET_CHARS":
            return {
                ...state,
                characters: action.characters.sort((a, b) => a.name.localeCompare(b.name)),
                requesting: false
            }
        default:
            return state;
    }
}

export default CharacterReducer;