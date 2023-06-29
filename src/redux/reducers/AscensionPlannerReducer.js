const initialState = {
    totalCost: {},
    characters: [],
    characterCosts: [],
    lightcones: [],
    lightconeCosts: [],
}

const AscensionPlannerReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case "SET_PLANNER_CHARS":
            let tempCharCosts = [];
            payload.map(char => (
                tempCharCosts.push({
                    name: char.name,
                    costs: {
                        credits: [0],
                        xp1: [0],
                        xp2: [0],
                        xp3: [0],
                        bossMat: [0],
                        calyx1: [0],
                        calyx2: [0],
                        calyx3: [0],
                        common1: [0],
                        common2: [0],
                        common3: [0],
                        weeklyBossMat: [0],
                        tracksOfDestiny: [0]
                    }
                })
            ));
            return {
                ...state,
                characters: payload,
                characterCosts: tempCharCosts
            }
        case "UPDATE_CHAR_COSTS":
            let tempArr = [...state.characterCosts];
            let index = tempArr.indexOf(tempArr.find(char => char.name === payload[0]));
            Object.keys(payload[1]).map(key => tempArr[index].costs[key] = payload[1][key]);
            return {
                ...state,
                characterCosts: tempArr
            }
        case "SET_PLANNER_LIGHTCONES":
            let tempLightconeCosts = [];
            payload.map(lc => (
                tempLightconeCosts.push({ name: lc.name, costs: {} })
            ))
            return {
                ...state,
                lightcones: payload,
                lightconeCosts: tempLightconeCosts
            }
        default:
            return state;
    }
}

export default AscensionPlannerReducer;