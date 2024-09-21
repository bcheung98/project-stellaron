import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import CharacterCard from "./characters/CharacterCard";
import LightconeCard from "./lightcones/LightconeCard";
import RelicCard from "./relics/RelicCard";
import { Box, Typography, Select, MenuItem, AppBar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomSelect } from "../helpers/CustomSelect"

const VersionHighlights = (props) => {

    const theme = useTheme();

    // MAKE SURE TO CHANGE THIS EVERY UPDATE!
    let updates = [
        { version: "2.5", name: "Flying Aureus Shot to Lupine Rue" },
        { version: "2.4", name: "Finest Duel Under the Pristine Blue" },
        { version: "2.3", name: "Farewell, Penacony" },
        { version: "2.2", name: "Then Wake to Weep" },
        { version: "2.1", name: "Into the Yawning Chasm" },
        { version: "2.0", name: "If One Dreams at Midnight" },
        { version: "1.6", name: "Crown of the Mundane and Divine" },
        { version: "1.5", name: "The Crepuscule Zone" },
        { version: "1.4", name: "Jolted Awake From A Winter Dream" },
        { version: "1.3", name: "Celestial Eyes Above Mortal Ruins" },
        { version: "1.2", name: "Even Immortality Ends" },
        { version: "1.1", name: "Galactic Roaming" },
        { version: "1.0", name: "The Rail Unto the Stars" }
    ]
    const [version, setVersion] = React.useState(updates[0].version);
    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }

    let characters = props.characters.characters.filter(char => char.release.version === version);
    let lightcones = props.lightcones.lightcones.filter(lc => lc.release.version === version);
    let cavernRelics = [];
    let planarOrnaments = [];
    if (props.relics.relics[0] !== undefined) { cavernRelics = props.relics.relics[0]["cavernRelics"].filter(relic => relic.release.version === version).sort((a, b) => a.name.localeCompare(b.name)) };
    if (props.relics.relics[0] !== undefined) { planarOrnaments = props.relics.relics[0]["planarOrnaments"].filter(relic => relic.release.version === version).sort((a, b) => a.name.localeCompare(b.name)) };
    let newRelics = cavernRelics.length > 0 || planarOrnaments.length > 0;

    document.title = `Honkai: Star Rail ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                display: "block",
                ml: "20px",
                mt: "20px",
                width: "75vw",
                color: `${theme.text.color}`,
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Typography variant="h5" component="p" sx={{ fontWeight: "bold", mt: "5px" }}>
                        {`Version Highlights`}
                    </Typography>
                    <Select value={version} label="Version" onChange={handleVersionChange} input={<CustomSelect />}>
                        {
                            updates.map((version, index) => {
                                return (
                                    <MenuItem key={index} value={version.version}>
                                        <Typography sx={{ fontWeight: "bold" }}>{version.version} - {version.name}</Typography>
                                    </MenuItem>
                                )
                            })
                        }
                    </Select>
                </Box>
            </AppBar>

            <Grid container spacing={2}>

                {
                    // NEW CHARACTERS
                    characters.length > 0 &&
                    <Grid xs={6}>
                        <Box sx={{ mx: "30px", my: "20px" }}>
                            <Typography variant="h6" component="p" sx={{ fontWeight: "bold", mb: "30px", ml: "-10px" }}>
                                New Characters
                            </Typography>
                            <Box>
                                <Grid container spacing={2}>
                                    {
                                        characters.sort((a, b) => a.id > b.id ? 1 : -1).map((char, index) => <CharacterCard key={index} character={char} />)
                                    }
                                </Grid>
                            </Box>
                        </Box>

                        {
                            // NEW RELICS
                            newRelics &&
                            <Box sx={{ mx: "30px", my: "20px" }}>
                                <Typography variant="h6" component="p" sx={{ fontWeight: "bold", mb: "30px", ml: "-10px" }}>
                                    New Relics
                                </Typography>
                                <Box>
                                    <Grid container spacing={2}>
                                        {cavernRelics.map((relic, index) => <RelicCard key={index} relic={relic} />)}
                                    </Grid>
                                    <Grid container spacing={2}>
                                        {planarOrnaments.map((relic, index) => <RelicCard key={index} relic={relic} />)}
                                    </Grid>
                                </Box>
                            </Box>
                        }

                    </Grid>
                }

                {
                    // NEW LIGHT CONES
                    lightcones.length > 0 &&
                    <Grid xs={6}>
                        <Box sx={{ mx: "30px", my: "20px" }}>
                            <Typography variant="h6" component="p" sx={{ fontWeight: "bold", mb: "30px", ml: "-10px" }}>
                                New Light Cones
                            </Typography>
                            <Box>
                                <Grid container spacing={2}>
                                    {
                                        lightcones.sort((a, b) => a.rarity < b.rarity ? 1 : -1).sort((a, b) => a.rarity < b.rarity ? 1 : -1).map((lc, index) => <LightconeCard key={index} lightcone={lc} />)
                                    }
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                }

            </Grid>

        </Box>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        lightcones: state.lightcones,
        relics: state.relics,
    }
}

export default connect(mapStateToProps)(VersionHighlights);