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
            payload.map(char => {
                let costs;
                let currentCharacter = state.characterCosts.find(c => char.name === c.name);
                // If the character is not already in the list
                if (currentCharacter === undefined) {
                    costs = {
                        // Source of each material:
                        // [Level, Basic ATK, Skill, Ultimate, Talent, [A2 Passive, A4 Passive, A6 Passive, A2 Trace, A3 Trace 1, A3 Trace 2, A4 Trace, A5 Trace 1, A5 Trace 2, A6 Trace, Lv. 1 Trace, Lv. 75 Trace, Lv. 80 Trace]]
                        credits: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        xp1: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        xp2: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        xp3: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        bossMat: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        calyx1: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        calyx2: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        calyx3: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        common1: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        common2: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        common3: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        weeklyBossMat: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                        tracksOfDestiny: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
                    }
                }
                else {
                    costs = currentCharacter.costs;
                }
                return (
                    tempCharCosts.push({
                        name: char.name,
                        costs: costs
                    })
                )
            });
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