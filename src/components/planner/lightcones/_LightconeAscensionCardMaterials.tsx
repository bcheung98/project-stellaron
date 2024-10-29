import { useSelector } from "react-redux"

// Component imports
import MaterialImage from "../../_custom/MaterialImage"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { formatCalyxMats, formatCommonMats } from "../../../helpers/TooltipText"
import { LightconeCost, LightconeCostObject } from "../../../types/costs"

// Type imports
import { RootState } from "../../../redux/store"

function LightconeAscensionCardMaterials({ lightcone }: { lightcone: LightconeCostObject }) {

    const lightconeCosts = useSelector((state: RootState) => state.ascensionPlanner.lightconeCosts)

    let { name } = lightcone
    let { calyxMat, commonMat } = lightcone.materials
    let costs = lightconeCosts.find((lc: LightconeCostObject) => lc.name === name)?.costs as LightconeCost

    let costArray: number[] = []
    Object.entries(costs).forEach(([key, value]) => {
        if (key === "credits") {
            costArray.push(value)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                costArray.push((v as number))
            })
        }
    })

    let costData = [
        { name: "Credits", rarity: 3, img: "Credit" },
        { name: "Sparse Aether", rarity: 2, img: "xp_mats/lightconeXP1" },
        { name: "Condensed Aether", rarity: 3, img: "xp_mats/lightconeXP2" },
        { name: "Refined Aether", rarity: 4, img: "xp_mats/lightconeXP3" },
        { name: formatCalyxMats(`${calyxMat}1`), rarity: 2, img: `calyx_mats/${calyxMat?.split(" ").join("_")}1` },
        { name: formatCalyxMats(`${calyxMat}2`), rarity: 3, img: `calyx_mats/${calyxMat?.split(" ").join("_")}2` },
        { name: formatCalyxMats(`${calyxMat}3`), rarity: 4, img: `calyx_mats/${calyxMat?.split(" ").join("_")}3` },
        { name: formatCommonMats(`${commonMat}1`), rarity: 2, img: `common_mats/${commonMat?.split(" ").join("_")}1` },
        { name: formatCommonMats(`${commonMat}2`), rarity: 3, img: `common_mats/${commonMat?.split(" ").join("_")}2` },
        { name: formatCommonMats(`${commonMat}3`), rarity: 4, img: `common_mats/${commonMat?.split(" ").join("_")}3` },
    ]

    return (
        <Grid container spacing={2} sx={{ my: "15px" }}>
            {
                costData.map((material, index) => (
                    costArray[index] !== 0 &&
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costArray[index].toLocaleString()} img={material.img} size="64px" />
                ))
            }
        </Grid>
    )

}

export default LightconeAscensionCardMaterials