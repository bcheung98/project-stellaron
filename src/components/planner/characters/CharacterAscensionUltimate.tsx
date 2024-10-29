import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, CardHeader } from "@mui/material"

// Helper imports
import { CustomSlider } from "../../_custom/CustomSlider"
import { CustomSwitch } from "../../_custom/CustomSwitch"
import { updateCharacterCosts, updateTotalCosts } from "../../../redux/reducers/AscensionPlannerReducer"
import { characterSkillLevel } from "../../../data/levelUpCosts"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"
import { CharacterCostObject, CharacterSkill, MaterialsMap, PayloadCostObject } from "../../../types/costs"

function CharacterAscensionUltimate({ character }: { character: CharacterCostObject }) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("sm"))

    const dispatch = useDispatch()

    let { name, element, rarity } = character

    let materialCosts = characterSkillLevel[rarity.toString() as keyof CharacterSkill].skills

    const minDistance = 1
    let maxValue = 10
    const levels = [...Array(maxValue).keys()].map((i) => i + 1)
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
            let [credits, calyx1, calyx2, calyx3, common1, common2, common3, weeklyBossMat, tracksOfDestiny] = Object.keys(materialCosts).map((material) => materialCosts[material as keyof MaterialsMap]?.slice(start, stop).reduce((a, c) => a + c))
            return {
                credits: credits,
                weeklyBossMat: {
                    weeklyBossMat: weeklyBossMat
                },
                tracksOfDestiny: tracksOfDestiny,
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
        else {
            return {
                credits: 0,
                weeklyBossMat: {
                    weeklyBossMat: 0
                },
                tracksOfDestiny: 0,
                calyxMat: {
                    calyxMat1: 0,
                    calyxMat2: 0,
                    calyxMat3: 0
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
        dispatch(updateCharacterCosts({ name: name, type: "ultimate", costs: GetCost(sliderValue) }))
        dispatch(updateTotalCosts())
    })

    return (
        <Box sx={{ opacity: selected ? 1 : 0.35 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: "-10px" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} size="small" sx={{ ml: "-5px" }} />
                <CardHeader
                    avatar={
                        <img alt={name} src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_ultimate.png`} style={{ width: matches ? "32px" : "40px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                    }
                    title={
                        <Typography sx={{ fontSize: { xs: "14px", sm: "16px" }, color: `${theme.text.color}` }}>
                            Ultimate
                        </Typography>
                    }
                    sx={{ ml: "-5px" }}
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography sx={{ fontSize: { xs: "12px", sm: "16px" }, color: `${theme.text.color}`, mr: { xs: 0, sm: "11px" }, width: "90px" }}>
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

export default CharacterAscensionUltimate