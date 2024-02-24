const initialState = {
    traceStats: {}
}

const CharacterTraceStatReducer = (state = initialState, action) => {
    let { data, type } = action;
    switch (type) {
        case "ADD_TRACE_STAT":
            let newStats = { ...state.traceStats };
            let statType = data[0];
            let statQuantity = data[1].split(" ")[data[1].split(" ").length - 1];
            if (!newStats[statType]) {
                newStats[statType] = parseFloat(statQuantity);
            }
            else {
                newStats[statType] += parseFloat(statQuantity);
            }
            return {
                ...state,
                traceStats: newStats
            }
        default:
            return state;
    }
}

export default CharacterTraceStatReducer;