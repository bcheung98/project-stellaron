import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

const CharacterPage = (props) => {

    const theme = useTheme();

    let { char_name } = useParams();
    let { characters } = props;
    let character = characters.characters.find(char => char.name.split(" ").join("_").toLowerCase() === char_name);

    if (character !== undefined) {
        let { name } = character;
        return (
            <>
                <Typography sx={{ color: `${theme.text.color}`, fontWeight: "450" }} variant="h5">
                    {name}
                </Typography>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps)(CharacterPage);