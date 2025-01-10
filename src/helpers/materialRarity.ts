import { TotalCostObjectKeys } from "types/costs";

export const materialRarity: Record<TotalCostObjectKeys, [number, number]> = {
    credits: [3, 3],
    characterXP: [2, 4],
    weaponXP: [2, 4],
    bossMat: [4, 4],
    weeklyBossMat: [4, 4],
    tracksOfDestiny: [5, 5],
    calyxMat: [2, 4],
    commonMat: [2, 4],
};
