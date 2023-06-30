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
                        // Source of each resource:
                        // [Level, Basic ATK, Skill, Ultimate, Talent, [Traces]]
                        credits: [0, 0, 0, 0, 0, [0]],
                        xp1: [0, 0, 0, 0, 0, [0]],
                        xp2: [0, 0, 0, 0, 0, [0]],
                        xp3: [0, 0, 0, 0, 0, [0]],
                        bossMat: [0, 0, 0, 0, 0, [0]],
                        calyx1: [0, 0, 0, 0, 0, [0]],
                        calyx2: [0, 0, 0, 0, 0, [0]],
                        calyx3: [0, 0, 0, 0, 0, [0]],
                        common1: [0, 0, 0, 0, 0, [0]],
                        common2: [0, 0, 0, 0, 0, [0]],
                        common3: [0, 0, 0, 0, 0, [0]],
                        weeklyBossMat: [0, 0, 0, 0, 0, [0]],
                        tracksOfDestiny: [0, 0, 0, 0, 0, [0]]
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
            Object.keys(payload[1]).forEach(key => {
                switch (payload[2]) {
                    case "level":
                        return tempArr[index].costs[key][0] = payload[1][key];
                    case "attack":
                        return tempArr[index].costs[key][1] = payload[1][key];
                    case "skill":
                        return tempArr[index].costs[key][2] = payload[1][key];
                    case "ultimate":
                        return tempArr[index].costs[key][3] = payload[1][key];
                    case "talent":
                        return tempArr[index].costs[key][4] = payload[1][key];
                    default:
                        return;
                }
            })
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