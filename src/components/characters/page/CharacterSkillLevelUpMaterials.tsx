// MUI imports
import Grid from "@mui/material/Grid2"

// Component imports
import MaterialImage from "../../_custom/MaterialImage"

// Helper imports
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"
import { characterSkillLevel } from "../../../data/levelUpCosts"

// Type imports
import { MaterialsMap } from "../../../types/costs"
import { MaterialsData } from "../../../types/MaterialsData"

interface CharacterAscensionMaterialsProps {
    rarity: "5" | "4",
    values: number[],
    skillKey: string
    materials: MaterialsData,
}

function CharacterSkillLevelUpMaterials({
    rarity,
    values,
    skillKey,
    materials
}: CharacterAscensionMaterialsProps) {

    let [start, stop] = values
    let { calyxMat, commonMat, weeklyBossMat } = materials

    let materialArray: MaterialsMap
    if (skillKey === "attack") {
        materialArray = characterSkillLevel[rarity].attack
    }
    else {
        materialArray = characterSkillLevel[rarity].skills
    }

    let costs = Object.keys(materialArray).map((material) => (materialArray[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c)) as number)

    let costData = [
        { name: "Credits", rarity: "3", img: "Credit" },
        { name: formatCalyxMats(`${calyxMat}1`), rarity: "2", img: `calyx_mats/${calyxMat?.split(" ").join("_")}1` },
        { name: formatCalyxMats(`${calyxMat}2`), rarity: "3", img: `calyx_mats/${calyxMat?.split(" ").join("_")}2` },
        { name: formatCalyxMats(`${calyxMat}3`), rarity: "4", img: `calyx_mats/${calyxMat?.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "2", img: `common_mats/${commonMat?.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "3", img: `common_mats/${commonMat?.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "4", img: `common_mats/${commonMat?.split(" ").join("_")}3` },
        { name: formatWeeklyBossMats(weeklyBossMat), rarity: "4", img: `weekly_boss_mats/${weeklyBossMat?.split(" ").join("_")}` },
        { name: "Tracks of Destiny", rarity: "5", img: "Tracks_of_Destiny" }
    ]

    return (
        <Grid container rowSpacing={1} columnSpacing={2}>
            {
                costData.map((material, index) => (
                    costs[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costs[index].toLocaleString()} img={material.img} />
                ))
            }
        </Grid>
    )

}

export default CharacterSkillLevelUpMaterials