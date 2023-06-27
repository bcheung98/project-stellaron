const initialState = {
    totalCost: {},
    characters: [],
    lightcones: [],
}

const AscensionPlannerReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case "SET_PLANNER_CHARS":
            return {
                ...state,
                characters: payload
            }
        case "SET_PLANNER_LIGHTCONES":
            return {
                ...state,
                lightcones: payload
            }
        default:
            return state;
    }
}

export default AscensionPlannerReducer;