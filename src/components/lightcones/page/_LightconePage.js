import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { Typography, Box, Avatar, CardHeader, AppBar } from "@mui/material";
import { TabPanel, StyledTabs, StyledTab } from "../../../helpers/CustomTabs";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomSlider } from "../../../helpers/CustomSlider";
import LightconeStatsTable from "./LightconeStatsTable";
import LightconeAscension from "./LightconeAscension";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const LightconePage = (props) => {

    const theme = useTheme();

    let { lc_name } = useParams();
    let { lightcones } = props;
    let lightcone = lightcones.lightcones.find(lc => lc.name.split(" ").join("_").toLowerCase() === lc_name);

    const [tabValue, setTabValue] = React.useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    let maxValue = 5;
    const [sliderValue, setSliderValue] = React.useState(1);
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    let scaling;
    if (lightcone !== undefined) {
        scaling = lightcone.passive.scaling;
    }
    let targets = document.getElementsByClassName("text-value");
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index];
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1]; }
        })
    }

    if (lightcone !== undefined) {
        let { name, path, rarity, passive, description } = lightcone;
        return (
            <React.Fragment>
                <Grid container sx={{ mb: "20px" }}>
                    <Grid xs="auto">
                        <img src={(`${process.env.REACT_APP_URL}/lightcones/large/${name}.png`)} alt={name}
                            style={{
                                width: "25vw",
                                marginLeft: "15px",
                                marginTop: "15px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
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
                                    <Typography sx={{ mb: "-10px", color: `${theme.text.color}`, fontWeight: "bolder" }} variant="h4">
                                        {name}
                                    </Typography>
                                    <CardHeader
                                        avatar={
                                            <Avatar src={(`${process.env.REACT_APP_URL}/paths/Path_The_${path}.png`)} alt={`${path}`} sx={{ height: "36px", width: "36px" }}>
                                                <img src={`${process.env.REACT_APP_URL}/images/Unknown.png`} alt="Unknown" style={{ width: "36px" }} />
                                            </Avatar>
                                        }
                                        title={
                                            <Typography sx={{ ml: "-10px", color: `${theme.text.color}`, fontWeight: "bold" }} variant="subtitle1">
                                                The {path}
                                            </Typography>
                                        }
                                        sx={{ ml: "-20px" }}
                                    />
                                    <Typography sx={{ mt: "-15px", color: "rgb(255, 208, 112)", textShadow: "#e3721b 1px 1px 10px" }} variant="h4">
                                        {[...Array(rarity).keys()].map(() => "✦")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: "15px",
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography sx={{ color: `${theme.text.color}` }} variant="body2">
                                <i>The following effects only work on characters of the Path of The {path}.</i>
                            </Typography>
                            <Typography sx={{ color: `${theme.text.color}`, mt: "20px" }} variant="h5">
                                {passive.name}
                            </Typography>
                            <Typography sx={{ color: `${theme.text.color}`, mt: "10px" }} variant="body1">
                                {parse(passive.effect)}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", width: "50%", mt: "15px" }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", color: `${theme.text.color}`, mr: "35px" }}>
                                    S{sliderValue}
                                </Typography>
                                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: 0,
                                mx: "15px",
                                marginTop: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <AppBar position="static"
                                sx={{
                                    backgroundColor: `${theme.appbar.backgroundColor}`,
                                    borderBottom: `1px solid ${theme.border.color}`,
                                    borderRadius: "5px 5px 0px 0px",
                                }}
                            >
                                <StyledTabs value={tabValue} onChange={handleTabChange}>
                                    <StyledTab label="Stats" />
                                    <StyledTab label="Ascension" />
                                </StyledTabs>
                            </AppBar>
                            <TabPanel value={tabValue} index={0}>
                                <LightconeStatsTable lightcone={lightcone} />
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <LightconeAscension lightcone={lightcone} />
                            </TabPanel>
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