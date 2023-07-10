const initialState = {
    totalCost: [],
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
                let traceIDs;
                let currentCharacter = state.characterCosts.find(c => char.name === c.name);
                // If the character is not already in the list, initialize the material array and trace ID array
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
                    };
                    traceIDs = [];
                }
                else {
                    costs = currentCharacter.costs;
                    traceIDs = currentCharacter.traceIDs;
                }
                return (
                    tempCharCosts.push({
                        name: char.name,
                        costs: costs,
                        traceIDs: traceIDs
                    })
                )
            });
            return {
                ...state,
                characters: payload,
                characterCosts: tempCharCosts
            }
        case "UPDATE_CHAR_COSTS":
            let tempCharArr = [...state.characterCosts];
            let indexChar = tempCharArr.indexOf(tempCharArr.find(char => char.name === payload[0]));
            Object.keys(payload[1]).forEach(key => {
                switch (payload[2]) {
                    case "level":
                        tempCharArr[indexChar].costs[key][0] = payload[1][key];
                        break;
                    case "attack":
                        tempCharArr[indexChar].costs[key][1] = payload[1][key];
                        break;
                    case "skill":
                        tempCharArr[indexChar].costs[key][2] = payload[1][key];
                        break;
                    case "ultimate":
                        tempCharArr[indexChar].costs[key][3] = payload[1][key];
                        break;
                    case "talent":
                        tempCharArr[indexChar].costs[key][4] = payload[1][key];
                        break;
                    case "trace":
                        // Add all the unique trace IDs to the trace ID array
                        if (!tempCharArr[indexChar].traceIDs.includes(payload[3])) {
                            tempCharArr[indexChar].traceIDs.push(payload[3]);
                        }
                        // Will only trigger when all the trace nodes have been added to the array
                        if (tempCharArr[indexChar].traceIDs.length === 13) {
                            tempCharArr[indexChar].traceIDs.forEach(() => {
                                let traceIndex = tempCharArr[indexChar].traceIDs.indexOf(tempCharArr[indexChar].traceIDs.find(el => el === payload[3]))
                                tempCharArr[indexChar].costs[key][5][traceIndex] = payload[1][key];
                            })
                        }
                        break;
                    default:
                        break;
                }
            })
            return {
                ...state,
                characterCosts: tempCharArr
            }
        case "SET_PLANNER_LIGHTCONES":
            let tempLightconeCosts = [];
            payload.map(lightcone => {
                let costs;
                let currentLightcone = state.lightconeCosts.find(lc => lightcone.name === lc.name);
                // If the lightcone is not already in the list, initialize the material array
                if (currentLightcone === undefined) {
                    costs = {
                        credits: 0,
                        xp1: 0,
                        xp2: 0,
                        xp3: 0,
                        calyx1: 0,
                        calyx2: 0,
                        calyx3: 0,
                        common1: 0,
                        common2: 0,
                        common3: 0
                    }
                }
                else {
                    costs = currentLightcone.costs;
                }
                return (
                    tempLightconeCosts.push({
                        name: lightcone.name,
                        costs: costs,
                    })
                )
            });
            return {
                ...state,
                lightcones: payload,
                lightconeCosts: tempLightconeCosts
            }
        case "UPDATE_LIGHTCONE_COSTS":
            let tempLightconeArr = [...state.lightconeCosts];
            let indexLightcone = tempLightconeArr.indexOf(tempLightconeArr.find(lc => lc.name === payload[0]));
            Object.keys(payload[1]).forEach(key => {
                tempLightconeArr[indexLightcone].costs[key] = payload[1][key];
            })
            return {
                ...state,
                lightconeCosts: tempLightconeArr
            }
        default:
            return state;
    }
}

export default AscensionPlannerReducer;