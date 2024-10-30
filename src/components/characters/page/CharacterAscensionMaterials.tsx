// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats } from "../../../helpers/TooltipText"
import { characterLevel } from "../../../data/levelUpCosts"

// Type imports
import { MaterialsData } from "../../../types/MaterialsData"
import { MaterialsMap } from "../../../types/costs"

interface CharacterAscensionMaterialsProps {
    rarity: "5" | "4",
    values: number[],
    materials: MaterialsData
}

function CharacterAscensionMaterials({
    rarity,
    values,
    materials
}: CharacterAscensionMaterialsProps) {

    let [start, stop] = values
    let { commonMat, bossMat } = materials

    let materialArray = characterLevel[rarity]

    let costs = Object.keys(materialArray).map((material) => (materialArray[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c)) as number)

    let costData = [
        { name: "Credits", rarity: "3", img: "Credit" },
        { name: bossMat, rarity: "4", img: `boss_mats/${bossMat?.split(" ").join("_")}` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "2", img: `common_mats/${commonMat?.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "3", img: `common_mats/${commonMat?.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "4", img: `common_mats/${commonMat?.split(" ").join("_")}3` }
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

export default CharacterAscensionMaterials