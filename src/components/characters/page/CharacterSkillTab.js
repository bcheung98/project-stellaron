import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, Dialog } from "@mui/material";
import { CustomSlider } from "../../_custom/CustomSlider";
import Keywords from "../../../data/Keywords";
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

    const [open, setOpen] = React.useState(false);
    const [tag, setTag] = React.useState("");
    const handleClickOpen = (e) => {
        setTag(e.target.className.split("-")[1])
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Dynamically changes the values of the skill attributes
    let targets = document.getElementsByClassName("text-value");
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index];
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1]; }
        })
    }

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const { domToReact } = parse;
    const options = {
        replace: ({ attribs, children }) => {
            if (!attribs) {
                return;
            }
            if (attribs.class !== undefined && attribs.class.split("-")[0] === "tooltip") {
                let dataTag = attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `tooltip-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (e) => handleClickOpen(e)
                    },
                    domToReact(children, options)
                )
            }
        }
    }

    let keywordName;
    let keywordDescription;
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name;
        keywordDescription = Keywords[tag].description;
    }
    else if (props.keywords) {
        keywordName = props.keywords.name;
        keywordDescription = props.keywords.description;
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
                {parse(skills[key].description, options)}
            </Typography>
            {
                key !== "technique" &&
                <React.Fragment>
                    <Box sx={{ display: "flex", alignItems: "center", width: "30%", mt: "15px" }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", color: `${theme.text.color}`, width: "100px" }}>
                            Lv. {sliderValue}
                        </Typography>
                        <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={props.element} />
                    </Box>
                    <CharacterSkillLevelUp skillKey={key} materials={props.materials} rarity={props.rarity} element={props.element} />
                </React.Fragment>
            }
            {
                keywordName && keywordDescription &&
                <Dialog
                    open={open}
                    onClose={handleClose}
                    maxWidth={false}
                >
                    <Box
                        sx={{
                            width: "45vw",
                            p: "15px",
                            backgroundColor: `${theme.paper.backgroundColor}`,
                            border: `2px solid ${theme.border.color}`,
                            borderRadius: "5px",
                        }}
                    >
                        <Typography variant="h5" sx={{ color: `${theme.text.color}` }}>
                            {keywordName}
                        </Typography>
                        <hr style={{ border: `.5px solid ${theme.border.color}`, marginTop: "15px", marginBottom: "10px" }} />
                        <Typography variant="body1" sx={{ color: `${theme.text.color}`, mb: "5px" }}>
                            {parse(keywordDescription)}
                        </Typography>
                    </Box>
                </Dialog>
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