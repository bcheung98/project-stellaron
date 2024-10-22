import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { CustomSlider } from "../../_custom/CustomSlider";
import { Accordion, AccordionDetails, AccordionSummary } from "../../_custom/CustomAccordion";
import CharacterSkillLevelUpMaterials from "./CharacterSkillLevelUpMaterials";

const CharacterSkillLevelUp = (props) => {

    const theme = useTheme();

    let key = props.skillKey;
    let maxValue;
    if (key === "attack") { maxValue = 6 } else { maxValue = 10 }

    const minDistance = 1;
    const [sliderValue, setSliderValue] = React.useState([1, maxValue]);
    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance);
                setSliderValue([clamped, clamped + minDistance]);
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1);
                setSliderValue([clamped - minDistance, clamped]);
            }
        }
        else {
            setSliderValue(newValue);
        }
    }

    return (
        <Accordion sx={{ ml: "-15px" }}>
            <AccordionSummary>
                <Typography sx={{ color: `${theme.text.color}` }} variant="h6">
                    Level Up Cost
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <CharacterSkillLevelUpMaterials skillKey={key} materials={props.materials} rarity={props.rarity} values={sliderValue} />
                <Box sx={{ display: "flex", alignItems: "center", width: "30%", mt: "15px", ml: "20px" }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: `${theme.text.color}`, width: "150px", mr: "15px" }}>
                        Lv. {sliderValue[0]} → Lv. {sliderValue[1]}
                    </Typography>
                    <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.element} disableSwap />
                </Box>
            </AccordionDetails>
        </Accordion>
    )

}

export default CharacterSkillLevelUp;