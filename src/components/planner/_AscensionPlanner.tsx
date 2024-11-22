import React from "react"
import { useSelector } from "react-redux"

// Component imports
import CharacterSelector from "./CharacterSelector"
import CharacterAscensionCard from "./characters/_CharacterAscensionCard"
import LightconeSelector from "./LightconeSelector"
import LightconeAscensionCard from "./lightcones/_LightconeAscensionCard"
import AscensionTotalCost from "./AscensionTotalCost"

// MUI imports
import { useTheme, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Type imports
import { RootState } from "../../redux/store"

function AscensionPlanner() {

    const theme = useTheme()

    const characters = useSelector((state: RootState) => state.ascensionPlanner.characterCosts)
    const lightcones = useSelector((state: RootState) => state.ascensionPlanner.lightconeCosts)

    document.title = `Ascension Planner ${process.env.REACT_APP_DOCUMENT_HEADER}`

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
                Ascension Planner
            </Typography>
            <Grid container spacing={5}>
                <Grid size={{ xs: 12, md: 6, xl: 5 }}>
                    <CharacterSelector />
                </Grid>
                <Grid size={{ xs: 12, md: 6, xl: 5 }}>
                    <LightconeSelector />
                </Grid>
            </Grid>
            <AscensionTotalCost />
            <Grid container spacing={5}>
                {
                    [...characters, ...lightcones].map(item =>
                        <Grid key={item.name} size={{ xs: 12, md: 6, xl: 5 }}>
                            {"element" in item ? <CharacterAscensionCard key={item.name} character={item} /> : <LightconeAscensionCard key={item.name} lightcone={item} />}
                        </Grid>
                    )
                }
            </Grid>
        </React.Fragment>
    )

}

export default AscensionPlanner