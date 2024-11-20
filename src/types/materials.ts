export interface Materials {
    calyxMat?: string,
    commonMat?: string,
    bossMat?: string,
    weeklyBossMat?: string
}

export type CharacterMaterials = Required<Pick<Materials, "calyxMat" | "commonMat" | "bossMat" | "weeklyBossMat">>
export type LightconeMaterials = Required<Pick<Materials, "calyxMat" | "commonMat">>