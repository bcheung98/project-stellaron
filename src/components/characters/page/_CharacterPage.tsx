import * as React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

// Component imports
import CharacterSkillDisplay from "./CharacterSkillDisplay"
import CharacterTraceDisplay from "./CharacterTraceDisplay"
import CharacterEidolonDisplay from "./CharacterEidolonDisplay"
import CharacterStatsTable from "./CharacterStatsTable"
import CharacterAscension from "./CharacterAscension"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, CardHeader, AppBar, Table, TableContainer, TableBody, TableRow, TableCell } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"
import { createDateObject } from "../../../helpers/dates"

// Type imports
import { RootState } from "../../../redux/store"
import { CharacterData } from "../../../types/character/CharacterData"

function CharacterPage() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))
    const matches_lg_up = useMediaQuery(theme.breakpoints.up("lg"))

    const { char_name } = useParams<{ char_name: string }>()
    const characters = useSelector((state: RootState) => state.characters.characters)
    const character = characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name)

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    if (character !== undefined) {
        const { name, faction, splashArt, release, voiceActors } = character

        const rows = [
            { key: "Faction", value: faction },
            { key: "Release", value: `${release.date !== "" ? createDateObject(release.date as string).date : ""} (${release.version})` },
            { key: "Voice Actor (EN)", value: voiceActors["en"] },
            { key: "Voice Actor (JP)", value: voiceActors["jp"] },
        ]

        const splashImg = matches ?
            <img src={`${process.env.REACT_APP_URL}/characters/splash/${name.split(" ").join("_")}.png`} alt={name}
                style={{
                    width: "100%",
                    height: matches_lg_up ? "auto" : "600px",
                    objectFit: "contain",
                    transform: matches_lg_up ? `scale(${splashArt.scale}) translate(${splashArt.translate[0]}px, ${splashArt.translate[1]}px)` : "scale(1.5)",
                    // cursor: "pointer",
                }}
                onError={(e: any) => {
                    e.target.src = `${process.env.REACT_APP_URL}/images/Test_Character.png`
                    e.target.style.transform = `scale(1.25) translate(0px, 0px)`
                    e.onError = null
                }}
            />
            :
            <img src={`${process.env.REACT_APP_URL}/characters/avatars/${name.split(" ").join("_")}.png`} alt={name}
                style={{
                    width: "100%",
                    // cursor: "pointer",
                }}
                onError={(e: any) => {
                    e.target.src = `${process.env.REACT_APP_URL}/images/Test_Character.png`
                    e.target.style.transform = `scale(1.25) translate(0px, 0px)`
                    e.onError = null
                }}
            />

        character.displayName ? document.title = `${character.displayName} ${process.env.REACT_APP_DOCUMENT_HEADER}` : document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Grid container spacing={3} sx={{ mb: "20px" }}>
                    <Grid size={{ xs: 12, sm: "auto" }}>
                        {!matches && <CharacterInfoMain character={character} />}
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                width: { xs: "90vw", sm: "30vw" },
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                overflow: "hidden",
                            }}
                        >
                            {splashImg}
                        </Box>
                        <Box
                            sx={{
                                py: "10px",
                                mt: "10px",
                                width: { xs: "90vw", sm: "30vw" },
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
                    <Grid size={{ xs: 12, sm: "grow" }} sx={{ mb: "20px" }}>
                        <Box>
                            {matches && <CharacterInfoMain character={character} />}
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

export default CharacterPage

function CharacterInfoMain({ character }: { character: CharacterData }) {

    const theme = useTheme()

    const { name, rarity, element, path, description } = character

    return (
        <Box
            sx={{
                p: "5px",
                mb: "15px",
                width: { xs: "90vw", sm: "auto" },
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                backgroundColor: `${theme.paper.backgroundColor}`,
            }}
        >
            <Box sx={{ display: "flex" }}>
                <CustomTooltip title={element} arrow placement="bottom">
                    <img src={`${process.env.REACT_APP_URL}/elements/Element_${element}.png`} alt={`${element}`}
                        style={{
                            margin: "auto 20px auto 20px",
                            height: "90px"
                        }}
                        onError={ErrorLoadingImage}
                    />
                </CustomTooltip>
                <Box>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.styled.family}`,
                            fontSize: { xs: "24px", sm: "34px" },
                            color: `${theme.text.color}`,
                        }}
                    >
                        {character.displayName ? character.displayName : name}
                    </Typography>
                    <Box>
                        <CardHeader
                            avatar={
                                <img src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} style={{ width: "40px", height: "40px" }} onError={ErrorLoadingImage} />
                            }
                            title={
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "18px" }, ml: "-5px" }}>
                                    The {path}
                                </Typography>
                            }
                            sx={{ px: 0, py: 0.5 }}
                        />
                        <Typography sx={{ mt: "-5px", color: `rgb(255, 208, 112)`, fontSize: "30px", textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }}>
                            {[...Array(rarity).keys()].map(() => "✦")}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "10px 15px 15px 15px" }} />
            <Typography
                sx={{
                    mb: "20px",
                    mx: "25px",
                    fontFamily: `${theme.font.styled.family}`,
                    fontSize: { xs: "12px", sm: "15px" },
                    color: `${theme.text.color}`,
                }}
            >
                <i>{description}</i>
            </Typography>
        </Box>
    )

}