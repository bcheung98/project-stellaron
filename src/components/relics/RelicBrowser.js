import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography, Paper, InputBase, Stack, ToggleButtonGroup } from "@mui/material";

const RelicBrowser = (props) => {

    const theme = useTheme();

    document.title = "Relics - Project Stellaron";

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
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
                    RELICS
                </Typography>
            </Box>
        </React.Fragment>
    )

}

export default RelicBrowser;