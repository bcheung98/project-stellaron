import { CharacterTraceData } from "./character/CharacterTraceData"
import { MaterialsData } from "./MaterialsData"

export interface CostArray {
    [material: string]: number[]
}

export interface CostNumber {
    [material: string]: number
}

export interface TotalCostObject {
    credits: number,
    characterXP: CostNumber,
    lightconeXP: CostNumber,
    bossMat: CostNumber,
    weeklyBossMat: CostNumber,
    tracksOfDestiny: number,
    calyxMat: CostNumber,
    commonMat: CostNumber
}

export interface CharacterCostObject {
    name: string,
    displayName?: string,
    rarity: number,
    element: string,
    path: string,
    materials: MaterialsData,
    traces: CharacterTraceData[],
    traceIDs: string[]
    costs: CharacterCost
}

export interface CharacterCost {
    credits: number[],
    characterXP: CostArray,
    bossMat: CostArray,
    weeklyBossMat: CostArray,
    tracksOfDestiny: number[],
    calyxMat: CostArray,
    commonMat: CostArray
}

export interface LightconeCostObject {
    name: string,
    displayName?: string,
    rarity: number,
    path: string,
    materials: MaterialsData,
    costs: LightconeCost
}

export interface LightconeCost {
    credits: number,
    lightconeXP: CostNumber,
    calyxMat: CostNumber,
    commonMat: CostNumber
}

export interface PayloadCostObject {
    credits?: number,
    characterXP?: CostNumber,
    lightconeXP?: CostNumber,
    bossMat?: CostNumber,
    weeklyBossMat?: CostNumber,
    tracksOfDestiny?: number,
    calyxMat?: CostNumber,
    commonMat?: CostNumber
}

export interface MaterialsMap {
    credits?: number[],
    characterXP1?: number[],
    characterXP2?: number[],
    characterXP3?: number[]
    lightconeXP1?: number[],
    lightconeXP2?: number[],
    lightconeXP3?: number[]
    bossMat?: number[],
    weeklyBossMat?: number[],
    tracksOfDestiny?: number[],
    calyxMat1?: number[],
    calyxMat2?: number[],
    calyxMat3?: number[]
    commonMat1?: number[],
    commonMat2?: number[],
    commonMat3?: number[]
}

export interface CharacterLevel {
    "5": MaterialsMap,
    "4": MaterialsMap
}

export interface CharacterSkill {
    "5": {
        attack: MaterialsMap,
        skills: MaterialsMap
    },
    "4": {
        attack: MaterialsMap,
        skills: MaterialsMap
    }
}

export interface TraceCosts {
    credits?: number,
    weeklyBossMat?: number,
    tracksOfDestiny?: number,
    calyxMat1?: number,
    calyxMat2?: number,
    calyxMat3?: number
    commonMat1?: number,
    commonMat2?: number,
    commonMat3?: number
}

export interface TraceTotal {
    "5": TraceCosts,
    "4": TraceCosts
}

export interface TraceNodeUnlock {
    "A2"?: TraceCosts,
    "A3"?: TraceCosts,
    "A4"?: TraceCosts,
    "A5"?: TraceCosts,
    "A6"?: TraceCosts,
    "Lv. 1"?: TraceCosts,
    "Lv. 75"?: TraceCosts,
    "Lv. 80"?: TraceCosts
}

export interface TraceNode {
    "5": TraceNodeUnlock,
    "4": TraceNodeUnlock
}

export interface LightconeLevel extends CharacterLevel {
    "3": MaterialsMap
}