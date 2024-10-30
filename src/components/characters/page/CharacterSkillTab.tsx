import * as React from "react"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import CharacterSkillLevelUp from "./CharacterSkillLevelUp"
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, Typography, Box, Dialog, Button } from "@mui/material"

// Helper imports
import Keywords from "../../../data/Keywords"

// Type imports
import { MaterialsData } from "../../../types/MaterialsData"
import { CharacterSkillData } from "../../../types/character/CharacterSkillData"

function CharacterSkillTab(props: {
    skillKey: string,
    skills: CharacterSkillData,
    keywords: {
        tag: string,
        name: string,
        description: string
    },
    element: string,
    materials: MaterialsData,
    rarity: number
}) {

    const theme = useTheme()

    let key = props.skillKey
    let skills = props.skills
    let scaling = skills[key as keyof CharacterSkillData].scaling

    let maxValue
    if (key === "attack") { maxValue = 7 } else { maxValue = 12 }

    const [sliderValue, setSliderValue] = React.useState(1)
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number)
    }

    const [open, setOpen] = React.useState(false)
    const [tag, setTag] = React.useState("")
    const handleClickOpen = (event: React.BaseSyntheticEvent) => {
        setTag(event.target.className.split("-")[1])
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // Dynamically changes the values of the skill attributes
    let targets = document.getElementsByClassName("text-value")
    if (scaling !== undefined) {
        scaling.forEach((subScaling: string[], index: number) => {
            let target = targets[index]
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1] }
        })
    }

    // The following code block transforms certain keywords into underlined elements
    // When clicked on, these elements will open up a dialog box showing info about the corresponding keyword
    const options: HTMLReactParserOptions = {
        replace: domNode => {
            const typedDomNode = domNode as Element
            if (!typedDomNode.attribs) {
                return
            }
            if (typedDomNode.attribs.class !== undefined && typedDomNode.attribs.class.split("-")[0].startsWith("tooltip")) {
                let dataTag = typedDomNode.attribs.class.split("-")[1]
                return React.createElement(
                    "u",
                    {
                        className: `${typedDomNode.attribs.class.split("-")[0]}-${dataTag}`,
                        style: { cursor: "pointer" },
                        onClick: (event: React.BaseSyntheticEvent) => { handleClickOpen(event) }
                    },
                    domToReact(typedDomNode.children, options)
                )
            }
        }
    }

    let keywordName
    let keywordDescription
    if (Keywords[tag]) {
        keywordName = Keywords[tag].name
        keywordDescription = Keywords[tag].description
    }
    else if (props.keywords) {
        keywordName = props.keywords.name
        keywordDescription = props.keywords.description
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "16px" }}>
                <i>{FormatSkillKey(key)}</i>
            </Typography>
            <Typography sx={{ fontSize: "34px", mb: "5px" }}>
                <b>{skills[key as keyof CharacterSkillData].name}</b>
            </Typography>
            <Typography sx={{ fontSize: "16px", mb: "15px" }}>
                {parse(skills[key as keyof CharacterSkillData].description as string, options)}
            </Typography>
            {
                key !== "technique" &&
                <React.Fragment>
                    <Box sx={{ display: { xs: "block", sm: "flex" }, alignItems: "center", width: key === "attack" ? "30%" : "40%", mt: "20px", mb: "10px" }}>
                        <Typography sx={{ color: theme.text.color, fontSize: "18px", minWidth: "75px" }}>
                            Lv. {sliderValue}
                        </Typography>
                        <CustomSlider
                            value={sliderValue}
                            step={1}
                            min={1}
                            max={maxValue}
                            onChange={handleSliderChange}
                            element={props.element}
                            sx={{ minWidth: "200px", ml: "10px" }}
                        />
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
                            width: { xs: "80vw", sm: "100%" },
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
                        <Button variant="contained" sx={{ height: "24px", p: 0, backgroundColor: "#d32f2f", mt: "15px" }} onClick={handleClose}>
                            <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "13.5px" }}>Close</Typography>
                        </Button>
                    </Box>
                </Dialog>
            }
        </Box>
    )

}

export default CharacterSkillTab

const FormatSkillKey = (key: string) => {
    switch (key) {
        case "attack":
            key = "Basic ATK"
            break
        case "skill":
            key = "Skill"
            break
        case "ultimate":
            key = "Ultimate"
            break
        case "talent":
            key = "Talent"
            break
        case "technique":
            key = "Technique"
            break
        default:
            break
    }
    return key
}