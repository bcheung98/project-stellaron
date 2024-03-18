import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterSelector from "./CharacterSelector";
import LightconeSelector from "./LightconeSelector";
import CharacterAscensionCard from "./_CharacterAscensionCard";
import LightconeAscensionCard from "./_LightconeAscensionCard";
import AscensionTotalCost from "./AscensionTotalCost";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    let { characters, lightcones } = props;

    document.title = "Ascension Planner - Project Stellaron";

    return (
        <Box>
            <Typography variant="h4"
                sx={{
                    mx: "25px",
                    my: "20px",
                    display: { xs: "none", md: "flex" },
                    letterSpacing: ".2rem",
                    color: `${theme.text.color}`,
                    textDecoration: "none",
                    textAlign: "center",
                }}
            >
                ASCENSION PLANNER
            </Typography>
            <Box sx={{ display: "block", my: "30px" }}>
                <Box sx={{ display: "flex" }}>
                    <CharacterSelector />
                    <LightconeSelector />
                </Box>
            </Box>
            <AscensionTotalCost />
            <Box sx={{ mx: "20px" }}>
                <Grid container>
                    <Grid>
                        {characters.map(character => <CharacterAscensionCard key={character.id} character={character} />)}
                    </Grid>
                    <br />
                    <Grid>
                        {lightcones.map(lightcone => <LightconeAscensionCard key={lightcone.id} lightcone={lightcone} />)}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.ascensionPlanner.characters,
        lightcones: state.ascensionPlanner.lightcones,
    }
}

export default connect(mapStateToProps)(AscensionPlanner);