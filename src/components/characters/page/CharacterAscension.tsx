import React from "react"

// Component imports
import CharacterAscensionMaterials from "./CharacterAscensionMaterials"
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, Typography, Box } from "@mui/material"

// Type imports
import { CharacterProps } from "../../../types/character"

function CharacterAscension({ character }: CharacterProps) {

    const theme = useTheme()

    const levels = ["20", "30", "40", "50", "60", "70", "80"]

    const minDistance = 1
    let maxValue = 7
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

    return (
        <React.Fragment>
            <CharacterAscensionMaterials materials={{ commonMat: character.materials.commonMat as string, bossMat: character.materials.bossMat as string }} rarity={character.rarity.toString() as "5" | "4"} values={sliderValue} />
            <Box sx={{ display: { xs: "block", md: "flex" }, alignItems: "center", width: "50%", mt: "10px" }}>
                <Typography sx={{ color: theme.text.color, fontSize: "16px", minWidth: "150px" }}>
                    Lv. {levels[sliderValue[0] - 1]} → Lv. {levels[sliderValue[1] - 1]}
                </Typography>
                <CustomSlider
                    value={sliderValue}
                    step={1}
                    min={1}
                    max={maxValue}
                    onChange={handleSliderChange}
                    element={character.element}
                    disableSwap
                    sx={{ minWidth: "200px", ml: "10px" }}
                />
            </Box>
        </React.Fragment>
    )
}

export default CharacterAscension