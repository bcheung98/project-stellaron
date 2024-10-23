import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "./_custom/CustomCard"
import RelicCard from "./relics/RelicCard"
import { CustomInput } from "./_custom/CustomInput"
import { CustomMenuItem } from "./_custom/CustomMenu"

// MUI imports
import { useTheme, Box, Typography, Select, AppBar, CardHeader, IconButton } from "@mui/material"
import Grid from "@mui/material/Grid2"
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

// Helper imports
import { updates } from "../data/versions"

function VersionHighlights(props) {

    const theme = useTheme()

    const [index, setIndex] = React.useState(0)
    const handleIndexChange = (event) => {
        setIndex(Number(event.target.value))
    }
    const handleIndexChangeLeft = () => {
        if (index + 1 < updates.length) setIndex(index + 1)
    }
    const handleIndexChangeRight = () => {
        if (index - 1 >= 0) setIndex(index - 1)
    }

    let version = updates[index].version

    let characters = props.characters.characters.filter(char => char.release.version === version)
    let lightcones = props.lightcones.lightcones.filter(lc => lc.release.version === version)
    let cavernRelics = []
    let planarOrnaments = []
    if (props.relics.relics[0] !== undefined) { cavernRelics = props.relics.relics[0]["cavernRelics"].filter(relic => relic.release.version === version).sort((a, b) => a.name.localeCompare(b.name)) }
    if (props.relics.relics[0] !== undefined) { planarOrnaments = props.relics.relics[0]["planarOrnaments"].filter(relic => relic.release.version === version).sort((a, b) => a.name.localeCompare(b.name)) }
    let newRelics = cavernRelics.length > 0 || planarOrnaments.length > 0

    document.title = `Honkai: Star Rail ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                    height: "70px"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography variant="h6" component="p" sx={{ fontWeight: "bold", ml: "5px", lineHeight: "45px" }}>
                        {`Version Highlights`}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                        {
                            index < updates.length - 1 ?
                                <Box sx={{ width: "32px" }}>
                                    <IconButton onClick={handleIndexChangeLeft}>
                                        <KeyboardArrowLeftIcon sx={{ color: `${theme.text.color}`, mt: "2px", ml: "-10px" }} />
                                    </IconButton>
                                </Box>
                                :
                                <Box sx={{ width: "32px" }} />
                        }
                        <Select
                            value={index.toString()}
                            label="Version"
                            onChange={handleIndexChange}
                            input={<CustomInput />}
                            sx={{
                                width: "75px",
                                "& .MuiSelect-icon": {
                                    color: `${theme.text.color}`
                                }
                            }}
                        >
                            {
                                updates.map((version, index) => (
                                    <CustomMenuItem key={index} value={index}>
                                        <Typography sx={{ fontWeight: "bold" }}>{version.version}</Typography>
                                    </CustomMenuItem>
                                ))
                            }
                        </Select>
                        {
                            index > 0 ?
                                <Box sx={{ width: "32px" }}>
                                    <IconButton onClick={handleIndexChangeRight}>
                                        <KeyboardArrowRightIcon sx={{ color: `${theme.text.color}`, mt: "2px" }} />
                                    </IconButton>
                                </Box>
                                :
                                <Box sx={{ width: "32px" }} />
                        }
                    </Box>
                </Box>
            </AppBar>

            <Box sx={{ px: "30px" }}>
                <Typography sx={{ fontSize: "18pt", color: `${theme.text.color}`, my: "20px" }}>
                    {updates[index].version} - <i>{updates[index].name}</i>
                </Typography>

                <Grid container spacing={5}>
                    {
                        // NEW CHARACTERS
                        characters.length > 0 || newRelics ?
                            <Grid size={{ sm: 12, md: 6 }}>
                                <CardHeader
                                    avatar={<img src={`${process.env.REACT_APP_URL}/icons/Character.png`} alt="New Characters" style={{ width: "40px", marginRight: "-5px" }} />}
                                    title={
                                        <Typography variant="h6">
                                            New Characters
                                        </Typography>
                                    }
                                    sx={{ p: 0, mb: "30px" }}
                                />
                                <Grid container spacing={2}>
                                    {characters.sort((a, b) => a.id > b.id ? 1 : -1).map((char, index) => <CustomCard key={index} id={`${char.name}-currentBanner`} name={char.name} displayName={char.displayName} type="character" variant="avatar" rarity={char.rarity} info={{ element: char.element, path: char.path }} />)}
                                </Grid>
                                {
                                    // NEW RELICS
                                    newRelics &&
                                    <Box sx={{ mt: characters.length > 0 ? "50px" : "0px" }}>
                                        <CardHeader
                                            avatar={<img src={`${process.env.REACT_APP_URL}/icons/Relic.png`} alt="New Relics" style={{ width: "40px", marginRight: "-5px" }} />}
                                            title={
                                                <Typography variant="h6">
                                                    New Relics
                                                </Typography>
                                            }
                                            sx={{ p: 0, mb: "30px" }}
                                        />
                                        <Grid container spacing={2}>
                                            {cavernRelics.map((relic, index) => <RelicCard key={index} relic={relic} />)}
                                        </Grid>
                                        {cavernRelics.length > 0 && <br />}
                                        <Grid container spacing={2}>
                                            {planarOrnaments.map((relic, index) => <RelicCard key={index} relic={relic} />)}
                                        </Grid>
                                    </Box>
                                }
                            </Grid>
                            :
                            null
                    }
                    {
                        // NEW LIGHT CONES
                        lightcones.length > 0 &&
                        <Grid size={{ sm: 12, md: "grow" }}>
                            <CardHeader
                                avatar={<img src={`${process.env.REACT_APP_URL}/icons/Lightcone.png`} alt="New Lightcones" style={{ width: "40px", marginRight: "-5px" }} />}
                                title={
                                    <Typography variant="h6">
                                        New Light Cones
                                    </Typography>
                                }
                                sx={{ p: 0, mb: "30px" }}
                            />
                            <Grid container spacing={2}>
                                {
                                    lightcones.sort((a, b) => a.rarity < b.rarity ? 1 : -1).sort((a, b) => a.rarity < b.rarity ? 1 : -1).map((lc, index) => <CustomCard key={index} id={`${lc.name}-currentBanner`} name={lc.name} displayName={lc.displayName} type="lightcone" variant="avatar" rarity={lc.rarity} info={{ path: lc.path }} />)
                                }
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Box>
            <br />
        </Box>
    )

}

const mapStateToProps = (state) => ({
    characters: state.characters,
    lightcones: state.lightcones,
    relics: state.relics,
})

export default connect(mapStateToProps)(VersionHighlights)