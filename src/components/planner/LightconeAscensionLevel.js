import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../_custom/CustomSlider";

const LightconeAscensionLevel = (props) => {

    const theme = useTheme();

    let { updateLightconeCosts, updateTotalCosts } = props;
    let { name, rarity } = props.lightcone;

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
        let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)));
        return {
            credits: costArray[0],
            calyx1: costArray[1],
            calyx2: costArray[2],
            calyx3: costArray[3],
            common1: costArray[4],
            common2: costArray[5],
            common3: costArray[6],
            lc_xp1: costArray[7],
            lc_xp2: costArray[8],
            lc_xp3: costArray[9],
        }
    }

    React.useEffect(() => {
        updateLightconeCosts([name, GetCost(sliderValue[0], sliderValue[1])])
        updateTotalCosts()
    })

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
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, mr: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} disableSwap />
                <Typography variant="body1" sx={{ color: `${theme.text.color}`, ml: "25px", width: "70px", fontWeight: "bold" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateLightconeCosts: (payload) => dispatch({ type: "UPDATE_LIGHTCONE_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(LightconeAscensionLevel);

const AscensionMaterials = {
    // Level [1, 20, 20+, 30, 30+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80] (14)
    /*
        Credits
        T1 Calyx Material
        T2 Calyx Material
        T3 Calyx Material
        T1 Common Material
        T2 Common Material
        T3 Common Material
        T1 Character EXP Material
        T2 Character EXP Material
        T3 Character EXP Material
    */
    "5": [
        [0, 13250, 5000, 21500, 10000, 29750, 20000, 46250, 50000, 71750, 100000, 109250, 200000, 206750],
        [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 0, 0],
        [0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 8, 0, 12, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 8, 0, 0],
        [0, 1, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3],
        [0, 1, 0, 0, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2],
        [0, 4, 0, 7, 0, 9, 0, 15, 0, 23, 0, 36, 0, 68]
    ],
    "4": [
        [0, 10750, 4000, 17250, 8000, 24000, 16000, 37000, 40000, 57500, 80000, 87500, 160000, 165250],
        [0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0],
        [0, 0, 5, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 7, 0, 0],
        [0, 3, 0, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 1],
        [0, 1, 0, 2, 0, 3, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 3, 0, 5, 0, 7, 0, 12, 0, 19, 0, 29, 0, 55]
    ],
    "3": [
        [0, 8000, 3000, 13800, 6000, 18000, 12000, 27750, 30000, 43250, 60000, 65750, 120000, 124000],
        [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0],
        [0, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 5, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0],
        [0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 1],
        [0, 2, 0, 4, 0, 6, 0, 9, 0, 14, 0, 21, 0, 41]
    ]
}