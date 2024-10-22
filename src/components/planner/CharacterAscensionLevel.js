import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../_custom/CustomSlider";
import { CustomSwitch } from "../_custom/CustomSwitch";

const CharacterAscensionLevel = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, element, rarity } = props.character;

    let materialArray = AscensionMaterials[rarity.toString()];

    const levels = ["1", "20", "20+", "30", "30+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80"];
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
        if (selected) {
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
        else {
            return {
                credits: 0,
                bossMat: 0,
                common1: 0,
                common2: 0,
                common3: 0,
                xp1: 0,
                xp2: 0,
                xp3: 0,
            }
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(sliderValue[0], sliderValue[1]), "level"])
        updateTotalCosts()
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharacterCosts: (payload) => dispatch({ type: "UPDATE_CHAR_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(CharacterAscensionLevel);

const AscensionMaterials = {
    // Level [1, 20, 20+, 30, 30+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80] (14)
    /*
        Credits
        Boss Material
        T1 Common Material
        T2 Common Material
        T3 Common Material
        T1 Character EXP Material
        T2 Character EXP Material
        T3 Character EXP Material
    */
    "5": [
        [0, 11300, 4000, 17800, 8000, 20700, 16000, 39300, 40000, 82300, 80000, 132700, 160000, 276300],
        [0, 0, 0, 0, 0, 0, 3, 0, 7, 0, 20, 0, 35, 0],
        [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0],
        [0, 3, 0, 3, 0, 2, 0, 5, 0, 3, 0, 2, 0, 3, 0],
        [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0]
    ],
    "4": [
        [0, 11300, 3200, 17800, 6400, 20700, 12800, 39300, 32000, 82300, 64000, 132700, 128000, 276300],
        [0, 0, 0, 0, 0, 0, 2, 0, 5, 0, 15, 0, 28, 0],
        [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 5, 0, 8, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0],
        [0, 3, 0, 3, 0, 2, 0, 5, 0, 3, 0, 2, 0, 3, 0],
        [0, 2, 0, 4, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
        [0, 5, 0, 8, 0, 10, 0, 19, 0, 41, 0, 66, 0, 138, 0]
    ]
}