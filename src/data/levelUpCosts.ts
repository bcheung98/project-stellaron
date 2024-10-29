import { CharacterLevel, CharacterSkill, LightconeLevel, TraceNode, TraceTotal } from "../types/costs"

export const characterLevel: CharacterLevel = {
    "5": {
        credits: [0, 4000, 8000, 16000, 40000, 80000, 160000],
        bossMat: [0, 0, 0, 3, 7, 20, 35],
        commonMat1: [0, 5, 10, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 6, 9, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 6, 9]
    },
    "4": {
        credits: [0, 3200, 6400, 12800, 32000, 64000, 128000],
        bossMat: [0, 0, 0, 2, 5, 15, 28],
        commonMat1: [0, 4, 8, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 5, 8, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 5, 7]
    }
}

export const characterLevelWithXP: CharacterLevel = {
    "5": {
        credits: [0, 11300, 4000, 17800, 8000, 20700, 16000, 39300, 40000, 82300, 80000, 132700, 160000, 276300],
        characterXP1: [0, 3, 0, 3, 0, 2, 0, 5, 0, 3, 0, 2, 0, 3, 0],
        characterXP2: [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        characterXP3: [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0],
        bossMat: [0, 0, 0, 0, 0, 0, 3, 0, 7, 0, 20, 0, 35, 0],
        commonMat1: [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0]
    },
    "4": {
        credits: [0, 11300, 3200, 17800, 6400, 20700, 12800, 39300, 32000, 82300, 64000, 132700, 128000, 276300],
        characterXP1: [0, 3, 0, 3, 0, 2, 0, 5, 0, 3, 0, 2, 0, 3, 0],
        characterXP2: [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        characterXP3: [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0],
        bossMat: [0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 15, 0, 28, 0],
        commonMat1: [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 0, 0, 0, 5, 0, 8, 0, 0, 0, 0, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0]
    }
}

export const characterSkillLevel: CharacterSkill = {
    "5": {
        attack: {
            credits: [0, 5000, 10000, 20000, 45000, 160000],
            calyxMat1: [0, 3, 0, 0, 0, 0],
            calyxMat2: [0, 0, 3, 5, 0, 0],
            calyxMat3: [0, 0, 0, 0, 3, 8],
            commonMat1: [0, 6, 0, 0, 0, 0],
            commonMat2: [0, 0, 3, 4, 0, 0],
            commonMat3: [0, 0, 0, 0, 3, 4],
            weeklyBossMat: [0, 0, 0, 0, 0, 0],
            tracksOfDestiny: [0, 0, 0, 0, 0, 0]
        },
        skills: {
            credits: [0, 2500, 5000, 10000, 20000, 30000, 45000, 80000, 160000, 300000],
            calyxMat1: [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            calyxMat2: [0, 0, 0, 3, 5, 7, 0, 0, 0, 0],
            calyxMat3: [0, 0, 0, 0, 0, 0, 3, 5, 8, 14],
            commonMat1: [0, 3, 6, 0, 0, 0, 0, 0, 0, 0],
            commonMat2: [0, 0, 0, 3, 4, 6, 0, 0, 0, 0],
            commonMat3: [0, 0, 0, 0, 0, 0, 3, 4, 0, 0],
            weeklyBossMat: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            tracksOfDestiny: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
        }
    },
    "4": {
        attack: {
            credits: [0, 4000, 8000, 16000, 36000, 128000],
            calyxMat1: [0, 2, 0, 0, 0, 0],
            calyxMat2: [0, 0, 2, 4, 0, 0],
            calyxMat3: [0, 0, 0, 0, 2, 6],
            commonMat1: [0, 4, 0, 0, 0, 0],
            commonMat2: [0, 0, 2, 3, 0, 0],
            commonMat3: [0, 0, 0, 0, 2, 3],
            weeklyBossMat: [0, 0, 0, 0, 0, 0],
            tracksOfDestiny: [0, 0, 0, 0, 0, 0]
        },
        skills: {
            credits: [0, 2000, 4000, 8000, 16000, 24000, 36000, 64000, 128000, 240000],
            calyxMat1: [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            calyxMat2: [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
            calyxMat3: [0, 0, 0, 0, 0, 0, 2, 4, 6, 11],
            commonMat1: [0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
            commonMat2: [0, 0, 0, 2, 3, 5, 0, 0, 0, 0],
            commonMat3: [0, 0, 0, 0, 0, 0, 2, 3, 0, 0],
            weeklyBossMat: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            tracksOfDestiny: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
        }
    }
}

export const traceTotalCosts: TraceTotal = {
    "5": {
        credits: 802500,
        calyxMat1: 6,
        calyxMat2: 16,
        calyxMat3: 38,
        commonMat1: 8,
        commonMat2: 10,
        commonMat3: 30,
        weeklyBossMat: 3,
        tracksOfDestiny: 2
    },
    "4": {
        credits: 642000,
        calyxMat1: 4,
        calyxMat2: 12,
        calyxMat3: 28,
        commonMat1: 6,
        commonMat2: 7,
        commonMat3: 22,
        weeklyBossMat: 3,
        tracksOfDestiny: 2
    }
}

export const traceMain: TraceNode = {
    "5": {
        "A2": {
            credits: 5000,
            calyxMat1: 3,
            weeklyBossMat: 1
        },
        "A4": {
            credits: 20000,
            calyxMat2: 5,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        },
        "A6": {
            credits: 160000,
            calyxMat3: 8,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        }
    },
    "4": {
        "A2": {
            credits: 4000,
            calyxMat1: 2,
            weeklyBossMat: 1,
        },
        "A4": {
            credits: 16000,
            calyxMat2: 4,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        },
        "A6": {
            credits: 128000,
            calyxMat3: 6,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        }
    }
}

export const traceSmall: TraceNode = {
    "5": {
        "A2": {
            credits: 5000,
            calyxMat1: 3,
            commonMat1: 6
        },
        "A3": {
            credits: 10000,
            calyxMat2: 3,
            commonMat2: 3
        },
        "A4": {
            credits: 20000,
            calyxMat2: 5,
            commonMat2: 4
        },
        "A5": {
            credits: 45000,
            calyxMat3: 3,
            commonMat3: 3
        },
        "A6": {
            credits: 160000,
            calyxMat3: 8,
            commonMat3: 8
        },
        "Lv. 1": {
            credits: 2500,
            commonMat1: 2
        },
        "Lv. 75": {
            credits: 160000,
            calyxMat3: 8,
            commonMat3: 8
        },
        "Lv. 80": {
            credits: 160000,
            calyxMat3: 8,
            commonMat3: 8
        }
    },
    "4": {
        "A2": {
            credits: 4000,
            calyxMat1: 2,
            commonMat1: 4
        },
        "A3": {
            credits: 8000,
            calyxMat2: 2,
            commonMat2: 2
        },
        "A4": {
            credits: 16000,
            calyxMat2: 4,
            commonMat2: 3
        },
        "A5": {
            credits: 36000,
            calyxMat3: 2,
            commonMat3: 2
        },
        "A6": {
            credits: 128000,
            calyxMat3: 6,
            commonMat3: 6
        },
        "Lv. 1": {
            credits: 2000,
            commonMat1: 2
        },
        "Lv. 75": {
            credits: 128000,
            calyxMat3: 6,
            commonMat3: 6
        },
        "Lv. 80": {
            credits: 128000,
            calyxMat3: 6,
            commonMat3: 6
        }
    }
}

export const lightconeLevel: LightconeLevel = {
    "5": {
        credits: [0, 5000, 10000, 20000, 50000, 100000, 200000],
        calyxMat1: [0, 0, 4, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 4, 8, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 5, 10],
        commonMat1: [0, 8, 12, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 8, 12, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 6, 8]
    },
    "4": {
        credits: [0, 4000, 8000, 16000, 40000, 80000, 160000],
        calyxMat1: [0, 0, 3, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 3, 6, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 4, 8],
        commonMat1: [0, 5, 10, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 6, 9, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 5, 7]
    },
    "3": {
        credits: [0, 3000, 6000, 12000, 30000, 60000, 120000],
        calyxMat1: [0, 0, 2, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 2, 4, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 3, 6],
        commonMat1: [0, 4, 8, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 4, 6, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 3, 5]
    }
}

export const lightconeLevelWithXP: LightconeLevel = {
    "5": {
        credits: [0, 13250, 5000, 21500, 10000, 29750, 20000, 46250, 50000, 71750, 100000, 109250, 200000, 206750],
        lightconeXP1: [0, 1, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3],
        lightconeXP2: [0, 1, 0, 0, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2],
        lightconeXP3: [0, 4, 0, 7, 0, 9, 0, 15, 0, 23, 0, 36, 0, 68],
        calyxMat1: [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0],
        commonMat1: [0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 0, 0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 8, 0, 0]
    },
    "4": {
        credits: [0, 10750, 4000, 17250, 8000, 24000, 16000, 37000, 40000, 57500, 80000, 87500, 160000, 165250],
        lightconeXP1: [0, 3, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1],
        lightconeXP2: [0, 1, 0, 2, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0],
        lightconeXP3: [0, 3, 0, 5, 0, 7, 0, 12, 0, 19, 0, 29, 0, 55],
        calyxMat1: [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0],
        commonMat1: [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0]
    },
    "3": {
        credits: [0, 8000, 3000, 13800, 6000, 18000, 12000, 27750, 30000, 43250, 60000, 65750, 120000, 124000],
        lightconeXP1: [0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0],
        lightconeXP2: [0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
        lightconeXP3: [0, 2, 0, 4, 0, 6, 0, 9, 0, 14, 0, 21, 0, 41],
        calyxMat1: [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        calyxMat2: [0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0],
        calyxMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0],
        commonMat1: [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        commonMat2: [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0, 0],
        commonMat3: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 0, 0]
    }
}