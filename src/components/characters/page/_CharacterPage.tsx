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
import { Character, CharacterProps } from "../../../types/character"

function CharacterPage() {

    const theme = useTheme()

    const matches_md_up = useMediaQuery(theme.breakpoints.up("md"))

    const { char_name } = useParams<{ char_name: string }>()
    const characters = useSelector((state: RootState) => state.characters.characters)
    const character = characters.find((char: Character) => char.name.split(" ").join("_").toLowerCase() === char_name)

    if (character !== undefined) {

        const { name } = character

        character.displayName ?
            document.title = `${character.displayName} ${process.env.REACT_APP_DOCUMENT_HEADER}`
            :
            document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Box sx={{ mb: "15px" }}>
                    {
                        matches_md_up ?
                            <Grid container spacing={3}>
                                <Grid size={4}>
                                    <CharacterImage character={character} />
                                    <Box sx={{ my: "10px" }} />
                                    <CharacterInfoMisc character={character} />
                                </Grid>
                                <Grid size="grow">
                                    <CharacterInfoMain character={character} />
                                    <Box sx={{ my: "15px" }} />
                                    <CharacterTable character={character} />
                                </Grid>
                            </Grid>
                            :
                            <Grid container spacing={2} columns={1}>
                                <CharacterInfoMain character={character} />
                                <CharacterImage character={character} />
                                <CharacterTable character={character} />
                                <CharacterInfoMisc character={character} />
                            </Grid>
                    }
                </Box>
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

function CharacterInfoMain({ character }: CharacterProps) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

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
                            margin: matches ? "auto 20px auto 20px" : "auto 10px auto 10px",
                            width: matches ? "80px" : "64px"
                        }}
                        onError={ErrorLoadingImage}
                    />
                </CustomTooltip>
                <Box>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.styled.family}`,
                            fontSize: { xs: "24px", sm: "32px" },
                            color: `${theme.text.color}`,
                        }}
                    >
                        {character.displayName ? character.displayName : name}
                    </Typography>
                    <Box>
                        <CardHeader
                            avatar={
                                <img src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} style={{ width: matches ? "32px" : "24px" }} onError={ErrorLoadingImage} />
                            }
                            title={
                                <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "14px", sm: "18px" }, ml: "-5px" }}>
                                    The {path}
                                </Typography>
                            }
                            sx={{ px: 0, py: 0.5 }}
                        />
                        <Typography sx={{ color: `rgb(255, 208, 112)`, fontSize: { xs: "24px", sm: "28px" }, textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }}>
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
                    fontSize: { xs: "13.5px", sm: "15px" },
                    color: `${theme.text.color}`,
                }}
            >
                <i>{description}</i>
            </Typography>
        </Box>
    )

}

function CharacterInfoMisc({ character }: CharacterProps) {

    const theme = useTheme()

    const { faction, release, voiceActors } = character

    const rows = [
        { key: "Faction", value: faction },
        { key: "Release", value: `${release.date !== "" ? createDateObject(release.date as string).date : ""} (${release.version})` },
        { key: "Voice Actor (EN)", value: voiceActors["en"] },
        { key: "Voice Actor (JP)", value: voiceActors["jp"] },
    ]

    return (
        <Box
            sx={{
                py: "10px",
                width: "100%",
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
                                    <TableCell sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px" }}>
                                        <Typography sx={{ fontSize: "14px" }}>{row.key}</Typography>
                                    </TableCell>
                                    <TableCell align="right" sx={{ color: `${theme.text.color}`, border: "none", py: "1.5px" }}>
                                        <Typography sx={{ fontSize: "14px" }}>{row.value}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )

}

function CharacterImage({ character }: CharacterProps) {

    const theme = useTheme()
    const matches_sm_up = useMediaQuery(theme.breakpoints.up("sm"))
    const matches_lg_up = useMediaQuery(theme.breakpoints.up("lg"))

    const { name, splashArt } = character

    const splashImg = matches_sm_up ?
        <img src={`${process.env.REACT_APP_URL}/characters/splash/${name.split(" ").join("_")}.png`} alt={name}
            style={{
                width: "100%",
                height: "600px",
                objectFit: "contain",
                transform: matches_lg_up ? `scale(${splashArt.scale}) translate(${splashArt.translate[0]}px, ${splashArt.translate[1]}px)` : "scale(1.5) translate(0px, 0px)",
                // cursor: "pointer",
            }}
            onError={(e: any) => {
                e.target.src = `${process.env.REACT_APP_URL}/images/Test_Character.png`
                e.target.style.transform = `scale(1.25) translate(0px, 0px)`
                e.onError = null
            }}
        />
        :
        <img src={`${process.env.REACT_APP_URL}/characters/splash/${name.split(" ").join("_")}.png`} alt={name}
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

    return (
        <Box
            sx={{
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                width: "100%",
                backgroundColor: `${theme.paper.backgroundColor}`,
                overflow: "hidden",
            }}
        >
            {splashImg}
        </Box>
    )

}

function CharacterTable({ character }: CharacterProps) {

    const theme = useTheme()

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <Box
            sx={{
                p: 0,
                width: "100%",
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
    )

}