import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { CharacterData } from "../../types/character/CharacterData"
import { LightconeData } from "../../types/lightcone/LightconeData"
import { CharacterCost, CharacterCostObject, CostArray, CostNumber, LightconeCost, LightconeCostObject, PayloadCostObject, TotalCostObject } from "../../types/costs"

export interface PlannerState {
    totalCost: TotalCostObject,
    characterCosts: CharacterCostObject[],
    lightconeCosts: LightconeCostObject[]
}

export interface PlannerPayload {
    name: string,
    type: "level" | "attack" | "skill" | "ultimate" | "talent" | "trace",
    costs: PayloadCostObject,
    traceID?: string
}

const initialState: PlannerState = {
    totalCost: {
        credits: 0,
        characterXP: {
            characterXP1: 0,
            characterXP2: 0,
            characterXP3: 0
        },
        lightconeXP: {
            lightconeXP1: 0,
            lightconeXP2: 0,
            lightconeXP3: 0
        },
        bossMat: {},
        weeklyBossMat: {},
        tracksOfDestiny: 0,
        calyxMat: {},
        commonMat: {}
    },
    characterCosts: [],
    lightconeCosts: [],
}

export const PlannerSlice = createSlice({
    name: "ascension_planner",
    initialState,
    reducers: {
        setPlannerCharacters: (state, action: PayloadAction<CharacterData[]>) => {
            let characterCostsDraft = action.payload.map((char: CharacterData) => {
                let currentCharacter = state.characterCosts.find((c: CharacterCostObject) => char.name === c.name)
                // If the character is not already in the list, initialize the trace ID array and material array
                if (currentCharacter === undefined) {
                    let traceIDs = traceIDTemplates[char.path].map(id => `${char.name} ${id}`)
                    let costs: CharacterCost = {
                        // Source of each material is mapped to a specific index in the array:
                        // [Level, Basic ATK, Skill, Ultimate, Talent, A2 Passive, A4 Passive, A6 Passive, A2 Trace, A3 Trace 1, A3 Trace 2, A4 Trace, A5 Trace 1, A5 Trace 2, A6 Trace, Lv. 1 Trace, Lv. 75 Trace, Lv. 80 Trace]
                        credits: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        characterXP: {
                            characterXP1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            characterXP2: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            characterXP3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        bossMat: {
                            [`${char.materials.bossMat}`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        weeklyBossMat: {
                            [`${char.materials.weeklyBossMat}`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        tracksOfDestiny: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        calyxMat: {
                            [`${char.materials.calyxMat}1`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [`${char.materials.calyxMat}2`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [`${char.materials.calyxMat}3`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        },
                        commonMat: {
                            [`${char.materials.commonMat}1`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [`${char.materials.commonMat}2`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                            [`${char.materials.commonMat}3`]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        }
                    }
                    return {
                        name: char.name,
                        rarity: char.rarity,
                        element: char.element,
                        path: char.path,
                        materials: char.materials,
                        traces: char.traces,
                        traceIDs: traceIDs,
                        costs: costs
                    } as CharacterCostObject
                }
                else {
                    return currentCharacter
                }
            })
            state.characterCosts = characterCostsDraft
        },
        updateCharacterCosts: (state, action: PayloadAction<PlannerPayload>) => {
            let charIndex = state.characterCosts.findIndex(({ name }) => name === action.payload.name)
            if (charIndex !== -1) {
                let index = action.payload.type === "trace" ?
                    state.characterCosts[charIndex].traceIDs.indexOf(action.payload.traceID as string) + 5
                    :
                    ["level", "attack", "skill", "ultimate", "talent"].indexOf(action.payload.type)
                Object.keys(action.payload.costs).forEach((material: string) => {
                    let costValue = state.characterCosts[charIndex].costs[material as keyof CharacterCost]
                    let payloadCostValue = action.payload.costs[material as keyof PayloadCostObject]
                    if (isArray(costValue)) {
                        if (payloadCostValue !== undefined && typeof payloadCostValue === "number") {
                            costValue[index] = payloadCostValue
                        }
                    }
                    else {
                        Object.keys(costValue).forEach((key, i) => {
                            if (!isArray(costValue)) {
                                let values = Object.values(payloadCostValue as PayloadCostObject)
                                if (values[i] !== undefined) {
                                    (costValue[key])[index] = values[i]
                                }
                            }
                        })
                    }
                })
            }
        },
        setPlannerLightcones: (state, action: PayloadAction<LightconeData[]>) => {
            let lightconeCostsDraft = action.payload.map((lightcone: LightconeData) => {
                let currentLightcone = state.lightconeCosts.find((lc: LightconeCostObject) => lightcone.name === lc.name)
                // If the lightcone is not already in the list, initialize the material array
                if (currentLightcone === undefined) {
                    let costs: LightconeCost = {
                        credits: 0,
                        lightconeXP: {
                            lightconeXP1: 0,
                            lightconeXP2: 0,
                            lightconeXP3: 0
                        },
                        calyxMat: {
                            [`${lightcone.materials.calyxMat}1`]: 0,
                            [`${lightcone.materials.calyxMat}2`]: 0,
                            [`${lightcone.materials.calyxMat}3`]: 0
                        },
                        commonMat: {
                            [`${lightcone.materials.commonMat}1`]: 0,
                            [`${lightcone.materials.commonMat}2`]: 0,
                            [`${lightcone.materials.commonMat}3`]: 0
                        }
                    }
                    return {
                        name: lightcone.name,
                        rarity: lightcone.rarity,
                        path: lightcone.path,
                        materials: lightcone.materials,
                        costs: costs
                    } as LightconeCostObject
                }
                else {
                    return currentLightcone
                }
            })
            state.lightconeCosts = lightconeCostsDraft
        },
        updateLightconeCosts: (state, action: PayloadAction<PlannerPayload>) => {
            let lightconeIndex = state.lightconeCosts.findIndex(({ name }) => name === action.payload.name)
            if (lightconeIndex !== -1) {
                Object.keys(action.payload.costs).forEach((material: string) => {
                    let costValue = state.lightconeCosts[lightconeIndex].costs[material as keyof LightconeCost]
                    let payloadCostValue = action.payload.costs[material as keyof PayloadCostObject]
                    if (isNumber(costValue)) {
                        if (payloadCostValue !== undefined && typeof payloadCostValue === "number") {
                            state.lightconeCosts[lightconeIndex].costs.credits = payloadCostValue
                        }
                    }
                    else {
                        Object.keys(costValue).forEach((key, i) => {
                            if (!isNumber(costValue)) {
                                let values = Object.values(payloadCostValue as PayloadCostObject)
                                if (values[i] !== undefined) {
                                    costValue[key] = values[i]
                                }
                            }
                        })
                    }
                })
            }
        },
        updateTotalCosts: (state) => {
            let totalCostDraft: TotalCostObject = {
                credits: 0,
                characterXP: {
                    characterXP1: 0,
                    characterXP2: 0,
                    characterXP3: 0
                },
                lightconeXP: {
                    lightconeXP1: 0,
                    lightconeXP2: 0,
                    lightconeXP3: 0
                },
                bossMat: {},
                weeklyBossMat: {},
                tracksOfDestiny: 0,
                calyxMat: {},
                commonMat: {}
            }
            state.characterCosts.forEach((character: CharacterCostObject) => {
                let reduced = reduceCosts({ ...character.costs })
                Object.entries(reduced).forEach(([material, value]) => {
                    if (material === "credits" || material === "tracksOfDestiny") {
                        totalCostDraft[material] += value
                    }
                    else {
                        Object.entries(value).forEach(([k, v]) => {
                            let costObj = totalCostDraft[material as keyof TotalCostObject]
                            if (!isNumber(costObj)) {
                                if (!Object.keys(costObj).includes(k)) {
                                    costObj[k] = 0
                                }
                                costObj[k] += v as number
                            }
                        })
                    }
                })
            })
            state.lightconeCosts.forEach((lightcone: LightconeCostObject) => {
                Object.entries(lightcone.costs).forEach(([material, value]) => {
                    if (material === "credits") {
                        totalCostDraft[material] += value
                    }
                    else {
                        Object.entries(value).forEach(([k, v]) => {
                            let costObj = totalCostDraft[material as keyof TotalCostObject]
                            if (!isNumber(costObj)) {
                                if (!Object.keys(costObj).includes(k)) {
                                    costObj[k] = 0
                                }
                                costObj[k] += v as number
                            }
                        })
                    }
                })
            })
            state.totalCost = totalCostDraft
        }
    }
})

export const { setPlannerCharacters, updateCharacterCosts, setPlannerLightcones, updateLightconeCosts, updateTotalCosts } = PlannerSlice.actions
export default PlannerSlice.reducer

// ID templates for each path, used for trace nodes
const traceIDTemplates: { [key: string]: string[] } = {
    "Destruction": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2", "C-3-0", "C-3-1", "D-1"],
    "Hunt": ["A-1", "A-2", "A-3", "B-1", "B-2", "B-3", "C-1", "C-2", "C-3-0", "C-3-1", "D-1", "E-1", "F-1"],
    "Erudition": ["A-1", "A-2", "A-3-0", "A-3-1", "B-1", "B-2", "B-3-0", "B-3-1", "C-1", "C-2-0", "C-2-1", "D-1", "E-1"],
    "Harmony": ["A-1", "A-2", "A-3", "B-1", "B-2", "B-3", "C-1", "C-2", "C-3-0", "C-3-1", "D-1", "D-2-0", "D-2-1"],
    "Nihility": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2-0", "C-2-1", "D-1", "D-2"],
    "Preservation": ["A-1", "A-2-0", "A-3-0", "A-4-0", "A-2-1", "A-3-1", "A-4-1", "B-1", "B-2", "B-3-0", "B-3-1", "C-1", "D-1"],
    "Abundance": ["A-1", "A-2", "A-3", "A-4", "B-1", "B-2", "B-3", "B-4", "C-1", "C-2-0", "C-2-1", "D-1", "E-1"]
}

export function reduceCosts(costs: CharacterCost) {
    let result: TotalCostObject = {
        credits: 0,
        characterXP: {
            characterXP1: 0,
            characterXP2: 0,
            characterXP3: 0
        },
        lightconeXP: {
            lightconeXP1: 0,
            lightconeXP2: 0,
            lightconeXP3: 0
        },
        bossMat: {},
        weeklyBossMat: {},
        tracksOfDestiny: 0,
        calyxMat: {},
        commonMat: {}
    }
    Object.entries(costs).forEach(([material, value]) => {
        if (material === "credits" || material === "tracksOfDestiny") {
            result[material] = (value as number[]).reduce((a, c) => a + c)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                let costObj = result[material as keyof TotalCostObject]
                if (!isNumber(costObj)) {
                    costObj[k] = (v as number[]).reduce((a, c) => a + c)
                }
            })
        }
    })
    return result
}

function isArray(x: number[] | (CostArray | CostNumber) | unknown): x is number[] {
    return (x as number[]).length !== undefined
}

function isNumber(x: number | (CostArray | CostNumber) | unknown): x is number {
    return typeof x === "number"
}