// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"

interface CharacterTraceLevelUpMaterialsProps {
    rarity: "5" | "4",
    unlock: string,
    type: "total" | "main" | "small",
    materials: {
        calyxMat: string,
        commonMat: string,
        weeklyBossMat: string,
    },
}

function CharacterTraceLevelUpMaterials({
    rarity,
    unlock,
    type,
    materials
}: CharacterTraceLevelUpMaterialsProps) {


    let { calyxMat, commonMat, weeklyBossMat } = materials

    let costs: { [material: string]: number | string } = {}
    if (type === "total") {
        costs = TotalCosts[rarity]
    }
    if (type === "main") {
        costs = TraceLevelUpMaterialsMain[rarity][unlock]
    }
    if (type === "small") {
        costs = TraceLevelUpMaterialsSmall[rarity][unlock]
    }
    let costData = Object.keys(costs).map((key: string) => {
        let name, rarity, img
        let keyNum = key.slice(-1)
        if (key === "credits") {
            name = "Credits"
            rarity = 3
            img = "Credit"
        }
        if (key.slice(0, -1) === "calyx") {
            name = formatCalyxMats(`${calyxMat}${keyNum}`)
            rarity = Number(keyNum) + 1
            img = `calyx_mats/${calyxMat.split(" ").join("_")}${keyNum}`
        }
        if (key.slice(0, -1) === "common") {
            name = formatCommonMats(`${commonMat}${keyNum}`)
            rarity = Number(keyNum) + 1
            img = `common_mats/${commonMat.split(" ").join("_")}${keyNum}`
        }
        if (key === "weeklyBossMat") {
            name = formatWeeklyBossMats(weeklyBossMat)
            rarity = 4
            img = `weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}`
        }
        if (key === "tracksOfDestiny") {
            name = "Tracks of Destiny"
            rarity = 5
            img = "Tracks_of_Destiny"
        }
        return { name: name, rarity: rarity, cost: costs[key].toLocaleString(), img: img }
    })

    return (
        <Grid container rowSpacing={1} columnSpacing={2}>
            {
                costData.map((material, index) => (
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={material.cost} img={material.img} size={type === "total" ? "72px" : "64px"} />
                ))
            }
        </Grid>
    )

}

export default CharacterTraceLevelUpMaterials

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

const TotalCosts: TotalCostObject = {
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

const TraceLevelUpMaterialsMain: TraceCostObject = {
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

const TraceLevelUpMaterialsSmall: TraceCostObject = {
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