import React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { CustomSlider } from "../../_custom/CustomSlider";
import CharacterAscensionMaterials from "./CharacterAscensionMaterials";

const CharacterAscension = (props) => {

    const theme = useTheme();

    const levels = ["20", "30", "40", "50", "60", "70", "80"];

    const minDistance = 1;
    let maxValue = 7;
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
        <React.Fragment>
            <CharacterAscensionMaterials materials={props.character.materials} rarity={props.character.rarity} values={sliderValue} />
            <Box sx={{ display: "flex", alignItems: "center", width: "50%", mt: "15px", ml: "20px" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: `${theme.text.color}`, width: "180px", mr: "15px" }}>
                    Lv. {levels[sliderValue[0] - 1]} → Lv. {levels[sliderValue[1] - 1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.character.element} disableSwap />
            </Box>
        </React.Fragment>
    )
}

export default CharacterAscension;