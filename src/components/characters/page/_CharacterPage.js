import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader, AppBar } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../../helpers/CustomTabs";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import CharacterSkillDisplay from "./CharacterSkillDisplay";
import CharacterTraceDisplay from "./CharacterTraceDisplay";
import CharacterEidolonDisplay from "./CharacterEidolonDisplay";
import CharacterStatsTable from "./CharacterStatsTable";
import CharacterAscension from "./CharacterAscension";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CharacterPage = (props) => {

    const theme = useTheme();

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    let { char_name } = useParams();
    let { characters } = props;
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name);

    if (character !== undefined) {
        let { name, element, path, rarity, description, release, voiceActors } = character;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <Avatar src={(`${process.env.REACT_APP_URL}/characters/splash/Character_${name.split(" ").join("_")}_Splash_Art.png`)} alt={name}
                            sx={{
                                width: "35vw",
                                height: "600px",
                                objectFit: "contain",
                                marginLeft: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                // cursor: "pointer",
                            }}
                        >
                            <img src={(`${process.env.REACT_APP_URL}/images/Test_Character.png`)} alt="Unknown"
                                style={{
                                    width: "35vw",
                                    height: "600px",
                                    objectFit: "contain",
                                    marginLeft: "15px",
                                    marginTop: "15px",
                                    backgroundColor: `${theme.paper.backgroundColor}`,
                                    // cursor: "pointer",
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </Avatar>
                        <Box
                            sx={{
                                ml: "15px",
                                mt: "10px",
                                p: "10px",
                                width: "34vw",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography sx={{ mb: "20px", color: `${theme.text.color}` }} variant="body2">
                                {parse(description)}
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                <Box sx={{ textAlign: "left" }}>
                                    <Typography variant="body2"><b>Release Date</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (EN)</b></Typography>
                                    <Typography variant="body2"><b>Voice Actor (JP)</b></Typography>
                                </Box>
                                <Box sx={{ textAlign: "right" }}>
                                    <Typography variant="body2">{`${release.date} (${release.version})`}</Typography>
                                    <Typography variant="body2">{voiceActors["en"]}</Typography>
                                    <Typography variant="body2">{voiceActors["jp"]}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs>
                        <Box
                            sx={{
                                p: "5px",
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Box sx={{ display: "flex" }}>
                                <CustomTooltip title={element} arrow placement="bottom">
                                    <img style={{ marginRight: "-5px", marginTop: "10px", height: "96px" }} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={`${element}`} onError={ErrorLoadingImage} />
                                </CustomTooltip>
                                <Box sx={{ ml: "10px", mt: "5px" }}>
                                    <Typography sx={{ mb: "-15px", color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h4">
                                        {character.displayName ? character.displayName : name}
                                    </Typography>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={`${path}`} sx={{ height: "36px", width: "36px" }}>
                                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "36px" }} />
                                            </Avatar>
                                        }
                                        title={
                                            <Typography sx={{ ml: "-10px", color: `${theme.text.color}`, fontWeight: "bold" }} variant="subtitle1">
                                                The {path}
                                            </Typography>
                                        }
                                        sx={{ ml: "-20px" }}
                                    />
                                    <Typography sx={{ mt: "-15px", color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h4">
                                        {[...Array(rarity).keys()].map(() => "✦")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: 0,
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <AppBar position="static"
                                sx={{
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    borderBottom: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px 5px 0px 0px",
                                }}
                            >
                                <StyledTabs value={tabValue} onChange={handleTabChange}>
                                    <StyledTab label="Stats" />
                                    <StyledTab label="Ascension" />
                                </StyledTabs>
                            </AppBar>
                            <TabPanel value={tabValue} index={0}>
                                <CharacterStatsTable character={character} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <CharacterAscension character={character} />
                            </TabPanel>
                        </Box>
                    </Grid>
                </Grid>
                <CharacterSkillDisplay character={character} />
                <CharacterTraceDisplay character={character} />
                <CharacterEidolonDisplay character={character} />
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterPage);