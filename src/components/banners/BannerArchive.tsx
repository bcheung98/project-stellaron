import * as React from "react"
import { connect } from "react-redux"

// Component imports
import BannerList from "./BannerList"

// MUI imports
import { useTheme, useMediaQuery, Typography, Radio, RadioGroup, FormControlLabel, Box } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Type imports
import { RootState } from "../../redux/store"

function BannerArchive(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.down("md"))

    let { banners } = props

    const [value, setValue] = React.useState("character")
    const handleRadioChange = (event: React.BaseSyntheticEvent) => {
        setValue(event.target.value)
    }

    document.title = `Banner Archive ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
            <RadioGroup
                value={value}
                onChange={handleRadioChange}
                sx={{
                    mb: "30px",
                    display: { xs: "block", md: "none" }
                }}
            >
                <FormControlLabel
                    value="character"
                    control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />}
                    label={
                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "13.5px", color: `${theme.text.color}` }}>
                            Character Event Wish
                        </Typography>
                    }
                />
                <FormControlLabel
                    value="weapon"
                    control={<Radio size="small" sx={{ color: `${theme.text.color}` }} />}
                    label={
                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "13.5px", color: `${theme.text.color}` }}>
                            Weapon Event Wish
                        </Typography>
                    }
                />
            </RadioGroup>
            {
                !matches ?
                    <Grid container spacing={5} columns={{ xs: 1, md: 12 }}>
                        <Grid size={5}>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.styled.family}`,
                                    fontSize: "20px",
                                    color: `${theme.text.color}`,
                                    mb: "20px"
                                }}
                            >
                                Character Banner
                            </Typography>
                            <BannerList banners={banners.characterBanners} type="character" />
                        </Grid>
                        <Grid size={5}>
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.styled.family}`,
                                    fontSize: "20px",
                                    color: `${theme.text.color}`,
                                    mb: "20px"
                                }}
                            >
                                Light Cone Banner
                            </Typography>
                            <BannerList banners={banners.lightconeBanners} type="lightcone" />
                        </Grid>
                    </Grid>
                    :
                    <React.Fragment>
                        {value === "character" && <BannerList banners={banners.characterBanners} type="character" />}
                        {value === "weapon" && <BannerList banners={banners.lightconeBanners} type="lightcone" />}
                    </React.Fragment>
            }
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    banners: state.banners
})

export default connect(mapStateToProps)(BannerArchive)