import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LightconePage = (props) => {

    const theme = useTheme();

    let { lc_name } = useParams();
    let { lightcones } = props;
    let lightcone = lightcones.lightcones.find(lc => lc.name.split(" ").join("_").toLowerCase() === lc_name);
    console.log(props)

    if (lightcone !== undefined) {
        let { name, path, rarity, description } = lightcone;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <img src={(`${process.env.REACT_APP_URL}/lightcones/artwork/${name}.webp`)} alt={name}
                            style={{
                                width: "25vw",
                                marginLeft: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                // cursor: "pointer",
                            }}
                            onError={ErrorLoadingImage}
                        />
                        <Box
                            sx={{
                                ml: "15px",
                                mt: "10px",
                                p: "10px",
                                width: "24vw",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography sx={{ mb: "20px", color: `${theme.text.color}` }} variant="body2">
                                {parse(description)}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs>
                        <Box
                            sx={{
                                p: "5px",
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ ml: "10px", mt: "5px" }}>
                                    <Typography sx={{ mb: "-15px", color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h4">
                                        {name}
                                    </Typography>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={`${path}`} sx={{ height: "36px", width: "36px" }}>
                                                <img src={`${process.env.REACT_APP_URL}/Unknown.png`} alt="Unknown" style={{ width: "36px" }} />
                                            </Avatar>
                                        }
                                        title={
                                            <Typography sx={{ ml: "-10px", color: `${theme.text.color}`, fontWeight: "bold" }} variant="subtitle1">
                                                The {path}
                                            </Typography>
                                        }
                                        sx={{ ml: "-15px" }}
                                    />
                                    <Typography sx={{ mt: "-15px", color: "rgb(255, 208, 112)", fontWeight: "bolder" }} variant="h4">
                                        {[...Array(rarity).keys()].map(() => "✦")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        lightcones: state.lightcones
    }
}

export default connect(mapStateToProps)(LightconePage);