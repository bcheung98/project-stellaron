import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material"

// Helper imports
import { CustomSlider } from "../../_custom/CustomSlider"
import { CustomSwitch } from "../../_custom/CustomSwitch"
import { updateCharacterCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"
import { characterLevelWithXP } from "../../../data/levelUpCosts"
import { CharacterCostObject, CharacterLevel, MaterialsMap, PayloadCostObject } from "../../../types/costs"

function CharacterAscensionLevel({ character }: { character: CharacterCostObject }) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("sm"))

    const dispatch = useDispatch()

    let { name, element, rarity } = character

    let materialCosts = characterLevelWithXP[rarity.toString() as keyof CharacterLevel]

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

    const [selected, setSelected] = React.useState(true)
    const handleSelect = () => {
        setSelected(!selected)
    }

    const GetCost = ([start, stop]: number[]) => {
        if (selected) {
            let [credits, characterXP1, characterXP2, characterXP3, bossMat, common1, common2, common3] = Object.keys(materialCosts).map((material) => materialCosts[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c))
            return {
                credits: credits,
                characterXP: {
                    characterXP1: characterXP1,
                    characterXP2: characterXP2,
                    characterXP3: characterXP3
                },
                bossMat: {
                    bossMat: bossMat
                },
                commonMat: {
                    commonMat1: common1,
                    commonMat2: common2,
                    commonMat3: common3
                }
            } as PayloadCostObject
        }
        else {
            return {
                credits: 0,
                characterXP: {
                    characterXP1: 0,
                    characterXP2: 0,
                    characterXP3: 0
                },
                bossMat: {
                    bossMat: 0
                },
                commonMat: {
                    commonMat1: 0,
                    commonMat2: 0,
                    commonMat3: 0
                }
            } as PayloadCostObject
        }
    }

    React.useEffect(() => {
        dispatch(updateCharacterCosts({ name: name, type: "level", costs: GetCost(sliderValue) }))
        dispatch(updateTotalCosts())
    })

    return (
        <Box sx={{ width: "100%", opacity: selected ? 1 : 0.35 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "-10px", pb: "16px" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} size="small" sx={{ ml: "-5px" }} />
                <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: `${theme.text.color}`, ml: "15px" }}>
                    Level
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "16px" }, color: `${theme.text.color}`, width: "90px" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap size={matches ? "small" : "medium"} />
                <Typography sx={{ fontSize: { xs: "12px", sm: "16px" }, color: `${theme.text.color}`, ml: "25px", width: "90px" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default CharacterAscensionLevel