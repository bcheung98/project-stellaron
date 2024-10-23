interface TotalCostObject {
    [rarity: string]: {
        [material: string]: number | string
    }
}

interface TraceCostObject {
    [rarity: string]: {
        [unlock: string]: {
            [material: string]: number | string
        }
    }
}

export const totalCosts: TotalCostObject = {
    "5": {
        credits: 802500,
        calyx1: 6,
        calyx2: 16,
        calyx3: 38,
        common1: 8,
        common2: 10,
        common3: 30,
        weeklyBossMat: 3,
        tracksOfDestiny: 2
    },
    "4": {
        credits: 642000,
        calyx1: 4,
        calyx2: 12,
        calyx3: 28,
        common1: 6,
        common2: 7,
        common3: 22,
        weeklyBossMat: 3,
        tracksOfDestiny: 2
    }
}

export const traceLevelUpMaterialsMain: TraceCostObject = {
    "5": {
        "A2": {
            credits: 5000,
            calyx1: 3,
            weeklyBossMat: 1
        },
        "A4": {
            credits: 20000,
            calyx2: 5,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        },
        "A6": {
            credits: 160000,
            calyx3: 8,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        }
    },
    "4": {
        "A2": {
            credits: 4000,
            calyx1: 2,
            weeklyBossMat: 1,
        },
        "A4": {
            credits: 16000,
            calyx2: 4,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        },
        "A6": {
            credits: 128000,
            calyx3: 6,
            weeklyBossMat: 1,
            tracksOfDestiny: 1
        }
    }
}

export const traceLevelUpMaterialsSmall: TraceCostObject = {
    "5": {
        "A2": {
            credits: 5000,
            calyx1: 3,
            common1: 6
        },
        "A3": {
            credits: 10000,
            calyx2: 3,
            common2: 3
        },
        "A4": {
            credits: 20000,
            calyx2: 5,
            common2: 4
        },
        "A5": {
            credits: 45000,
            calyx3: 3,
            common3: 3
        },
        "A6": {
            credits: 160000,
            calyx3: 8,
            common3: 8
        },
        "Lv. 1": {
            credits: 2500,
            common1: 2
        },
        "Lv. 75": {
            credits: 160000,
            calyx3: 8,
            common3: 8
        },
        "Lv. 80": {
            credits: 160000,
            calyx3: 8,
            common3: 8
        }
    },
    "4": {
        "A2": {
            credits: 4000,
            calyx1: 2,
            common1: 4
        },
        "A3": {
            credits: 8000,
            calyx2: 2,
            common2: 2
        },
        "A4": {
            credits: 16000,
            calyx2: 4,
            common2: 3
        },
        "A5": {
            credits: 36000,
            calyx3: 2,
            common3: 2
        },
        "A6": {
            credits: 128000,
            calyx3: 6,
            common3: 6
        },
        "Lv. 1": {
            credits: 2000,
            common1: 2
        },
        "Lv. 75": {
            credits: 128000,
            calyx3: 6,
            common3: 6
        },
        "Lv. 80": {
            credits: 128000,
            calyx3: 6,
            common3: 6
        }
    }
}