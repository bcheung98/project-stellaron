import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import parse from "html-react-parser"
import { Typography, Box, CardHeader, AppBar } from "@mui/material"
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs"
import Grid from "@mui/material/Grid2"
import { CustomSlider } from "../../_custom/CustomSlider"
import LightconeStatsTable from "./LightconeStatsTable"
import LightconeAscension from "./LightconeAscension"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

const LightconePage = (props) => {

    const theme = useTheme()

    let { lc_name } = useParams()
    let { lightcones } = props
    let lightcone = lightcones.lightcones.find(lc => lc.name.split(" ").join("_").toLowerCase() === lc_name)

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue)
    }

    let maxValue = 5
    const [sliderValue, setSliderValue] = React.useState(1)
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue)
    }

    let scaling
    if (lightcone !== undefined) {
        scaling = lightcone.passive.scaling
    }
    let targets = document.getElementsByClassName("text-value")
    if (scaling !== undefined) {
        scaling.forEach((subScaling, index) => {
            let target = targets[index]
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1] }
        })
    }

    if (lightcone !== undefined) {
        let { name, path, rarity, passive, description } = lightcone

        document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Grid container spacing={3} sx={{ mb: "20px" }}>
                    <Grid size="auto">
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                width: "25vw",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                overflow: "clip",
                            }}
                        >
                            <img src={(`${process.env.REACT_APP_URL}/lightcones/large/${name.split(" ").join("_")}.png`)} alt={name}
                                style={{
                                    width: "100%",
                                    transform: "scale(1.04)"
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </Box>
                        <Box
                            sx={{
                                py: "10px",
                                mt: "10px",
                                width: "25vw",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography sx={{ px: 1.5, color: `${theme.text.color}` }} variant="body2">
                                {parse(description)}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size="grow">
                        <Box
                            sx={{
                                p: "5px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box sx={{ ml: "10px", mt: "5px" }}>
                                    <Typography
                                        sx={{
                                            fontFamily: `${theme.font.styled.family}`,
                                            fontSize: { xs: "26px", sm: "34px" },
                                            color: `${theme.text.color}`,
                                        }}
                                    >
                                        {lightcone.displayName ? lightcone.displayName : name}
                                    </Typography>
                                    <CardHeader
                                        avatar={
                                            <img src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} style={{ width: "40px", height: "40px" }} onError={ErrorLoadingImage} />
                                        }
                                        title={
                                            <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "16px", sm: "18px" } }} >
                                                The {path}
                                            </Typography>
                                        }
                                        sx={{ px: 0, py: 1 }}
                                    />
                                    <Typography sx={{ mt: "-5px", color: "rgb(255, 208, 112)", fontSize: "30px", textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }}>
                                        {[...Array(rarity).keys()].map(() => "✦")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                px: "5px",
                                py: "15px",
                                my: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                color: `${theme.text.color}`,
                            }}
                        >
                            <Typography sx={{ mx: "15px", fontSize: "15px" }}>
                                <i>The following effects only work on characters of the Path of The {path}.</i>
                            </Typography>
                            <Typography sx={{ mx: "15px", mt: "20px", fontSize: "24px" }}>
                                {passive.name}
                            </Typography>
                            <Typography sx={{ mx: "15px", mt: "10px" }} >
                                {parse(passive.effect)}
                            </Typography>
                            <Box sx={{ display: "flex", alignItems: "center", width: "20%", mt: "15px", mx: "15px", }}>
                                <Typography sx={{ color: `${theme.text.color}`, minWidth: "50px", fontSize: "20px" }}>
                                    S{sliderValue}
                                </Typography>
                                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: 0,
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
    else {
        return (
            <></>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        lightcones: state.lightcones
    }
}

export default connect(mapStateToProps)(LightconePage)