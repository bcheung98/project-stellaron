import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader } from "@mui/material";
import { CustomSlider } from "../_custom/CustomSlider";
import { CustomSwitch } from "../_custom/CustomSwitch";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterAscensionUltimate = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, element, rarity } = props.character;

    let materialArray = SkillLevelUpMaterials[rarity.toString()];

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

    const GetCost = (start, stop) => {
        if (selected) {
            let costArray = materialArray.map((material, index) => (materialArray[index].slice(start, stop).reduce((a, c) => a + c)));
            return {
                credits: costArray[0],
                calyx1: costArray[1],
                calyx2: costArray[2],
                calyx3: costArray[3],
                common1: costArray[4],
                common2: costArray[5],
                common3: costArray[6],
                weeklyBossMat: costArray[7],
                tracksOfDestiny: costArray[8]
            }
        }
        else {
            return {
                credits: 0,
                common1: 0,
                common2: 0,
                common3: 0,
                calyx1: 0,
                calyx2: 0,
                calyx3: 0,
                weeklyBossMat: 0,
                tracksOfDestiny: 0
            }
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(sliderValue[0], sliderValue[1]), "ultimate"])
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
                width: "350px",
            }}
            style={selected ? { opacity: "1" } : { opacity: "0.35" }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} />
                <CardHeader
                    avatar={
                        <img alt={name} src={(`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_ultimate.png`)} style={{ width: "48px", height: "48px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                    }
                    title={
                        <Typography variant="h6" sx={{ color: `${theme.text.color}` }}>
                            Ultimate
                        </Typography>
                    }
                    sx={{ ml: "-5px" }}
                />
            </Box>
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

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharacterCosts: (payload) => dispatch({ type: "UPDATE_CHAR_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(CharacterAscensionUltimate);

const SkillLevelUpMaterials = {
    // Level [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (10)
    /*
        Credits
        T1 Calyx Material
        T2 Calyx Material
        T3 Calyx Material
        T1 Common Material
        T2 Common Material
        T3 Common Material
        Weekly Boss Material
        Tracks of Destiny
    */
    "5": [
        [0, 2500, 5000, 10000, 20000, 30000, 45000, 80000, 160000, 300000],
        [0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 3, 5, 7, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 5, 8, 14],
        [0, 3, 6, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 3, 4, 6, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 4, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    ]
    ,
    "4": [
        [0, 2000, 4000, 8000, 16000, 24000, 36000, 64000, 128000, 240000],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 4, 6, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 4, 6, 11],
        [0, 2, 4, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 3, 5, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 3, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    ]
}