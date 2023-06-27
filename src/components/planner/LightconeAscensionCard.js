import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

const LightconeAscensionCard = (props) => {

    const theme = useTheme();

    let { lightcone } = props;

    return (
        <Box>
            <Typography sx={{ color: `${theme.text.color}` }}>
                {lightcone.name}
            </Typography>
        </Box>
    )

}

export default LightconeAscensionCard;