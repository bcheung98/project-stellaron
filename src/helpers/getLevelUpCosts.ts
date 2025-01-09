import { PayloadCostObject } from "types/costs";
import { objectKeys, range } from "./utils";
import {
    characterLevel,
    characterSkill,
    characterTraceMainCosts,
    characterTraceSmallCosts,
    weaponLevel,
} from "data/levelUpCosts";
import { Rarity } from "types/_common";
import { CharacterUnlockKeys } from "types/character";

export function getCharacterLevelCost(
    [start, stop]: number[],
    selected: boolean,
    withXP = true,
    rarity: Extract<Rarity, 5 | 4>
) {
    const costs = { ...characterLevel(rarity) };
    if (!withXP) {
        objectKeys(costs).forEach((material) => {
            costs[material] = costs[material]
                .map((value, index) => (index % 2 === 0 ? value : -1))
                .filter((i) => (i! -= -1));
        });
    }
    let [
        credits,
        characterXP1,
        characterXP2,
        characterXP3,
        bossMat,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            characterXP1,
            characterXP2,
            characterXP3,
            bossMat,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }
    return {
        credits: {
            Credit: credits,
        },
        characterXP: {
            characterXP1: characterXP1,
            characterXP2: characterXP2,
            characterXP3: characterXP3,
        },
        bossMat: {
            bossMat: bossMat,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        },
    } as PayloadCostObject;
}

export function getCharacterSkillCost(
    [start, stop]: number[],
    selected: boolean,
    rarity: Extract<Rarity, 5 | 4>,
    skillKey: "attack" | "skill"
) {
    const costs = { ...characterSkill(rarity, skillKey) };
    let [
        credits,
        weeklyBossMat,
        tracksOfDestiny,
        calyxMat1,
        calyxMat2,
        calyxMat3,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            weeklyBossMat,
            tracksOfDestiny,
            calyxMat1,
            calyxMat2,
            calyxMat3,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }
    return {
        credits: {
            Credit: credits,
        },
        weeklyBossMat: {
            weeklyBossMat: weeklyBossMat,
        },
        tracksOfDestiny: {
            tracksOfDestiny: tracksOfDestiny,
        },
        calyxMat: {
            calyxMat1: calyxMat1,
            calyxMat2: calyxMat2,
            calyxMat3: calyxMat3,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        },
    } as PayloadCostObject;
}

export function getCharacterTraceMain(
    node: Extract<CharacterUnlockKeys, "A2" | "A4" | "A6">,
    rarity: Extract<Rarity, 5 | 4>,
    selected: boolean
) {
    const costs = { ...characterTraceMainCosts[node] };
    const index = rarity - 4;
    let {
        credits,
        calyxMat1,
        calyxMat2,
        calyxMat3,
        weeklyBossMat,
        tracksOfDestiny,
    } = costs;
    return {
        credits: {
            Credit: selected && credits ? credits[index] : 0,
        },
        weeklyBossMat: {
            weeklyBossMat: selected && weeklyBossMat ? weeklyBossMat[index] : 0,
        },
        tracksOfDestiny: {
            tracksOfDestiny:
                selected && tracksOfDestiny ? tracksOfDestiny[index] : 0,
        },
        calyxMat: {
            calyxMat1: selected && calyxMat1 ? calyxMat1[index] : 0,
            calyxMat2: selected && calyxMat2 ? calyxMat2[index] : 0,
            calyxMat3: selected && calyxMat3 ? calyxMat3[index] : 0,
        },
    } as PayloadCostObject;
}

export function getCharacterTraceSmall(
    node: CharacterUnlockKeys,
    rarity: Extract<Rarity, 5 | 4>,
    selected: boolean
) {
    const costs = { ...characterTraceSmallCosts[node] };
    const index = rarity - 4;
    let {
        credits,
        calyxMat1,
        calyxMat2,
        calyxMat3,
        commonMat1,
        commonMat2,
        commonMat3,
    } = costs;
    return {
        credits: {
            Credit: selected && credits ? credits[index] : 0,
        },
        calyxMat: {
            calyxMat1: selected && calyxMat1 ? calyxMat1[index] : 0,
            calyxMat2: selected && calyxMat2 ? calyxMat2[index] : 0,
            calyxMat3: selected && calyxMat3 ? calyxMat3[index] : 0,
        },
        commonMat: {
            commonMat1: selected && commonMat1 ? commonMat1[index] : 0,
            commonMat2: selected && commonMat2 ? commonMat2[index] : 0,
            commonMat3: selected && commonMat3 ? commonMat3[index] : 0,
        },
    } as PayloadCostObject;
}

export function getWeaponLevelCost(
    [start, stop]: number[],
    selected: boolean,
    withXP = true,
    rarity: Extract<Rarity, 5 | 4>
) {
    const costs = { ...weaponLevel(rarity) };
    if (!withXP) {
        objectKeys(costs).forEach((material) => {
            costs[material] = costs[material]
                .map((value, index) => (index % 2 === 0 ? value : -1))
                .filter((i) => (i! -= -1));
        });
    }
    let [
        credits,
        weaponXP1,
        weaponXP2,
        weaponXP3,
        calyxMat1,
        calyxMat2,
        calyxMat3,
        commonMat1,
        commonMat2,
        commonMat3,
    ] = range(0, objectKeys(costs).length, 0);
    if (selected) {
        [
            credits,
            weaponXP1,
            weaponXP2,
            weaponXP3,
            calyxMat1,
            calyxMat2,
            calyxMat3,
            commonMat1,
            commonMat2,
            commonMat3,
        ] = calculateCosts(costs, start, stop);
    }
    return {
        credits: {
            Credit: credits,
        },
        weaponXP: {
            weaponXP1: weaponXP1,
            weaponXP2: weaponXP2,
            weaponXP3: weaponXP3,
        },
        calyxMat: {
            calyxMat1: calyxMat1,
            calyxMat2: calyxMat2,
            calyxMat3: calyxMat3,
        },
        commonMat: {
            commonMat1: commonMat1,
            commonMat2: commonMat2,
            commonMat3: commonMat3,
        },
    } as PayloadCostObject;
}

function calculateCosts<T extends { [key: string]: number[] }>(
    costs: T,
    start: number,
    stop: number
) {
    return Object.values(costs).map((arr) =>
        arr.slice(start, stop).reduce((a, c) => a + c)
    );
}