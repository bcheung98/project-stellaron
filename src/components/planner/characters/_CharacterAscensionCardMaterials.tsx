import { useSelector } from "react-redux"

// Component imports
import MaterialImage from "../../_custom/MaterialImage"

// MUI imports
import Grid from "@mui/material/Grid2"

// Helper imports
import { formatCalyxMats, formatCommonMats, formatWeeklyBossMats } from "../../../helpers/TooltipText"
import { CharacterCost, CharacterCostObject } from "../../../types/costs"

// Type imports
import { RootState } from "../../../redux/store"
import { reduceCosts } from "../../../redux/reducers/AscensionPlannerReducer"

function CharacterAscensionCardMaterials({ character }: { character: CharacterCostObject }) {

    const characterCosts = useSelector((state: RootState) => state.ascensionPlanner.characterCosts)

    let { name } = character
    let { bossMat, calyxMat, commonMat, weeklyBossMat } = character.materials
    let costs = characterCosts.find((char: CharacterCostObject) => char.name === name)?.costs as CharacterCost

    let costArray: number[] = []
    Object.entries(reduceCosts(costs)).forEach(([key, value]) => {
        if (key === "credits" || key === "tracksOfDestiny") {
            costArray.push(value)
        }
        else {
            Object.entries(value).forEach(([k, v]) => {
                !k.startsWith("lightconeXP") && costArray.push(v as number)
            })
        }
    })

    let costData = [
        { name: "Credits", rarity: 3, img: "Credit" },
        { name: "Travel Encounters", rarity: 2, img: "xp_mats/characterXP1" },
        { name: "Adventure Log", rarity: 3, img: "xp_mats/characterXP2" },
        { name: "Traveler's Guide", rarity: 4, img: "xp_mats/characterXP3" },
        { name: bossMat, rarity: 4, img: `boss_mats/${bossMat?.split(" ").join("_")}` },
        { name: formatWeeklyBossMats(weeklyBossMat), rarity: 4, img: `weekly_boss_mats/${weeklyBossMat?.split(" ").join("_")}` },
        { name: "Tracks of Destiny", rarity: 5, img: "Tracks_of_Destiny" },
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
                    <MaterialImage key={index} name={material.name} rarity={material.rarity} cost={costArray[index].toLocaleString()} img={material.img} />
                ))
            }
        </Grid>
    )
}

export default CharacterAscensionCardMaterials