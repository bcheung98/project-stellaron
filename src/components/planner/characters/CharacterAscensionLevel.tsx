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
        <Box
            sx={{
                mb: "15px",
                mx: "15px",
            }}
            style={selected ? { opacity: "1" } : { opacity: "0.35" }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} />
                <Typography variant="h6" sx={{ color: `${theme.text.color}`, fontWeight: "bold", ml: "15px" }}>
                    Level
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default CharacterAscensionLevel