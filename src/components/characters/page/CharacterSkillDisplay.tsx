import * as React from "react"

// Component imports
import CharacterSkillTab from "./CharacterSkillTab"
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, AppBar, Card } from "@mui/material"

// Helper imports
import { elementalColors } from "../../../helpers/elementalColors"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { CharacterProps } from "../../../types/character"

function CharacterSkillDisplay({ character }: CharacterProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const { name, element, rarity, skills } = character

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    const skillIcon = (index: number) => {
        const selected = index === tabValue
        return {
            width: "48px",
            height: "48px",
            padding: "2px",
            margin: "5px auto 5px auto",
            borderWidth: selected ? "thick" : "2px",
            borderStyle: selected ? "double" : "solid",
            borderColor: selected ? elementalColors(element) : theme.border.color,
            borderRadius: "64px",
            boxShadow: selected ? `0 0 12px 2px ${elementalColors(element)}` : "none",
        } as React.CSSProperties
    }

    return (
        <Card
            sx={{
                color: `${theme.text.color}`,
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                }}
            >
                <Typography
                    sx={{
                        m: 2,
                        color: `${theme.text.color}`,
                        fontSize: "20px"
                    }}
                >
                    Skills
                </Typography>
            </AppBar>
            <Box>
                <StyledTabs
                    variant="scrollable"
                    value={tabValue}
                    onChange={handleTabChange}
                    scrollButtons="auto"
                    allowScrollButtonsMobile={!matches}
                    sx={{
                        height: "100%",
                        "& .MuiTabScrollButton-root": {
                            color: `${theme.text.color}`,
                            backgroundColor: `${theme.table.header.backgroundColor}`,
                        },
                        ".MuiTabs-scrollButtons.Mui-disabled": {
                            opacity: 0.3
                        },
                        "& .MuiTabs-indicatorSpan": {
                            width: "100%",
                            backgroundColor: elementalColors(element),
                        },
                    }}
                >
                    {
                        Object.keys(skills).map((key, index) => (
                            <StyledTab
                                key={key}
                                label={
                                    <img
                                        src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_${key}.png`}
                                        style={skillIcon(index)}
                                        alt={key}
                                        onError={ErrorLoadingImage}
                                    />
                                }
                            />
                        ))
                    }
                </StyledTabs>
            </Box>
            {
                Object.keys(skills).map((key, index) => (
                    <TabPanel key={key} index={index} value={tabValue}>
                        <CharacterSkillTab skillKey={key} skills={skills} rarity={rarity} element={element} materials={character.materials} keywords={character.keywords} />
                    </TabPanel>
                ))
            }
        </Card>
    )

}

export default CharacterSkillDisplay