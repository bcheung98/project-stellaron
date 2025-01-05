import { characterLevel, characterSkill, weaponLevel } from "data/levelUpCosts";
import { NestedKeyOf } from "./_common";
import { Character } from "./character";
import { Weapon } from "./weapon";
import {
    CharacterXPMaterial,
    WeaponXPMaterial,
    BossMaterial,
    WeeklyBossMaterial,
    CalyxMaterial,
    CommonMaterial,
} from "./materials";

export type CostObjectKeys =
    | NestedKeyOf<TotalCostObject>
    | keyof ReturnType<typeof characterLevel>
    | keyof ReturnType<typeof characterSkill>
    | keyof ReturnType<typeof weaponLevel>
    | "Credit"
    | "Tracks of Destiny";

export type TotalCostObjectKeys = keyof TotalCostObject;

export interface TotalCostObject {
    credits: Record<"Credit", number>;
    characterXP: Record<CharacterXPMaterial, number>;
    weaponXP: Record<WeaponXPMaterial, number>;
    bossMat: Record<BossMaterial, number>;
    weeklyBossMat: Record<WeeklyBossMaterial, number>;
    calyxMat: Record<CalyxMaterial, number>;
    commonMat: Record<CommonMaterial, number>;
}

export type PayloadCostObject = Record<
    TotalCostObjectKeys,
    Record<CostObjectKeys, number>
>;

export enum CostObjectSourceIndex {
    level,
    basic,
    skill,
    ultimate,
    talent,
    trace,
    // "A2 Passive",
    // "A4 Passive",
    // "A6 Passive",
    // "A2 Trace",
    // "A3 Trace 1",
    // "A3 Trace 2",
    // "A4 Trace",
    // "A5 Trace 1",
    // "A5 Trace 2",
    // "A6 Trace",
    // "Lv. 1 Trace",
    // "Lv. 75 Trace",
    // "Lv. 80 Trace",
}

export interface UpdateCostsPayload {
    name: string;
    type: keyof typeof CostObjectSourceIndex;
    costs: PayloadCostObject;
}

export interface CharacterCost {
    credits: Record<"Credit", number[]>;
    characterXP: Record<CharacterXPMaterial, number[]>;
    bossMat: Record<BossMaterial, number[]>;
    weeklyBossMat: Record<WeeklyBossMaterial, number[]>;
    calyxMat: Record<CalyxMaterial, number[]>;
    commonMat: Record<CommonMaterial, number[]>;
}

export interface CharacterCostObject
    extends Pick<
        Character,
        "name" | "fullName" | "rarity" | "element" | "path"
    > {
    costs: CharacterCost;
}

export interface WeaponCost {
    credits: Record<"Credit", number>;
    weaponXP: Record<WeaponXPMaterial, number>;
    calyxMat: Record<CalyxMaterial, number>;
    commonMat: Record<CommonMaterial, number>;
}

export interface WeaponCostObject
    extends Pick<Weapon, "name" | "displayName" | "rarity" | "path"> {
    costs: WeaponCost;
}
