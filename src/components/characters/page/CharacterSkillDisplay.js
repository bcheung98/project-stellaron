import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Box, AppBar } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";
import CharacterSkillTab from "./CharacterSkillTab";

const CharacterSkillDisplay = (props) => {

    const theme = useTheme();

    const skillIcon = {
        width: "56px",
        height: "56px",
        border: `2px solid ${theme.border.color}`,
        borderRadius: "56px",
    }

    let { name, element, rarity, skills } = props.character;

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
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
                <Typography sx={{ m: 2, color: `${theme.text.color}` }} variant="h6">
                    Skills
                </Typography>
            </AppBar>
            <Box sx={{ mt: "10px" }}>
                <StyledTabs value={tabValue} onChange={handleTabChange}>
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_attack.png`} style={skillIcon} alt="Basic ATK" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_skill.png`} style={skillIcon} alt="Skill" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_ultimate.png`} style={skillIcon} alt="Ultimate" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_talent.png`} style={skillIcon} alt="Talent" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_technique.png`} style={skillIcon} alt="Technique" onError={ErrorLoadingImage} />} />
                </StyledTabs>
            </Box>
            {
                Object.keys(skills).map((key, index) => (
                    <TabPanel key={key} index={index} value={tabValue} >
                        <CharacterSkillTab skillKey={key} skills={skills} rarity={rarity} element={element} materials={props.character.materials} keywords={props.character.keywords} />
                    </TabPanel>
                ))
            }
        </Box>
    )

}

export default CharacterSkillDisplay;