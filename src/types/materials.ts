import { NestedKeyOf } from "./_common";
import {
    characterXPMaterials,
    weaponXPMaterials,
} from "data/materials/xpMaterials";
import { calyxMaterials } from "data/materials/calyxMaterials";
import { commonMaterials } from "data/materials/commonMaterials";
import { bossMaterials } from "data/materials/bossMaterials";
import { weeklyBossMaterials } from "data/materials/weeklyBossMaterials";

export type CharacterXPMaterial = keyof typeof characterXPMaterials;
export type WeaponXPMaterial = keyof typeof weaponXPMaterials;

export type CalyxMaterialKeys = keyof typeof calyxMaterials;
export type CalyxMaterial = NestedKeyOf<typeof calyxMaterials>;

export type CommonMaterialKeys = keyof typeof commonMaterials;
export type CommonMaterial = NestedKeyOf<typeof commonMaterials>;

export type BossMaterial = keyof typeof bossMaterials;
export type WeeklyBossMaterial = keyof typeof weeklyBossMaterials;

export interface Materials {
    calyxMat?: CalyxMaterial;
    commonMat?: CommonMaterial;
    bossMat?: BossMaterial;
    weeklyBossMat?: WeeklyBossMaterial;
}

export type CharacterMaterials = Required<Materials>;
export type WeaponMaterials = Required<
    Pick<Materials, "calyxMat" | "commonMat">
>;
