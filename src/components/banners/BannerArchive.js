import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box, Typography } from "@mui/material";
import BannerList from "./BannerList";

const BannerArchive = (props) => {

    const theme = useTheme();

    let { banners } = props;

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "left",
                }}
            >
                <Typography
                    variant="h4"
                    noWrap
                    component="a"
                    sx={{
                        mx: "25px",
                        my: "20px",
                        display: { xs: "none", md: "flex" },
                        fontWeight: "bold",
                        letterSpacing: ".2rem",
                        color: `${theme.text.color}`,
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                >
                    BANNER ARCHIVE
                </Typography>
            </Box>
            {
                banners.characterBanners.length > 0 && banners.lightconeBanners.length > 0 &&
                <Box sx={{ display: "flex" }}>
                    <BannerList banners={banners.characterBanners} type="character" />
                    <BannerList banners={banners.lightconeBanners} type="lightcone" />
                </Box>
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