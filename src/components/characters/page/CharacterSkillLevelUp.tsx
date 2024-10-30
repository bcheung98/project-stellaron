import React from "react"

// Component imports
import CharacterSkillLevelUpMaterials from "./CharacterSkillLevelUpMaterials"
import { Accordion, AccordionDetails, AccordionSummary } from "../../_custom/CustomAccordion"
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, Typography, Box } from "@mui/material"

// Type imports
import { MaterialsData } from "../../../types/MaterialsData"

interface CharacterSkillLevelUpProps {
    materials: MaterialsData,
    rarity: number,
    element: string,
    skillKey: string
}

function CharacterSkillLevelUp({
    materials,
    rarity,
    element,
    skillKey
}: CharacterSkillLevelUpProps) {

    const theme = useTheme()

    let maxValue: number
    if (skillKey === "attack") { maxValue = 6 } else { maxValue = 10 }

    const minDistance = 1
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
        <Accordion sx={{ ml: "-15px" }}>
            <AccordionSummary>
                <Typography sx={{ color: `${theme.text.color}`, fontSize: "20px" }}>
                    Level Up Cost
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{ ml: "10px" }}>
                    <CharacterSkillLevelUpMaterials skillKey={skillKey} materials={materials} rarity={rarity.toString() as "5" | "4"} values={sliderValue} />
                    <Box sx={{ display: "flex", alignItems: "center", width: "40%", flexWrap: "wrap", mt: "10px" }}>
                        <Typography sx={{ color: theme.text.color, fontSize: "16px", minWidth: "125px", mb: "10px" }}>
                            Lv. {sliderValue[0]} → Lv. {sliderValue[1]}
                        </Typography>
                        <CustomSlider
                            value={sliderValue}
                            step={1}
                            min={1}
                            max={maxValue}
                            onChange={handleSliderChange}
                            element={element}
                            disableSwap
                            sx={{ minWidth: "200px", ml: "10px" }}
                        />
                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
    )

}

export default CharacterSkillLevelUp