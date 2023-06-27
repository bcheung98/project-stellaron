import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import CharacterSelector from "./CharacterSelector";
import LightconeSelector from "./LightconeSelector";
import CharacterAscensionCard from "./CharacterAscensionCard";
import LightconeAscensionCard from "./LightconeAscensionCard";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    let { characters, lightcones } = props;

    return (
        <Box>
            <Box sx={{ display: "block", mt: "30px", mx: "auto", width: "35%" }}>
                <Box sx={{ display: "flex" }}>
                    <CharacterSelector />
                    <LightconeSelector />
                </Box>
            </Box>
            {characters.map(character => <CharacterAscensionCard key={character.id} character={character} />)}
            {lightcones.map(lightcone => <LightconeAscensionCard key={lightcone.id} lightcone={lightcone} />)}
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