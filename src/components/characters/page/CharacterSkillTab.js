import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box } from "@mui/material";
import { CustomSlider } from "../../../helpers/CustomSlider";
import CharacterSkillLevelUp from "./CharacterSkillLevelUp";

const CharacterSkillTab = (props) => {

    const theme = useTheme();

    let key = props.skillKey;
    let skills = props.skills;
    let scaling = skills[key].scaling;

    let maxValue;
    if (key === "attack") { maxValue = 7 } else { maxValue = 12 }

    const [sliderValue, setSliderValue] = React.useState(1);
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    // Dynamically changes the values of the skill attributes
    let targets = document.getElementsByClassName("text-value");
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index];
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1]; }
        })
    }

    return (
        <React.Fragment>
            <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "bold" }}>
                <i>{FormatSkillKey(key)}</i>
            </Typography>
            <Typography variant="h4" sx={{ color: `${theme.text.color}`, mb: "5px" }}>
                <b>{skills[key].name}</b>
            </Typography>
            <Typography variant="body1" sx={{ color: `${theme.text.color}` }}>
                {parse(skills[key].description)}
            </Typography>
            {
                key !== "technique" &&
                <React.Fragment>
                    <Box sx={{ display: "inlineFlex", alignItems: "center", width: "30%", mt: "15px" }}>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}`, width: "100px", mt: "-8px" }}>
                            Lv. {sliderValue}
                        </Typography>
                        <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.element} />
                    </Box>
                    <CharacterSkillLevelUp skillKey={key} materials={props.materials} rarity={props.rarity} element={props.element} />
                </React.Fragment>
            }
        </React.Fragment>
    )

}

export default CharacterSkillTab;

const FormatSkillKey = (key) => {
    switch (key) {
        case "attack":
            key = "Basic ATK";
            break;
        case "skill":
            key = "Skill";
            break;
        case "ultimate":
            key = "Ultimate";
            break;
        case "talent":
            key = "Talent";
            break;
        case "technique":
            key = "Technique";
            break;
        default:
            break;
    }
    return key;
}