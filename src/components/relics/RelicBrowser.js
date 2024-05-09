import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import RelicCard from "./RelicCard";

const RelicBrowser = (props) => {

    const theme = useTheme();

    let { relics } = props;

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
            <Grid container sx={{ margin: "auto", width: "98%" }}>
                {
                    relics.relics.length > 0 &&
                    <React.Fragment>
                        {relics.relics[0].cavernRelics.sort((a, b) => a.name.localeCompare(b.name)).map((relic, index) => <RelicCard key={index} relic={relic} type="cavern" />)}
                        <hr style={{ border: `.5px solid ${theme.border.color}`, width: "100%", marginBottom: "20px" }} />
                        {relics.relics[0].planarOrnaments.sort((a, b) => a.name.localeCompare(b.name)).map((relic, index) => <RelicCard key={index} relic={relic} type="planar" />)}
                    </React.Fragment>
                }
            </Grid>
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        relics: state.relics
    }
}

export default connect(mapStateToProps)(RelicBrowser);