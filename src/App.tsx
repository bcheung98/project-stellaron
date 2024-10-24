import { useEffect } from "react"
import { connect, ConnectedProps } from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

// Fetch imports
import { fetchCharacters, fetchLightcones, fetchRelics, fetchCharacterBanners, fetchLightconeBanners } from "./redux/actions/fetch"

// Component imports
import Nav from "./components/Nav"
import BottomNav from "./components/BottomNav"
import Home from "./components/Home"
import CharacterBrowser from "./components/characters/CharacterBrowser"
import CharacterPage from "./components/characters/page/_CharacterPage"
import LightconeBrowser from "./components/lightcones/LightconeBrowser"
import LightconePage from "./components/lightcones/page/_LightconePage"
import RelicBrowser from "./components/relics/RelicBrowser"
import AscensionPlanner from "./components/planner/_AscensionPlanner"
import BannerArchive from "./components/banners/BannerArchive"
import ScrollTopFab from "./components/_custom/ScrollTopFab"

// MUI imports
import { Box, CssBaseline, ThemeProvider } from "@mui/material"

// Helper imports
import theme from "./themes/theme"

// Type imports
import { AppDispatch } from "./redux/store"

function App({
    fetchCharacters,
    fetchLightcones,
    fetchRelics,
    fetchCharacterBanners,
    fetchLightconeBanners
}: ConnectedProps<typeof connector>) {

    useEffect(() => {
        fetchCharacters()
        fetchLightcones()
        fetchRelics()
        fetchCharacterBanners()
        fetchLightconeBanners()
    }, [fetchCharacters, fetchLightcones, fetchRelics, fetchCharacterBanners, fetchLightconeBanners])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router basename={`${process.env.REACT_APP_BASENAME}`}>
                <Box id="back-to-top-anchor" />
                <Box sx={{ display: "flex" }}>
                    <Nav />
                    <Box sx={{ mx: "20px", mt: "100px", minHeight: "90vh", minWidth: "30vw", width: "95vw" }}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/characters" component={CharacterBrowser} />
                            <Route path="/characters/:char_name" children={<CharacterPage />} />
                            <Route exact path="/lightcones" component={LightconeBrowser} />
                            <Route path="/lightcones/:lc_name" children={<LightconePage />} />
                            <Route exact path="/relics" component={RelicBrowser} />
                            <Route exact path="/planner" component={AscensionPlanner} />
                            <Route exact path="/banners/" component={BannerArchive} />
                        </Switch>
                    </Box>
                </Box>
                <BottomNav />
                <ScrollTopFab />
            </Router>
        </ThemeProvider>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchCharacters: () => dispatch(fetchCharacters()),
    fetchLightcones: () => dispatch(fetchLightcones()),
    fetchRelics: () => dispatch(fetchRelics()),
    fetchCharacterBanners: () => dispatch(fetchCharacterBanners()),
    fetchLightconeBanners: () => dispatch(fetchLightconeBanners())
})

const connector = connect(null, mapDispatchToProps)

export default connector(App)