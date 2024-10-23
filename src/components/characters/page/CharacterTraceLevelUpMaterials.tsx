// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import MaterialImage from "../../_custom/MaterialImage"
import { formatCommonMats, formatCalyxMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"
import { totalCosts, traceLevelUpMaterialsMain, traceLevelUpMaterialsSmall } from "../../../data/traceLevelUpCosts"

interface CharacterTraceLevelUpMaterialsProps {
    rarity: "5" | "4",
    unlock: string,
    type: "total" | "main" | "small",
    materials: {
        calyxMat: string,
        commonMat: string,
        weeklyBossMat: string
    }
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
        costs = totalCosts[rarity]
    }
    if (type === "main") {
        costs = traceLevelUpMaterialsMain[rarity][unlock]
    }
    if (type === "small") {
        costs = traceLevelUpMaterialsSmall[rarity][unlock]
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