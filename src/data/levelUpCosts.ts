import { LevelUpCostSkillKeys } from "custom/LevelUpCosts";
import { Path, Rarity } from "types/_common";

export const characterLevel = (rarity: Rarity, name?: string) => {
    const index = rarity - 4;
    return {
        credits: characterLevelCosts.credits[index],
        characterXP1: characterLevelCosts.characterXP1[index],
        characterXP2: characterLevelCosts.characterXP2[index],
        characterXP3: characterLevelCosts.characterXP3[index],
        bossMat: name?.startsWith("Trailblazer")
            ? [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 8, 0, 10, 0]
            : characterLevelCosts.bossMat[index],
        commonMat1: characterLevelCosts.commonMat1[index],
        commonMat2: characterLevelCosts.commonMat2[index],
        commonMat3: characterLevelCosts.commonMat3[index],
    };
};

// [4-Star Cost, 5-Star Cost]
export const characterLevelCosts = {
    credits: [
        [
            0, 11300, 3200, 17800, 6400, 20700, 12800, 39300, 32000, 82300,
            64000, 132700, 128000, 276300,
        ],
        [
            0, 11300, 4000, 17800, 8000, 20700, 16000, 39300, 40000, 82300,
            80000, 132700, 160000, 276300,
        ],
    ],
    characterXP1: [
        [0, 3, 0, 3, 0, 2, 0, 0, 0, 3, 0, 2, 0, 3, 0],
        [0, 3, 0, 3, 0, 2, 0, 0, 0, 3, 0, 2, 0, 3, 0],
    ],
    characterXP2: [
        [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    ],
    characterXP3: [
        [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0],
        [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0],
    ],
    bossMat: [
        [0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 15, 0, 28, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 7, 0, 20, 0, 35, 0],
    ],
    commonMat1: [
        [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    commonMat2: [
        [0, 0, 0, 0, 0, 0, 5, 0, 8, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
    ],
    commonMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0],
    ],
};

export const characterSkill = (
    rarity: Rarity,
    skillKey: LevelUpCostSkillKeys,
    path: Path
) => {
    const costArray =
        path === "Remembrance"
            ? characterSkillCostsRemembrance
            : characterSkillCosts;
    const index = rarity - 4;
    const key = skillKey === "attack" ? "attack" : "skill";
    return {
        credits: costArray[key].credits[index],
        weeklyBossMat: costArray[key].weeklyBossMat[index],
        tracksOfDestiny: costArray[key].tracksOfDestiny[index],
        calyxMat1: costArray[key].calyxMat1[index],
        calyxMat2: costArray[key].calyxMat2[index],
        calyxMat3: costArray[key].calyxMat3[index],
        commonMat1: costArray[key].commonMat1[index],
        commonMat2: costArray[key].commonMat2[index],
        commonMat3: costArray[key].commonMat3[index],
    };
};

// [4-Star Cost, 5-Star Cost]
export const characterSkillCosts = {
    attack: {
        credits: [
            [0, 4000, 8000, 16000, 36000, 128000],
            [0, 5000, 10000, 20000, 45000, 160000],
        ],
        calyxMat1: [
            [0, 2, 0, 0, 0, 0],
            [0, 3, 0, 0, 0, 0],
        ],
        calyxMat2: [
            [0, 0, 2, 4, 0, 0],
            [0, 0, 3, 5, 0, 0],
        ],
        calyxMat3: [
            [0, 0, 0, 0, 2, 6],
            [0, 0, 0, 0, 3, 8],
        ],
        commonMat1: [
            [0, 4, 0, 0, 0, 0],
            [0, 6, 0, 0, 0, 0],
        ],
        commonMat2: [
            [0, 0, 2, 3, 0, 0],
            [0, 0, 3, 4, 0, 0],
        ],
        commonMat3: [
            [0, 0, 0, 0, 2, 3],
            [0, 0, 0, 0, 3, 4],
        ],
        weeklyBossMat: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        tracksOfDestiny: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
    },
    skill: {
        credits: [
            [0, 2000, 4000, 8000, 16000, 24000, 36000, 64000, 128000, 240000],
            [0, 2500, 5000, 10000, 20000, 30000, 45000, 80000, 160000, 300000],
        ],
        calyxMat1: [
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        ],
        calyxMat2: [
            [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
            [0, 0, 0, 3, 5, 7, 0, 0, 0, 0],
        ],
        calyxMat3: [
            [0, 0, 0, 0, 0, 0, 2, 4, 6, 11],
            [0, 0, 0, 0, 0, 0, 3, 5, 8, 14],
        ],
        commonMat1: [
            [0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 6, 0, 0, 0, 0, 0, 0, 0],
        ],
        commonMat2: [
            [0, 0, 0, 2, 3, 5, 0, 0, 0, 0],
            [0, 0, 0, 3, 4, 6, 0, 0, 0, 0],
        ],
        commonMat3: [
            [0, 0, 0, 0, 0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 4, 0, 0],
        ],
        weeklyBossMat: [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        ],
        tracksOfDestiny: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ],
    },
};

// Costs for Remembrance characters
// [4-Star Cost, 5-Star Cost]
export const characterSkillCostsRemembrance = {
    attack: {
        credits: [
            [0, 2800, 5600, 12800, 28000, 112000],
            [0, 3500, 7000, 16000, 35000, 140000],
        ],
        calyxMat1: [
            [0, 1, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0],
        ],
        calyxMat2: [
            [0, 0, 1, 3, 0, 0],
            [0, 0, 2, 4, 0, 0],
        ],
        calyxMat3: [
            [0, 0, 0, 0, 2, 5],
            [0, 0, 0, 0, 2, 6],
        ],
        commonMat1: [
            [0, 3, 0, 0, 0, 0],
            [0, 4, 0, 0, 0, 0],
        ],
        commonMat2: [
            [0, 0, 1, 2, 0, 0],
            [0, 0, 2, 3, 0, 0],
        ],
        commonMat3: [
            [0, 0, 0, 0, 2, 2],
            [0, 0, 0, 0, 2, 2],
        ],
        weeklyBossMat: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
        tracksOfDestiny: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        ],
    },
    skill: {
        credits: [
            [0, 2000, 2800, 5600, 12800, 20000, 28000, 56000, 112000, 192000],
            [0, 2500, 3500, 7000, 16000, 25000, 35000, 70000, 140000, 240000],
        ],
        calyxMat1: [
            [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        ],
        calyxMat2: [
            [0, 0, 0, 1, 3, 5, 0, 0, 0, 0],
            [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
        ],
        calyxMat3: [
            [0, 0, 0, 0, 0, 0, 2, 3, 5, 9],
            [0, 0, 0, 0, 0, 0, 2, 5, 6, 13],
        ],
        commonMat1: [
            [0, 2, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 3, 4, 0, 0, 0, 0, 0, 0, 0],
        ],
        commonMat2: [
            [0, 0, 0, 1, 2, 5, 0, 0, 0, 0],
            [0, 0, 0, 2, 3, 6, 0, 0, 0, 0],
        ],
        commonMat3: [
            [0, 0, 0, 0, 0, 0, 2, 2, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 4, 0, 0],
        ],
        weeklyBossMat: [
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        ],
        tracksOfDestiny: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ],
    },
};

export const characterMemosprite = (rarity: Rarity) => {
    const index = rarity - 4;
    return {
        credits: characterMemospriteCosts.credits[index],
        calyxMat1: characterMemospriteCosts.calyxMat1[index],
        calyxMat2: characterMemospriteCosts.calyxMat2[index],
        calyxMat3: characterMemospriteCosts.calyxMat3[index],
        commonMat1: characterMemospriteCosts.commonMat1[index],
        commonMat2: characterMemospriteCosts.commonMat2[index],
        commonMat3: characterMemospriteCosts.commonMat3[index],
    };
};

export const characterMemospriteCosts = {
    credits: [
        [0, 2800, 5600, 12800, 28000, 112000],
        [0, 3500, 7000, 16000, 35000, 140000],
    ],
    calyxMat1: [
        [0, 1, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0],
    ],
    calyxMat2: [
        [0, 0, 1, 3, 0, 0],
        [0, 0, 2, 4, 0, 0],
    ],
    calyxMat3: [
        [0, 0, 0, 0, 2, 5],
        [0, 0, 0, 0, 2, 6],
    ],
    commonMat1: [
        [0, 3, 0, 0, 0, 0],
        [0, 4, 0, 0, 0, 0],
    ],
    commonMat2: [
        [0, 0, 1, 2, 0, 0],
        [0, 0, 2, 3, 0, 0],
    ],
    commonMat3: [
        [0, 0, 0, 0, 2, 2],
        [0, 0, 0, 0, 2, 2],
    ],
};

interface CharacterTraceCost {
    credits: [number, number];
    calyxMat1: [number, number];
    calyxMat2: [number, number];
    calyxMat3: [number, number];
    commonMat1: [number, number];
    commonMat2: [number, number];
    commonMat3: [number, number];
    weeklyBossMat: [number, number];
    tracksOfDestiny: [number, number];
}

// [4-Star Cost, 5-Star Cost]
export const characterTraceMainCosts = {
    A2: {
        credits: [4000, 5000],
        calyxMat1: [2, 3],
        weeklyBossMat: [1, 1],
    } as CharacterTraceCost,
    A4: {
        credits: [16000, 20000],
        calyxMat2: [4, 5],
        weeklyBossMat: [1, 1],
        tracksOfDestiny: [1, 1],
    } as CharacterTraceCost,
    A6: {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        weeklyBossMat: [1, 1],
        tracksOfDestiny: [1, 1],
    } as CharacterTraceCost,
};

// Costs for Remembrance characters
// [4-Star Cost, 5-Star Cost]
export const characterTraceMainCostsRemembrance = {
    A2: {
        credits: [4000, 5000],
        calyxMat1: [2, 3],
        weeklyBossMat: [1, 1],
    } as CharacterTraceCost,
    A4: {
        credits: [16000, 20000],
        calyxMat2: [5, 5],
        weeklyBossMat: [1, 1],
        tracksOfDestiny: [1, 1],
    } as CharacterTraceCost,
    A6: {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        weeklyBossMat: [1, 1],
        tracksOfDestiny: [1, 1],
    } as CharacterTraceCost,
};

// [4-Star Cost, 5-Star Cost]
export const characterTraceSmallCosts = {
    A2: {
        credits: [4000, 5000],
        calyxMat1: [2, 3],
        commonMat1: [4, 6],
    } as CharacterTraceCost,
    A3: {
        credits: [8000, 10000],
        calyxMat2: [2, 3],
        commonMat2: [2, 3],
    } as CharacterTraceCost,
    A4: {
        credits: [16000, 20000],
        calyxMat2: [4, 5],
        commonMat2: [3, 4],
    } as CharacterTraceCost,
    A5: {
        credits: [36000, 45000],
        calyxMat3: [2, 3],
        commonMat3: [2, 3],
    } as CharacterTraceCost,
    A6: {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        commonMat3: [6, 8],
    } as CharacterTraceCost,
    "Lv. 1": {
        credits: [2000, 2500],
        commonMat1: [2, 2],
    } as CharacterTraceCost,
    "Lv. 75": {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        commonMat3: [6, 8],
    } as CharacterTraceCost,
    "Lv. 80": {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        commonMat3: [6, 8],
    } as CharacterTraceCost,
};

// Costs for Remembrance characters
// [4-Star Cost, 5-Star Cost]
export const characterTraceSmallCostsRemembrance = {
    A2: {
        credits: [3200, 4000],
        calyxMat1: [1, 3],
        commonMat1: [2, 6],
    } as CharacterTraceCost,
    A3: {
        credits: [7200, 9000],
        calyxMat2: [2, 3],
        commonMat2: [2, 2],
    } as CharacterTraceCost,
    A4: {
        credits: [15200, 19000],
        calyxMat2: [5, 4],
        commonMat2: [2, 4],
    } as CharacterTraceCost,
    A5: {
        credits: [36000, 45000],
        calyxMat3: [2, 3],
        commonMat3: [2, 3],
    } as CharacterTraceCost,
    A6: {
        credits: [112000, 140000],
        calyxMat3: [5, 7],
        commonMat3: [3, 6],
    } as CharacterTraceCost,
    "Lv. 1": {
        credits: [2000, 2500],
        commonMat1: [2, 2],
    } as CharacterTraceCost,
    "Lv. 75": {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        commonMat3: [6, 8],
    } as CharacterTraceCost,
    "Lv. 80": {
        credits: [128000, 160000],
        calyxMat3: [6, 8],
        commonMat3: [6, 8],
    } as CharacterTraceCost,
};

export const weaponLevel = (rarity: Rarity) => {
    const index = rarity - 3;
    return {
        credits: weaponCosts.credits[index],
        weaponXP1: weaponCosts.weaponXP1[index],
        weaponXP2: weaponCosts.weaponXP2[index],
        weaponXP3: weaponCosts.weaponXP3[index],
        calyxMat1: weaponCosts.calyxMat1[index],
        calyxMat2: weaponCosts.calyxMat2[index],
        calyxMat3: weaponCosts.calyxMat3[index],
        commonMat1: weaponCosts.commonMat1[index],
        commonMat2: weaponCosts.commonMat2[index],
        commonMat3: weaponCosts.commonMat3[index],
    };
};

export const weaponCosts = {
    credits: [
        [
            0, 8000, 3000, 13800, 6000, 18000, 12000, 27750, 30000, 43250,
            60000, 65750, 120000, 124000,
        ],
        [
            0, 10750, 4000, 17250, 8000, 24000, 16000, 37000, 40000, 57500,
            80000, 87500, 160000, 165250,
        ],
        [
            0, 13250, 5000, 21500, 10000, 29750, 20000, 46250, 50000, 71750,
            100000, 109250, 200000, 206750,
        ],
    ],
    weaponXP1: [
        [0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0],
        [0, 3, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1],
        [0, 1, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3],
    ],
    weaponXP2: [
        [0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
        [0, 1, 0, 2, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2],
    ],
    weaponXP3: [
        [0, 2, 0, 4, 0, 6, 0, 9, 0, 14, 0, 21, 0, 41],
        [0, 3, 0, 5, 0, 7, 0, 12, 0, 19, 0, 29, 0, 55],
        [0, 4, 0, 7, 0, 9, 0, 15, 0, 23, 0, 36, 0, 68],
    ],
    calyxMat1: [
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    calyxMat2: [
        [0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0],
    ],
    calyxMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0],
    ],
    commonMat1: [
        [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    commonMat2: [
        [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0],
    ],
    commonMat3: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 8, 0, 0],
    ],
};
