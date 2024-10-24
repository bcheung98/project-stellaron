import * as React from "react"
import { useSelector } from "react-redux"

// Component imports
import CustomCard from "../_custom/CustomCard"

// MUI imports
import { useTheme, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Type imports
import { RootState } from "../../redux/store"
import RelicPopup from "./RelicPopup"

function RelicBrowser() {

    const theme = useTheme()

    const relics = useSelector((state: RootState) => state.relics)

    document.title = `Relics ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <React.Fragment>
            <Typography
                sx={{
                    mb: "20px",
                    fontFamily: `${theme.font.styled.family}`,
                    fontSize: "24px",
                    color: `${theme.text.color}`,
                    lineHeight: "40px"
                }}
            >
                Relics
            </Typography>
            <Grid container spacing={2}>
                {
                    relics.cavernRelics.map((relic, index) =>
                        <CustomCard key={index} id={`${relic.name}-relicBrowser`} name={relic.name} displayName={relic.displayName} type="relic" rarity={5} variant="avatar" size="128px" showStars={false} relic={relic} popup={<RelicPopup relic={relic} functions={[]} />} disableLink />
                    )
                }
                <hr style={{ border: `.5px solid ${theme.border.color}`, width: "100%" }} />
                {
                    relics.planarOrnaments.map((relic, index) =>
                        <CustomCard key={index} id={`${relic.name}-relicBrowser`} name={relic.name} displayName={relic.displayName} type="relic" rarity={5} variant="avatar" size="128px" showStars={false} relic={relic} popup={<RelicPopup relic={relic} functions={[]} />} disableLink />
                    )
                }
            </Grid>
        </React.Fragment>
    )

}

export default RelicBrowser