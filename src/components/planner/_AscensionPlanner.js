import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterSelector from "./CharacterSelector";
import LightconeSelector from "./LightconeSelector";
import CharacterAscensionCard from "./_CharacterAscensionCard";
import LightconeAscensionCard from "./_LightconeAscensionCard";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    let { characters, lightcones } = props;

    return (
        <Box>
            <Box sx={{ display: "block", my: "30px" }}>
                <Box sx={{ display: "flex" }}>
                    <CharacterSelector />
                    <LightconeSelector />
                </Box>
            </Box>
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