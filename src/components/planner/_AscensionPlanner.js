import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CharacterSelector from "./CharacterSelector";
import LightconeSelector from "./LightconeSelector";
import CharacterAscensionCard from "./_CharacterAscensionCard";
import LightconeAscensionCard from "./_LightconeAscensionCard";
import AscensionTotalCost from "./AscensionTotalCost";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    let { characters, lightcones } = props;

    document.title = `Ascension Planner ${process.env.REACT_APP_DOCUMENT_HEADER}`;

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    Ascension Planner
                </Typography>
            </Box>
            <Grid container spacing={2}>
                <CharacterSelector />
                <LightconeSelector />
            </Grid>
            <AscensionTotalCost />
            <Grid container spacing={2}>
                {
                    characters.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {characters.map(character => <CharacterAscensionCard key={character.name} character={character} />)}
                            </Grid>
                        </Grid>
                        :
                        null
                }
                {
                    lightcones.length > 0 ?
                        <Grid size={6}>
                            <Grid container spacing={5}>
                                {lightcones.map(lightcone => <LightconeAscensionCard key={lightcone.name} lightcone={lightcone} />)}
                            </Grid>
                        </Grid>
                        :
                        null
                }
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.ascensionPlanner.characters,
        lightcones: state.ascensionPlanner.lightcones,
    }
}

export default connect(mapStateToProps)(AscensionPlanner);