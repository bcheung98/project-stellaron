import * as React from "react";
import { useTheme } from "@mui/material/styles";
import parse from "html-react-parser";
import { Typography, Box, AppBar, CardHeader } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../../helpers/CustomTabs";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterSkillDisplay = (props) => {

    const theme = useTheme();

    const skillIcon = {
        width: "56px",
        height: "56px",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "56px",
    }

    let { name, element, path, skills } = props.character;

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box
            sx={{
                mx: "15px",
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
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_attack.webp`} style={skillIcon} alt="Basic ATK" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_skill.webp`} style={skillIcon} alt="Skill" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_ultimate.webp`} style={skillIcon} alt="Ultimate" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_talent.webp`} style={skillIcon} alt="Talent" onError={ErrorLoadingImage} />} />
                    <StyledTab label={<img src={`${process.env.REACT_APP_URL}/characters/skills/${name.split(" ").join("_").toLowerCase()}_technique.webp`} style={skillIcon} alt="Technique" onError={ErrorLoadingImage} />} />
                </StyledTabs>
            </Box>
            {
                Object.keys(skills).map((key, index) => (
                    <TabPanel key={key} value={tabValue} index={index}>
                        <Typography variant="subtitle1" sx={{ color: `${theme.text.color}` }}>
                            <i>{FormatSkillKey(key)}</i>
                        </Typography>
                        <Typography variant="h4" sx={{ color: `${theme.text.color}` }}>
                            <b>{parse(skills[key].name)}</b>
                        </Typography>
                        <Typography variant="body1" sx={{ color: `${theme.text.color}` }}>
                            {parse(skills[key].description)}
                        </Typography>
                    </TabPanel>
                ))
            }
        </Box>
    )

}

export default CharacterSkillDisplay;

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
            key = key;
    }
    return key;
}