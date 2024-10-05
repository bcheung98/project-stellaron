import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import RelicCard from "./RelicCard";

const RelicBrowser = (props) => {

    const theme = useTheme();

    let { relics } = props;

    document.title = `Relics ${process.env.REACT_APP_DOCUMENT_HEADER}`;

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                    mb: "20px",
                    height: "30px",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        mr: "25px",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                    }}
                >
                    Relics
                </Typography>
            </Box>
            <Grid container spacing={2}>
                {
                    relics.relics.length > 0 ?
                        <React.Fragment>
                            {relics.relics[0].cavernRelics.sort((a, b) => a.name.localeCompare(b.name)).map((relic, index) => <RelicCard key={index} relic={relic} />)}
                            <hr style={{ border: `.5px solid ${theme.border.color}`, width: "100%" }} />
                            {relics.relics[0].planarOrnaments.sort((a, b) => a.name.localeCompare(b.name)).map((relic, index) => <RelicCard key={index} relic={relic} />)}
                        </React.Fragment>
                        :
                        null
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