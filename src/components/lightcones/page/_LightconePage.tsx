import * as React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import parse from "html-react-parser"

// Component imports
import LightconeStatsTable from "./LightconeStatsTable"
import LightconeAscension from "./LightconeAscension"
import { CustomSlider } from "../../_custom/CustomSlider"
import { TabPanel, StyledTabs, StyledTab } from "../../_custom/CustomTabs"

// MUI imports
import { useTheme, useMediaQuery, Typography, Box, CardHeader, AppBar } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../../redux/store"
import { LightconeData } from "../../../types/lightcone/LightconeData"

function LightconePage() {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    const { lc_name } = useParams<{ lc_name: string }>()
    const lightcones = useSelector((state: RootState) => state.lightcones.lightcones)
    const lightcone = lightcones.find((lc: LightconeData) => lc.name.split(" ").join("_").toLowerCase() === lc_name)

    const [tabValue, setTabValue] = React.useState(0)
    const handleTabChange = (event: React.BaseSyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    let maxValue = 5
    const [sliderValue, setSliderValue] = React.useState(1)
    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setSliderValue(newValue as number)
    }

    let scaling
    if (lightcone !== undefined) {
        scaling = lightcone.passive.scaling
    }
    let targets = document.getElementsByClassName("text-value")
    if (scaling !== undefined) {
        scaling.forEach((subScaling: string[], index: number) => {
            let target = targets[index]
            if (target !== undefined) { target.innerHTML = subScaling[sliderValue - 1] }
        })
    }

    if (lightcone !== undefined) {
        const { name, path, rarity, passive, description } = lightcone

        if (lightcone.displayName) document.title = `${lightcone.displayName} ${process.env.REACT_APP_DOCUMENT_HEADER}`
        else document.title = `${name} ${process.env.REACT_APP_DOCUMENT_HEADER}`

        return (
            <React.Fragment>
                <Grid container spacing={3} sx={{ mb: "20px" }}>
                    <Grid size={{ xs: 12, sm: "auto" }}>
                        <Box
                            sx={{
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                width: { xs: "auto", sm: "25vw" },
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                overflow: "hidden",
                            }}
                        >
                            <img
                                src={`${process.env.REACT_APP_URL}/lightcones/${matches ? "large" : "medium"}/${name.split(" ").join("_")}.png`}
                                alt={name}
                                style={{
                                    width: "100%",
                                    transform: matches ? "scale(1.1)" : "scale(1)"
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: { xs: "none", sm: "block" },
                                py: "10px",
                                mt: "10px",
                                width: "25vw",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                color: `${theme.text.color}`,
                                backgroundColor: `${theme.paper.backgroundColor}`,
                            }}
                        >
                            <Typography sx={{ px: 1.5, color: `${theme.text.color}`, fontSize: { xs: "12px", sm: "14px" } }}>
                                {parse(description)}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: "grow" }}>
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
                                            fontSize: { xs: "24px", sm: "32px" },
                                            color: `${theme.text.color}`,
                                        }}
                                    >
                                        {lightcone.displayName ? lightcone.displayName : name}
                                    </Typography>
                                    <CardHeader
                                        avatar={
                                            <img src={`${process.env.REACT_APP_URL}/paths/The_${path}.png`} alt={path} style={{ width: matches ? "40px" : "32px", }} onError={ErrorLoadingImage} />
                                        }
                                        title={
                                            <Typography sx={{ color: `${theme.text.color}`, fontSize: { xs: "14px", sm: "18px" }, ml: "-5px" }}>
                                                The {path}
                                            </Typography>
                                        }
                                        sx={{ px: 0, py: 0.5 }}
                                    />
                                    <Typography sx={{ color: `rgb(255, 208, 112)`, fontSize: { xs: "24px", sm: "28px" }, textShadow: "#e3721b 1px 1px 10px", userSelect: "none" }}>
                                        {[...Array(rarity).keys()].map(() => "✦")}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                p: 2,
                                my: "15px",
                                border: `1px solid ${theme.border.color}`,
                                borderRadius: "5px",
                                backgroundColor: `${theme.paper.backgroundColor}`,
                                color: `${theme.text.color}`,
                            }}
                        >
                            <Typography sx={{ fontSize: { xs: "13.5px", sm: "16px" } }}>
                                <i>The following effects only work on characters of the Path of The {path}.</i>
                            </Typography>
                            <Typography sx={{ mt: "20px", fontSize: { xs: "20px", sm: "24px" } }}>
                                {passive.name}
                            </Typography>
                            <Typography sx={{ mt: "10px", fontSize: { xs: "13.5px", sm: "16px" } }}>
                                {parse(passive.effect as string)}
                            </Typography>
                            <Box sx={{ display: { xs: "block", md: "flex" }, alignItems: "center", width: "40%", mt: "20px", mb: "10px" }}>
                                <Typography sx={{ color: theme.text.color, fontSize: "18px", minWidth: "50px" }}>
                                    S{sliderValue}
                                </Typography>
                                <CustomSlider
                                    value={sliderValue}
                                    step={1}
                                    min={1}
                                    max={maxValue}
                                    onChange={handleSliderChange}
                                    sx={{ minWidth: "100px", ml: "10px" }}
                                />
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
                    <Box
                        sx={{
                            display: { xs: "block", sm: "none" },
                            py: "10px",
                            width: "auto",
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
            </React.Fragment>
        )
    }
    else {
        return (
            <></>
        )
    }

}

export default LightconePage