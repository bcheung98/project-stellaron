// MUI imports
import Grid from "@mui/material/Grid2"

// Component imports
import MaterialImage from "../../_custom/MaterialImage"

// Helper imports
import { formatCommonMats, formatCalyxMats } from "../../../helpers/TooltipText"
import { lightconeLevel } from "../../../data/levelUpCosts"

// Type imports
import { MaterialsData } from "../../../types/MaterialsData"
import { MaterialsMap } from "../../../types/costs"

interface LightconeAscensionMaterialsProps {
    rarity: "5" | "4" | "3",
    values: number[],
    materials: MaterialsData
}

function LightconeAscensionMaterials({
    rarity,
    values,
    materials
}: LightconeAscensionMaterialsProps) {

    let [start, stop] = values
    let { calyxMat, commonMat } = materials

    let materialArray = lightconeLevel[rarity]

    let costs = Object.keys(materialArray).map((material) => (materialArray[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c)) as number)

    let costData = [
        { name: "Credits", rarity: "3", img: "Credit" },
        { name: formatCalyxMats(`${calyxMat}1`), rarity: "2", img: `calyx_mats/${calyxMat?.split(" ").join("_")}1` },
        { name: formatCalyxMats(`${calyxMat}2`), rarity: "3", img: `calyx_mats/${calyxMat?.split(" ").join("_")}2` },
        { name: formatCalyxMats(`${calyxMat}3`), rarity: "4", img: `calyx_mats/${calyxMat?.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "2", img: `common_mats/${commonMat?.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "3", img: `common_mats/${commonMat?.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "4", img: `common_mats/${commonMat?.split(" ").join("_")}3` }
    ]

    return (
        <Grid container rowSpacing={1} columnSpacing={2}>
            {
                costData.map((material, index) => (
                    costs[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costs[index]} img={material.img} />
                ))
            }
        </Grid>
    )

}

export default LightconeAscensionMaterials;

const Materials = {
    "5": [
        [0, 5000, 10000, 20000, 50000, 100000, 200000],
        [0, 0, 4, 0, 0, 0, 0],
        [0, 0, 0, 4, 8, 0, 0],
        [0, 0, 0, 0, 0, 5, 10],
        [0, 8, 12, 0, 0, 0, 0],
        [0, 0, 0, 8, 12, 0, 0],
        [0, 0, 0, 0, 0, 6, 8]
    ],
    "4": [
        [0, 4000, 8000, 16000, 40000, 80000, 160000],
        [0, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 3, 6, 0, 0],
        [0, 0, 0, 0, 0, 4, 8],
        [0, 5, 10, 0, 0, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 5, 7]
    ],
    "3": [
        [0, 3000, 6000, 12000, 30000, 60000, 120000],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 0, 2, 4, 0, 0],
        [0, 0, 0, 0, 0, 3, 6],
        [0, 4, 8, 0, 0, 0, 0],
        [0, 0, 0, 4, 6, 0, 0],
        [0, 0, 0, 0, 0, 3, 5]
    ]
}