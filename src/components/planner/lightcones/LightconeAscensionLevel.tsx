import * as React from "react"
import { useDispatch } from "react-redux"

// Component imports
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material"

// Helper imports
import { lightconeLevelWithXP } from "../../../data/levelUpCosts"

// Type imports
import { LightconeCostObject, LightconeLevel, MaterialsMap, PayloadCostObject } from "../../../types/costs"
import { updateLightconeCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"

function LightconeAscensionLevel({ lightcone }: { lightcone: LightconeCostObject }) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("sm"))

    const dispatch = useDispatch()

    let { name, rarity } = lightcone

    let materialCosts = lightconeLevelWithXP[rarity.toString() as keyof LightconeLevel]

    const levels = ["1", "20", "20+", "30", "30+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80"]
    const minDistance = 1
    let maxValue = levels.length
    const [sliderValue, setSliderValue] = React.useState([1, maxValue])
    const handleSliderChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance)
                setSliderValue([clamped, clamped + minDistance])
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1)
                setSliderValue([clamped - minDistance, clamped])
            }
        }
        else {
            setSliderValue(newValue)
        }
    }

    const GetCost = ([start, stop]: number[]) => {
        let [credits, lightconeXP1, lightconeXP2, lightconeXP3, calyx1, calyx2, calyx3, common1, common2, common3] = Object.keys(materialCosts).map((material) => materialCosts[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c))
        return {
            credits: credits,
            lightconeXP: {
                lightconeXP1: lightconeXP1,
                lightconeXP2: lightconeXP2,
                lightconeXP3: lightconeXP3
            },
            calyxMat: {
                calyxMat1: calyx1,
                calyxMat2: calyx2,
                calyxMat3: calyx3
            },
            commonMat: {
                commonMat1: common1,
                commonMat2: common2,
                commonMat3: common3
            }
        } as PayloadCostObject

    }

    React.useEffect(() => {
        dispatch(updateLightconeCosts({ name: name, type: "level", costs: GetCost(sliderValue) }))
        dispatch(updateTotalCosts())
    })

    return (
        <Box
            sx={{
                mb: "15px",
                mx: "15px",
            }}
        >
            <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", ml: "15px" }}>
                Level
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default LightconeAscensionLevel