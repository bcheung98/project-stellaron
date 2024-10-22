import * as React from "react"
import { connect } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"

// MUI imports
import { useTheme, Box, Typography, AppBar } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import { isTBA } from "../../helpers/isTBA"

// Type imports
import { RootState } from "../../redux/store"
import { BannerData } from "../../types/banner/BannerData"
import Countdown from "../_custom/Countdown"

function CurrentBanners(props: any) {

    const theme = useTheme()

    let { characterBanners, lightconeBanners } = props.banners

    const currentCharacterBanners = characterBanners.filter((banner: BannerData) => isCurrentBanner(createDateObject(banner.start).obj, createDateObject(banner.end).obj))
    const currentlightconeBanners = lightconeBanners.filter((banner: BannerData) => isCurrentBanner(createDateObject(banner.start).obj, createDateObject(banner.end).obj))

    const activeBanners = currentCharacterBanners.concat(currentlightconeBanners).length > 0

    return (
        <Box
            sx={{
                backgroundColor: `${theme.paper.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                color: `${theme.text.color}`,
                mb: "20px"
            }}
        >
            <AppBar position="static"
                sx={{
                    backgroundColor: `${theme.appbar.backgroundColor}`,
                    borderBottom: `1px solid ${theme.border.color}`,
                    borderRadius: "5px 5px 0px 0px",
                    p: "10px",
                    height: "70px"
                }}
            >
                <Typography noWrap sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "20px", ml: "5px", lineHeight: "45px" }}>
                    Current Banners
                </Typography>
            </AppBar>
            <Box sx={{ p: 2 }}>
                {
                    activeBanners ?
                        <React.Fragment>
                            <Grid container rowSpacing={1} columnSpacing={5}>
                                {
                                    currentCharacterBanners.length > 0 &&
                                    <Grid size={{ xs: 12, lg: "auto" }}>
                                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "20px", mb: "10px" }}>
                                            Character Event Wish
                                        </Typography>
                                        <Grid container spacing={0.75}>
                                            {currentCharacterBanners[0].fiveStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                            {currentCharacterBanners[0].fourStars.map((item: string, index: number) => <CustomCard key={index} type="character" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                        </Grid>
                                        <Countdown date={createDateObject(currentCharacterBanners[0].end)} />
                                    </Grid>
                                }
                                {
                                    currentlightconeBanners.length > 0 &&
                                    <Grid size={{ xs: 12, lg: "grow" }}>
                                        <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "20px", mb: "10px" }}>
                                            Weapon Event Wish
                                        </Typography>
                                        <Grid container spacing={0.75}>
                                            {currentlightconeBanners[0].fiveStars.map((item: string, index: number) => <CustomCard key={index} type="lightcone" name={item} rarity={!isTBA(item) ? 5 : 1} disableLink={isTBA(item)} />)}
                                            {currentlightconeBanners[0].fourStars.map((item: string, index: number) => <CustomCard key={index} type="lightcone" name={item} rarity={!isTBA(item) ? 4 : 1} disableLink={isTBA(item)} />)}
                                        </Grid>
                                        <Countdown date={createDateObject(currentlightconeBanners[0].end)} />
                                    </Grid>
                                }
                            </Grid>
                        </React.Fragment>
                        :
                        // <React.Fragment>
                        //     <Typography sx={{ fontFamily: `${theme.font.styled.family}`, fontSize: "20px", mb: "10px" }}>
                        //         There are no active banners
                        //     </Typography>
                        //     <img
                        //         src={`${process.env.REACT_APP_URL}/emotes/error9.png`}
                        //         alt="No Banners"
                        //         style={{ width: "150px" }}
                        //     />
                        // </React.Fragment>
                        null
                }
            </Box>
        </Box>
    )

}

const mapStateToProps = (state: RootState) => ({
    banners: state.banners
})

export default connect(mapStateToProps)(CurrentBanners)