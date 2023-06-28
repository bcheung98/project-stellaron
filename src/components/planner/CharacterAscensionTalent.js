import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterAscensionTalent = (props) => {

    const theme = useTheme();

    let { name, element } = props.character;

    const minDistance = 1;
    let maxValue = 10;
    const levels = [...Array(maxValue).keys()].map((i) => i + 1);
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

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <Box
            sx={{
                mb: "15px",
                mx: "15px",
                width: "350px",
            }}
            style={selected ? { opacity: "1" } : { opacity: "0.35" }}
        >
            <CardHeader
                avatar={
                    <img alt={name} src={(`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_talent.webp`)} style={{ width: "48px", height: "48px", border: `1px solid ${theme.border.color}`, borderRadius: "48px", cursor: "pointer" }} onError={ErrorLoadingImage} onClick={handleSelect} />
                }
                title={
                    <Typography variant="h6" sx={{ color: `${theme.text.color}` }}>
                        Talent
                    </Typography>
                }
                sx={{ ml: "-5px" }}
            />
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "80px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "80px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

export default CharacterAscensionTalent;