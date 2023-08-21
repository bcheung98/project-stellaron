import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";

const VersionHighlights = (props) => {

    const theme = useTheme();

    return (
        <></>
    )

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        lightcones: state.lightcones,
    }
}

export default connect(mapStateToProps)(VersionHighlights);