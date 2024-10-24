import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { Typography, Box, CardHeader, AppBar, Table, TableContainer, TableBody, TableRow, TableCell } from "@mui/material"
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs"
import Grid from "@mui/material/Grid2"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import CharacterSkillDisplay from "./CharacterSkillDisplay"
import CharacterTraceDisplay from "./CharacterTraceDisplay"
import CharacterEidolonDisplay from "./CharacterEidolonDisplay"
import CharacterStatsTable from "./CharacterStatsTable"
import CharacterAscension from "./CharacterAscension"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"
import { createDateObject } from "../../../helpers/dates"

const CharacterPage = (props) => {

    const theme = useTheme()

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    let { char_name } = useParams()
    let { characters } = props
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name)

    if (character !== undefined) {
        let { name, element, path, rarity, description, faction, splashArt, release, voiceActors } = character

        const rows = [
            { key: "Faction", value: faction },
            { key: "Release", value: `${release.date !== "" ? createDateObject(release.date).date : ""} (${release.version})` },
            { key: "Voice Actor (EN)", value: voiceActors["en"] },
            { key: "Voice Actor (JP)", value: voiceActors["jp"] },
        ]

        character.displayName ? document.title = `${character.displayName} ${process.env.REACT_APP_DOCUMENT_HEADER}` : document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Grid container spacing={3} sx={{ mb: "20px" }}>
                    <Grid size="auto">
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                width: "30vw",
                                height: "auto",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                overflow: "hidden",
                            }}
                        >
                            <img src={(`${process.env.REACT_APP_URL}/characters/splash/${name.split(" ").join("_")}.png`)} alt={name}
                                style={{
                                    width: "100%",
                                    transform: `scale(${splashArt.scale}) translate(${splashArt.translate[0]}px, ${splashArt.translate[1]}px)`,
                                    // cursor: "pointer",
                                }}
                                onError={(e) => {
                                    e.target.src = `${process.env.REACT_APP_URL}/images/Test_Character.png`
                                    e.onError = null
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                py: "10px",
                                mt: "10px",
                                width: "30vw",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        {
                                            rows.map((row) => (
                                                <TableRow key={row.key}>
                                                    <TableCell sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px", fontFamily: "DIN, Roboto, Segoe UI" }}>
                                                        <b>{row.key}</b>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px", fontFamily: "DIN, Roboto, Segoe UI" }}>
                                                        <b>{row.value}</b>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid size="grow" sx={{ mb: "20px" }}>
                        <Box
                            sx={{
                                p: "5px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Grid container spacing={1}>
                                <Grid size="auto">
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <CustomTooltip title={element} arrow placement="bottom">
                                            <img src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={`${element}`}
                                                style={{
                                                    margin: "28px",
                                                    height: "72px"
                                                }}
                                                onError={ErrorLoadingImage}
                                            />
                                        </CustomTooltip>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontFamily: `${theme.font.styled.family}`,
                                                    fontSize: { xs: "26px", sm: "34px" },
                                                    color: `${theme.text.color}`,
                                                }}
                                            >
                                                {character.displayName ? character.displayName : name}
                                            </Typography>
                                            <CardHeader
                                                avatar={
                                                    <img src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} style={{ width: "40px", height: "40px" }} onError={ErrorLoadingImage} />
                                                }
                                                title={
                                                    <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "18px" } }} >
                                                        The {path}
                                                    </Typography>
                                                }
                                                sx={{ px: 0, py: 1 }}
                                            />
                                            <Typography sx={{ mt: "-5px", color: "rgb(255, 208, 112)", fontSize: "30px", textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }}>
                                                {[...Array(rarity).keys()].map(() => "✦")}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "10px 15px 15px 15px" }} />
                            <Typography
                                sx={{
                                    mb: "20px",
                                    mx: "25px",
                                    fontSize: { xs: "13px", sm: "15px" },
                                    color: `${theme.text.color}`,
                                }}
                            >
                                <i>{description}</i>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                p: 0,
                                mt: "15px",
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
    else {
        return (
            <></>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterPage)