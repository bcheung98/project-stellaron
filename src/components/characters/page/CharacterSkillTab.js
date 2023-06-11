import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, Slider } from "@mui/material";

const CharacterSkillTab = (props) => {

    const theme = useTheme();

    let skills = props.skills;
    let key = props.skillKey;
    let scaling = skills[key].scaling;

    const [sliderValue, setSliderValue] = React.useState(1);
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };
    
    // Dynamically changes the values of the skill attributes
    let targets = document.getElementsByClassName("text-highlight");
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index];
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1]; }
        })
    }

    return (
        <React.Fragment>
            <Typography variant="subtitle1" sx={{ color: `${theme.text.color}`, fontWeight: "450" }}>
                <i>{FormatSkillKey(key)}</i>
            </Typography>
            <Typography variant="h4" sx={{ color: `${theme.text.color}` }}>
                <b>{skills[key].name}</b>
            </Typography>
            {
                skills[key].type !== "———" &&
                <Typography variant="subtitle1" sx={{ color: "#f29e38", fontWeight: "450" }}>
                    {skills[key].type}
                </Typography>
            }
            <Typography variant="body1" sx={{ color: `${theme.text.color}`, mt: "15px" }}>
                {parse(skills[key].description)}
            </Typography>
            <Box >
                {
                    key !== "technique" &&
                    <Box sx={{ display: "inlineFlex", alignItems: "center", width: "30%", mt: "15px" }}>
                        <Typography variant="h6" sx={{ color: `${theme.text.color}`, mr: "35px", mt: "-8px" }}>
                            Lv. {sliderValue}
                        </Typography>
                        {
                            key === "attack" ?
                                <Slider value={sliderValue} step={1} min={1} max={9} onChange={handleSliderChange} />
                                :
                                <Slider value={sliderValue} step={1} min={1} max={15} onChange={handleSliderChange} />
                        }
                    </Box>
                }
            </Box>
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