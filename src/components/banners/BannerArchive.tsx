import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import BannerList from "./BannerList";
import Grid from "@mui/material/Grid2";

const BannerArchive = (props) => {

    const theme = useTheme();

    let { banners } = props;

    document.title = `Banner Archive ${process.env.REACT_APP_DOCUMENT_HEADER}`;

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
                    Banner Archive
                </Typography>
            </Box>
            {
                banners.characterBanners.length > 0 && banners.lightconeBanners.length > 0 &&
                <Grid container spacing={2}>
                    <BannerList banners={banners.characterBanners} type="character" />
                    <BannerList banners={banners.lightconeBanners} type="lightcone" />
                </Grid>
            }
        </React.Fragment>
    )

}

const mapStateToProps = (state) => {
    return {
        banners: state.banners
    }
}

export default connect(mapStateToProps)(BannerArchive);