import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";

const CharacterBrowser = (props) => {

    const theme = useTheme();

    let { characters} = props;

    console.log(characters)

    return (
        <React.Fragment>

        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
    }
}

export default connect(mapStateToProps)(CharacterBrowser);