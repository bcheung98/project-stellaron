import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import CharacterSelector from "./CharacterSelector";
import LightconeSelector from "./LightconeSelector";

const AscensionPlanner = (props) => {

    const theme = useTheme();

    return (
        <Box sx={{ display: "block", mt: "30px", mx: "auto", width: "35%" }}>
            <Box sx={{ display: "flex" }}>
                <CharacterSelector />
                <LightconeSelector />
            </Box>
        </Box>
    )

}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps)(AscensionPlanner);