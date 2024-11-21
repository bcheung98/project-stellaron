import * as React from "react"
import parse, { Element, domToReact, HTMLReactParserOptions } from "html-react-parser"

// Component imports
import CharacterSkillLevelUp from "./CharacterSkillLevelUp"
import { CustomSlider } from "../../_custom/CustomSlider"

// MUI imports
import { useTheme, SxProps, Typography, Box, Dialog, Button, TableContainer, Table, TableBody, TableRow, TableCell, useMediaQuery } from "@mui/material"

// Helper imports
import Keywords from "../../../data/Keywords"

// Type imports
import { Character, CharacterSkills, CharacterSkillsKeys } from "../../../types/character"
import { CharacterMaterials } from "../../../types/materials"

function CharacterSkillTab(props: {
    skillKey: string,
    skills: CharacterSkills,
    keywords: Character["keywords"],
    element: string,
    materials: CharacterMaterials,
    rarity: number
}) {

    const theme = useTheme()
    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"))

    const key = props.skillKey as CharacterSkillsKeys
    const skills = props.skills

    const maxValue = key === "attack" ? 7 : 12
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
    const scaling = skills[key].map((skill) => "scaling" in skill ? skill.scaling : []).flat()
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

    const tableRowStyle: SxProps = {
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }

    const tableCellStyle: SxProps = {
        color: theme.text.color,
        border: { xs: "auto", sm: "none" },
        borderColor: theme.border.color,
        px: "5px",
        py: "2.5px"
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: "16px" }}>
                <i>{formatSkillKey(key)}</i>
            </Typography>
            {
                skills[key].map((skill, index) => {
                    const rows = []
                    if ("cost" in skill) {
                        const skillCost = getSkillCost(skill.cost.type, skill.cost.value, matches_sm_up)
                        rows.push({
                            key: skillCost.cost,
                            value: skillCost.value
                        })
                    }
                    skill.regen &&
                        rows.push({
                            key:
                                <span style={{ color: `rgb(225, 225, 225)` }}>
                                    {`Energy Generation`}
                                </span>,
                            value:
                                <span style={{ color: `rgb(220, 196, 145)` }}>
                                    {skill.regen}
                                </span>
                        })
                    skill.break &&
                        rows.push({
                            key:
                                <span style={{ color: `rgb(225, 225, 225)` }}>
                                    {`Toughness Reduction`}
                                </span>,
                            value:
                                Object.entries(skill.break).map(([key, value], index) =>
                                    <React.Fragment key={index}>
                                        <span style={{ color: `rgb(225, 225, 225)` }}>
                                            {`${key}: `}
                                        </span>
                                        <span style={{ color: `rgb(220, 196, 145)` }}>
                                            {value}
                                        </span>
                                        {index !== Object.entries(skill.break as {}).length - 1 && <span style={{ margin: "0 5px 0 5px" }}>/</span>}
                                    </React.Fragment>
                                )
                        })
                    return (
                        <Box key={index} sx={{ mb: "20px" }}>
                            <Box sx={{ mb: "10px" }}>
                                <Typography sx={{ fontSize: { xs: "24px", sm: "28px" } }}>
                                    {skill.name}
                                </Typography>
                                {
                                    skill.tag &&
                                    <Typography sx={{ fontSize: { xs: "13.5px", sm: "16px" }, color: `rgb(242, 158, 56)` }}>
                                        [{skill.tag}]
                                    </Typography>
                                }
                            </Box>
                            <TableContainer sx={[{ minWidth: { xs: "100%", md: "300px" }, width: { xs: "100%", md: "60%", lg: "30%" } }, rows.length > 0 && { backgroundColor: theme.table.body.hover, borderRadius: "5px", mb: "10px" }]}>
                                <Table size="small">
                                    <TableBody>
                                        {
                                            rows.map((row, index) => (
                                                <TableRow key={index} sx={tableRowStyle}>
                                                    <TableCell sx={tableCellStyle}>
                                                        <Typography sx={{ fontSize: { xs: "13.5px", sm: "14.5px" } }}>{row.key}</Typography>
                                                    </TableCell>
                                                    <TableCell align="right" sx={tableCellStyle}>
                                                        <Typography sx={{ fontSize: { xs: "13.5px", sm: "14.5px" } }}>{row.value}</Typography>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ fontSize: { xs: "13.5px", sm: "16px" } }}>
                                {parse(skill.description, options)}
                            </Typography>
                        </Box>
                    )
                })
            }
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
        </Box >
    )

}

export default CharacterSkillTab

function getSkillCost(type: string, cost: number, matches: boolean) {

    const costType = type === "SP" || type === "Energy" ? `${type}` : "Ability"
    let costValue
    if (type === "SP") {
        costValue =
            [...Array(cost).keys()].map((index) =>
                <img key={index} src={`${process.env.REACT_APP_URL}/icons/SkillPoint.png`} alt="SP" style={{ height: matches ? "18px" : "14px", marginBottom: matches ? "-4px" : "-2px", pointerEvents: "none" }} />
            )
    }
    else if (type === "Energy") {
        costValue =
            <span style={{ color: `rgb(220, 196, 145)` }}>
                {cost}
            </span>
    }
    else {
        costValue =
            <>
                <span style={{ color: `rgb(242, 158, 56)` }}>
                    {cost}
                </span>
                <span style={{ color: `rgb(220, 196, 145)` }}>
                    {` points of ${type}`}
                </span>
            </>
    }

    return {
        cost:
            <span style={{ color: `rgb(225, 225, 225)` }}>
                {`${costType} Cost`}
            </span>,
        value: costValue
    }

}

function formatSkillKey(key: string) {
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