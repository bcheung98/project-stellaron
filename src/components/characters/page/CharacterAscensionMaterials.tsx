// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats } from "../../../helpers/TooltipText"


interface CharacterAscensionMaterialsProps {
    rarity: "5" | "4",
    values: number[],
    materials: {
        commonMat: string,
        bossMat: string,
    }
}

function CharacterAscensionMaterials({
    rarity,
    values,
    materials
}: CharacterAscensionMaterialsProps) {

    let [start, stop] = values
    let { commonMat, bossMat } = materials

    let materialArray = Materials[rarity]

    let costs = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c).toLocaleString()))

    let costData = [
        { name: "Credits", rarity: "3", img: "Credit" },
        { name: bossMat, rarity: "4", img: `boss_mats/${bossMat.split(" ").join("_")}` },
        { name: formatCommonMats(`${commonMat}1`), rarity: "2", img: `common_mats/${commonMat.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: "3", img: `common_mats/${commonMat.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: "4", img: `common_mats/${commonMat.split(" ").join("_")}3` }
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

export default CharacterAscensionMaterials

const Materials = {
    "5": [
        [0, 4000, 8000, 16000, 40000, 80000, 160000],
        [0, 0, 0, 3, 7, 20, 35],
        [0, 5, 10, 0, 0, 0, 0],
        [0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 6, 9]
    ],
    "4": [
        [0, 3200, 6400, 12800, 32000, 64000, 128000],
        [0, 0, 0, 2, 5, 15, 28],
        [0, 4, 8, 0, 0, 0, 0],
        [0, 0, 0, 5, 8, 0, 0],
        [0, 0, 0, 0, 0, 5, 7]
    ]
}