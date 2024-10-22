// Component imports
import CurrentBanners from "./banners/CurrentBanners"
import VersionHighlights from "./VersionHighlights"

// MUI imports
import Grid from "@mui/material/Grid2"

function Home() {

    document.title = `Honkai: Star Rail ${process.env.REACT_APP_DOCUMENT_HEADER}`

    return (
        <Grid container spacing={2} columns={{ xs: 5, md: 12 }}>
            <CurrentBanners />
            <VersionHighlights />
        </Grid>
    )

}

export default Home