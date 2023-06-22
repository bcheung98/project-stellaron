const initialState = {
    lightcones: [],
    requesting: false
}

const LightconeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "START_GETTING_LC_REQUEST":
            return {
                ...state,
                lightcones: [...state.lightcones],
                requesting: true
            }
        case "GET_LC":
            return {
                ...state,
                lightcones: action.lightcones.sort((a, b) => a.name.localeCompare(b.name)),
                requesting: false
            }
        default:
            return state;
    }
}

export default LightconeReducer;