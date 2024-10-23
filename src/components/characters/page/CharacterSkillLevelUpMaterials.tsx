// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"

interface CharacterAscensionMaterialsProps {
    rarity: "5" | "4",
    values: number[],
    skillKey: string
    materials: {
        calyxMat: string,
        commonMat: string,
        weeklyBossMat: string,
    },
}

function CharacterSkillLevelUpMaterials({
    rarity,
    values,
    skillKey,
    materials
}: CharacterAscensionMaterialsProps) {

    let [start, stop] = values
    let { calyxMat, commonMat, weeklyBossMat } = materials

    let materialArray: number[][] = []
    if (skillKey === "attack") {
        materialArray = Materials[rarity]["BasicATK"]
    }
    else {
        materialArray = Materials[rarity]["Skills"]
    }

    let costs = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    let costData = [
        { name: "Credits", rarity: "3", img: "Credit" },
        { name: formatCalyxMats(`${calyxMat}1`), rarity: "2", img: `calyx_mats/${calyxMat.split(" ").join("_")}1` },
        { name: formatCalyxMats(`${calyxMat}2`), rarity: "3", img: `calyx_mats/${calyxMat.split(" ").join("_")}2` },
        { name: formatCalyxMats(`${calyxMat}3`), rarity: "4", img: `calyx_mats/${calyxMat.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "2", img: `common_mats/${commonMat.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "3", img: `common_mats/${commonMat.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "4", img: `common_mats/${commonMat.split(" ").join("_")}3` },
        { name: formatWeeklyBossMats(weeklyBossMat), rarity: "4", img: `weekly_boss_mats/${weeklyBossMat.split(" ").join("_")}` },
        { name: "Tracks of Destiny", rarity: "5", img: "Tracks_of_Destiny" }
    ]

    return (
        <Grid container rowSpacing={1} columnSpacing={2}>
            {
                costData.map((material, index) => (
                    costs[index] !== "0" &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costs[index]} img={material.img} />
                ))
            }
        </Grid>
    )

}

export default CharacterSkillLevelUpMaterials

const Materials = {
    "5": {
        "BasicATK": [
            [0, 5000, 10000, 20000, 45000, 160000],
            [0, 3, 0, 0, 0, 0],
            [0, 0, 3, 5, 0, 0],
            [0, 0, 0, 0, 3, 8],
            [0, 6, 0, 0, 0, 0],
            [0, 0, 3, 4, 0, 0],
            [0, 0, 0, 0, 3, 4],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "Skills": [
            [0, 2500, 5000, 10000, 20000, 30000, 45000, 80000, 160000, 300000],
            [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 5, 7, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 5, 8, 14],
            [0, 3, 6, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 3, 4, 6, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 3, 4, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ]
    },
    "4": {
        "BasicATK": [
            [0, 4000, 8000, 16000, 36000, 128000],
            [0, 2, 0, 0, 0, 0],
            [0, 0, 2, 4, 0, 0],
            [0, 0, 0, 0, 2, 6],
            [0, 4, 0, 0, 0, 0],
            [0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 2, 3],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ],
        "Skills": [
            [0, 2000, 4000, 8000, 16000, 24000, 36000, 64000, 128000, 240000],
            [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 4, 6, 11],
            [0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 2, 3, 5, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 3, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        ]
    }
}