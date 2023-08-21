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
                    traceIDs = TraceIDTemplates[char.path].map(id => `${char.name} ${id}`);
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
                        tempCharArr[indexChar].traceIDs.forEach(() => {
                            let traceIndex = tempCharArr[indexChar].traceIDs.indexOf(tempCharArr[indexChar].traceIDs.find(el => el === payload[3]));
                            tempCharArr[indexChar].costs[key][5][traceIndex] = payload[1][key];
                        })
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
                        lc_xp1: 0,
                        lc_xp2: 0,
                        lc_xp3: 0,
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
        case "UPDATE_TOTAL_COSTS":
            let tempTotalCost = {};
            state.characterCosts.forEach(char => {
                Object.keys(char.costs).forEach(material => {
                    let mat = GetMaterial(state.characters.find(c => c.name === char.name), material);
                    if (!Object.keys(tempTotalCost).includes(mat)) {
                        tempTotalCost[mat] = 0;
                    }
                    tempTotalCost[mat] += GetSum(char.costs[material]);
                })
            })
            state.lightconeCosts.forEach(lightcone => {
                Object.keys(lightcone.costs).forEach(material => {
                    let lc_mat = GetMaterial(state.lightcones.find(lc => lc.name === lightcone.name), material);
                    if (!Object.keys(tempTotalCost).includes(lc_mat)) {
                        tempTotalCost[lc_mat] = 0;
                    }
                    tempTotalCost[lc_mat] += lightcone.costs[material];
                })
            })
            return {
                ...state,
                totalCost: tempTotalCost
            }
        default:
            return state;
    }
}

export default AscensionPlannerReducer;

const GetMaterial = (unit, material) => {
    switch (material) {
        case "calyx1":
            material = `${unit.materials.calyxMat}1`;
            break;
        case "calyx2":
            material = `${unit.materials.calyxMat}2`;
            break;
        case "calyx3":
            material = `${unit.materials.calyxMat}3`;
            break;
        case "common1":
            material = `${unit.materials.commonMat}1`;
            break;
        case "common2":
            material = `${unit.materials.commonMat}2`;
            break;
        case "common3":
            material = `${unit.materials.commonMat}3`;
            break;
        case "bossMat":
            material = unit.materials.bossMat;
            break;
        case "weeklyBossMat":
            material = unit.materials.weeklyBossMat;
            break;
        default:
            break;
    }
    return material;
}

// Reduces the character cost array: [0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
const GetSum = ([...arr]) => {
    arr[5] = arr[5].reduce((a, c) => a + c);
    return arr.reduce((a, c) => a + c);
}

// ID templates for each path, used for trace nodes
const TraceIDTemplates = {
    "Destruction": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2", "C-3-0", "C-3-1", "D-1"],
    "Hunt": ["A-1", "A-2", "A-3", "B-1", "B-2", "B-3", "C-1", "C-2", "C-3-0", "C-3-1", "D-1", "E-1", "F-1"],
    "Erudition": ["A-1", "A-2", "A-3-0", "A-3-1", "B-1", "B-2", "B-3-0", "B-3-1", "C-1", "C-2-0", "C-2-1", "D-1", "E-1"],
    "Harmony": ["A-1", "A-2", "A-3", "B-1", "B-2", "B-3", "C-1", "C-2", "C-3-0", "C-3-1", "D-1", "D-2-0", "D-2-1"],
    "Nihility": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2-0", "C-2-1", "D-1", "D-2"],
    "Preservation": ["A-1", "A-2-0", "A-3-0", "A-4-0", "A-2-1", "A-3-1", "A-4-1", "B-1", "B-2", "B-3-0", "B-3-1", "C-1", "D-1"],
    "Abundance": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2-0", "C-2-1", "D-1", "E-1"]
}