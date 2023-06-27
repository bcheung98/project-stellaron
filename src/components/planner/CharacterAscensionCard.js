import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const CharacterAscensionCard = (props) => {

    const theme = useTheme();

    let { character } = props;

    return (
        <Box>
            <Typography sx={{ color: `${theme.text.color}` }}>
                {character.name}
            </Typography>
        </Box>
    )

}

export default CharacterAscensionCard;