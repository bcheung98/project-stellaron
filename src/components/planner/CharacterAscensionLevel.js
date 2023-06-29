import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";
import { CustomSwitch } from "../../helpers/CustomSwitch";

const CharacterAscensionLevel = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts } = props;
    let { name, element, rarity } = props.character;

    let materialArray = AscensionMaterials[rarity.toString()];

    const levels = ["1", "20", "30", "40", "50", "60", "70", "80"];
    const minDistance = 1;
    let maxValue = levels.length;
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

    const GetCost = (start, stop) => {
        let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)));
        return {
            credits: costArray[0],
            bossMat: costArray[1],
            common1: costArray[2],
            common2: costArray[3],
            common3: costArray[4],
            xp1: costArray[5],
            xp2: costArray[6],
            xp3: costArray[7],
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(sliderValue[0], sliderValue[1])])
    })

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

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
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "60px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "60px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharacterCosts: (payload) => dispatch({ type: "UPDATE_CHAR_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(CharacterAscensionLevel);

const AscensionMaterials = {
    "5": [
        [0, 11300, 21800, 28700, 55300, 122300, 212700, 436300],
        [0, 0, 0, 0, 3, 7, 20, 35],
        [0, 0, 5, 10, 0, 0, 0, 0],
        [0, 0, 0, 0, 6, 9, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 9],
        [0, 3, 3, 2, 5, 3, 2, 3],
        [0, 2, 4, 1, 1, 0, 1, 0],
        [0, 5, 8, 10, 19, 41, 66, 138]
    ],
    "4": [
        [0, 11300, 21000, 27100, 52100, 114300, 196700, 404300],
        [0, 0, 0, 0, 2, 5, 15, 28],
        [0, 0, 4, 8, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 7],
        [0, 3, 3, 2, 5, 3, 2, 3],
        [0, 2, 4, 1, 1, 0, 1, 0],
        [0, 5, 8, 10, 19, 41, 66, 138]
    ]
}