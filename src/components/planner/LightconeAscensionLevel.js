import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";

const LightconeAscensionLevel = (props) => {

    const theme = useTheme();

    const levels = ["1", "20", "30", "40", "50", "60", "70", "80"];

    const minDistance = 1;
    let maxValue = 8;
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
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "60px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "60px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default LightconeAscensionLevel;